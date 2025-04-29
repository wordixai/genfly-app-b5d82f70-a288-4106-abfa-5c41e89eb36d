// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

// 防止开发环境中创建多个实例
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;

// 模拟数据库用户表
type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  avatar?: string | null;
  bio?: string | null;
  createdAt: Date;
};

// 模拟数据库
class MockDB {
  private users: User[] = [];
  
  user = {
    findUnique: async ({ where }: { where: { id?: string; email?: string } }) => {
      if (where.id) {
        return this.users.find(user => user.id === where.id) || null;
      }
      if (where.email) {
        return this.users.find(user => user.email === where.email) || null;
      }
      return null;
    },
    
    create: async ({ data }: { data: Omit<User, 'id'> }) => {
      const newUser = {
        id: `user_${Math.random().toString(36).substr(2, 9)}`,
        ...data
      };
      this.users.push(newUser);
      return newUser;
    },
    
    update: async ({ where, data }: { where: { id: string }, data: Partial<User> }) => {
      const userIndex = this.users.findIndex(user => user.id === where.id);
      if (userIndex === -1) return null;
      
      this.users[userIndex] = { ...this.users[userIndex], ...data };
      return this.users[userIndex];
    }
  };
}

// 如果没有真实的Prisma客户端，使用模拟数据库
if (!globalForPrisma.prisma) {
  (global as any).mockDB = (global as any).mockDB || new MockDB();
  (db as any) = (global as any).mockDB;
}