import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">泡泡玛特社区</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              连接全球泡泡玛特爱好者的社区平台，分享你的收藏，发现更多乐趣。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/collections" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">收藏展示</Link></li>
              <li><Link href="/series" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">系列介绍</Link></li>
              <li><Link href="/marketplace" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">交换市场</Link></li>
              <li><Link href="/events" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">活动资讯</Link></li>
              <li><Link href="/forum" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">讨论区</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">支持</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">常见问题</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">联系我们</Link></li>
              <li><Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">隐私政策</Link></li>
              <li><Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">使用条款</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">订阅最新资讯</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              获取最新的泡泡玛特发售信息和社区活动。
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="输入你的邮箱" 
                className="px-4 py-2 w-full rounded-l-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button 
                type="submit" 
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                订阅
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} 泡泡玛特社区. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}