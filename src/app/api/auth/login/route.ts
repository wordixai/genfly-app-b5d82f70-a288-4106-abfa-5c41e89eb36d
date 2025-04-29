// src/app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { loginUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await loginUser(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }
    
    // 设置认证Cookie
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
      maxAge: body.remember ? 60 * 60 * 24 * 7 : 60 * 60 * 24, // 记住我：7天，否则1天
      path: '/',
    };
    
    cookies().set('auth_token', result.token!, cookieOptions);
    
    return NextResponse.json(
      { user: result.user },
      { status: 200 }
    );
  } catch (error) {
    console.error('登录API错误:', error);
    return NextResponse.json(
      { error: '服务器错误，请稍后再试' },
      { status: 500 }
    );
  }
}