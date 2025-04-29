import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

// 需要认证的路径
const protectedPaths = [
  '/profile',
  '/upload',
];

// 不需要重定向的API路径
const publicApiPaths = [
  '/api/auth/login',
  '/api/auth/register',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 检查是否是API路由
  if (pathname.startsWith('/api/')) {
    // 公共API路径不需要验证
    if (publicApiPaths.some(path => pathname.startsWith(path))) {
      return NextResponse.next();
    }
    
    // 验证API请求的认证
    if (pathname.startsWith('/api/')) {
      const token = request.cookies.get('auth_token')?.value;
      
      if (!token) {
        return NextResponse.json({ error: '未授权' }, { status: 401 });
      }
      
      const payload = await verifyToken(token);
      
      if (!payload) {
        return NextResponse.json({ error: '无效的令牌' }, { status: 401 });
      }
      
      return NextResponse.next();
    }
  }
  
  // 检查是否是受保护的路径
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));
  
  if (isProtectedPath) {
    const token = request.cookies.get('auth_token')?.value;
    
    // 如果没有令牌，重定向到登录页面
    if (!token) {
      const url = new URL('/login', request.url);
      url.searchParams.set('redirect', pathname);
      return NextResponse.redirect(url);
    }
    
    // 验证令牌
    const payload = await verifyToken(token);
    
    // 如果令牌无效，重定向到登录页面
    if (!payload) {
      const url = new URL('/login', request.url);
      url.searchParams.set('redirect', pathname);
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

// 配置匹配的路径
export const config = {
  matcher: [
    '/profile/:path*',
    '/upload/:path*',
    '/api/:path*',
  ],
};