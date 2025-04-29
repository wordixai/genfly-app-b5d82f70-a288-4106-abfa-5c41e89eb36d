// src/app/api/auth/logout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  cookies().delete('auth_token');
  
  return NextResponse.json(
    { success: true },
    { status: 200 }
  );
}