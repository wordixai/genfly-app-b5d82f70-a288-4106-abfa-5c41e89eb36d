// src/lib/auth.ts
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from './db';
import { hash, compare } from 'bcryptjs';

// 密钥 - 在实际生产环境中应该使用环境变量
const JWT_SECRET = new TextEncoder().encode('your-secret-key-should-be-at-least-32-chars');

// 用户模式验证
export const userSchema = z.object({
  email: z.string().email({ message: '请输入有效的邮箱地址' }),
  password: z.string().min(8, { message: '密码至少需要8个字符' }),
  username: z.string().min(3, { message: '用户名至少需要3个字符' }).optional(),
});

// 登录验证
export const loginSchema = z.object({
  email: z.string().email({ message: '请输入有效的邮箱地址' }),
  password: z.string().min(1, { message: '请输入密码' }),
  remember: z.boolean().optional(),
});

// 注册用户
export async function registerUser(userData: z.infer<typeof userSchema>) {
  try {
    // 验证用户数据
    const validatedData = userSchema.parse(userData);
    
    // 检查邮箱是否已存在
    const existingUser = await db.user.findUnique({
      where: { email: validatedData.email }
    });
    
    if (existingUser) {
      return { success: false, error: '该邮箱已被注册' };
    }
    
    // 密码加密
    const hashedPassword = await hash(validatedData.password, 10);
    
    // 创建用户
    const user = await db.user.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        username: validatedData.username || validatedData.email.split('@')[0],
        createdAt: new Date(),
      },
    });
    
    // 移除密码后返回用户信息
    const { password, ...userWithoutPassword } = user;
    
    return { success: true, user: userWithoutPassword };
  } catch (error) {
    console.error('注册失败:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    return { success: false, error: '注册失败，请稍后再试' };
  }
}

// 用户登录
export async function loginUser(loginData: z.infer<typeof loginSchema>) {
  try {
    // 验证登录数据
    const validatedData = loginSchema.parse(loginData);
    
    // 查找用户
    const user = await db.user.findUnique({
      where: { email: validatedData.email }
    });
    
    if (!user) {
      return { success: false, error: '邮箱或密码不正确' };
    }
    
    // 验证密码
    const isPasswordValid = await compare(validatedData.password, user.password);
    
    if (!isPasswordValid) {
      return { success: false, error: '邮箱或密码不正确' };
    }
    
    // 创建JWT令牌
    const token = await createToken(user.id);
    
    // 移除密码后返回用户信息
    const { password, ...userWithoutPassword } = user;
    
    return { 
      success: true, 
      user: userWithoutPassword,
      token
    };
  } catch (error) {
    console.error('登录失败:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    return { success: false, error: '登录失败，请稍后再试' };
  }
}

// 创建JWT令牌
export async function createToken(userId: string) {
  return await new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') // 令牌有效期7天
    .sign(JWT_SECRET);
}

// 验证JWT令牌
export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}

// 获取当前用户
export async function getCurrentUser() {
  const token = cookies().get('auth_token')?.value;
  
  if (!token) {
    return null;
  }
  
  try {
    const payload = await verifyToken(token);
    
    if (!payload || !payload.sub) {
      return null;
    }
    
    const user = await db.user.findUnique({
      where: { id: payload.sub as string },
      select: {
        id: true,
        email: true,
        username: true,
        avatar: true,
        bio: true,
        createdAt: true,
      }
    });
    
    return user;
  } catch (error) {
    console.error('获取当前用户失败:', error);
    return null;
  }
}

// 退出登录
export function logout() {
  cookies().delete('auth_token');
}