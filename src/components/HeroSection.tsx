import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">分享</span>你的泡泡玛特收藏
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              加入我们的社区，展示你的收藏，发现稀有款式，与其他收藏家交流心得。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/collections" 
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                浏览收藏
              </Link>
              <Link 
                href="/register" 
                className="bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                加入社区
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="泡泡玛特收藏展示" 
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
                <span className="text-sm font-medium">5,234 位收藏家在线</span>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">12,500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">收藏展示</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}