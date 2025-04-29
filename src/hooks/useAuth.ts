// src/hooks/useAuth.ts
"use client";

import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

// 用户类型定义
export type User = {
  id: string;
  email: string;
  username: string;
  avatar?: string | null;
  bio?: string | null;
  createdAt: string;
};

// 认证上下文类型
type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string, remember?: boolean) => Promise<boolean>;
  register: (email: string, username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

// 创建认证上下文
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 认证提供者组件
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // 获取当前用户
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (err) {
        console.error('获取用户信息失败:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  // 登录函数
  const login = async (email: string, password: string, remember: boolean = false): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, remember }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error || '登录失败');
        return false;
      }
      
      setUser(data.user);
      return true;
    } catch (err) {
      console.error('登录错误:', err);
      setError('登录过程中发生错误，请稍后再试');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // 注册函数
  const register = async (email: string, username: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error || '注册失败');
        return false;
      }
      
      return true;
    } catch (err) {
      console.error('注册错误:', err);
      setError('注册过程中发生错误，请稍后再试');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // 退出登录函数
  const logout = async (): Promise<void> => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
      router.push('/login');
    } catch (err) {
      console.error('退出登录错误:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 使用认证的Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth必须在AuthProvider内部使用');
  }
  return context;
}