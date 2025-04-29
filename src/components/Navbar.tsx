"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, User, Heart, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 relative mr-2">
                <Image 
                  src="https://images.unsplash.com/photo-1563170423-18f482d82cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="泡泡玛特Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="font-bold text-xl text-pink-500">泡泡玛特社区</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/collections" className="hover:text-pink-500 transition-colors">收藏展示</Link>
            <Link href="/series" className="hover:text-pink-500 transition-colors">系列介绍</Link>
            <Link href="/marketplace" className="hover:text-pink-500 transition-colors">交换市场</Link>
            <Link href="/events" className="hover:text-pink-500 transition-colors">活动资讯</Link>
            <Link href="/forum" className="hover:text-pink-500 transition-colors">讨论区</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Search size={20} />
            </button>
            <Link href="/favorites" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Heart size={20} />
            </Link>
            
            {user ? (
              <div className="relative group">
                <Link href="/profile" className="flex items-center space-x-2">
                  <div className="h-8 w-8 relative rounded-full overflow-hidden border-2 border-pink-500">
                    <Image 
                      src={user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"} 
                      alt={user.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    个人资料
                  </Link>
                  <Link href="/upload" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    上传收藏
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    退出登录
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <User size={20} />
              </Link>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/collections" 
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              收藏展示
            </Link>
            <Link 
              href="/series" 
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              系列介绍
            </Link>
            <Link 
              href="/marketplace" 
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              交换市场
            </Link>
            <Link 
              href="/events" 
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              活动资讯
            </Link>
            <Link 
              href="/forum" 
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              讨论区
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
            
            {user ? (
              <>
                <Link 
                  href="/profile" 
                  className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="h-6 w-6 relative rounded-full overflow-hidden mr-2">
                    <Image 
                      src={user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"} 
                      alt={user.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{user.username}</span>
                </Link>
                <Link 
                  href="/upload" 
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  上传收藏
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <LogOut size={18} className="mr-2" />
                  退出登录
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                登录/注册
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}