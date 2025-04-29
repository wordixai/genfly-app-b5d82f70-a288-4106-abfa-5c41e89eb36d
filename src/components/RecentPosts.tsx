import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Calendar } from "lucide-react";

const recentPosts = [
  {
    id: 1,
    title: "2023年泡泡玛特限定款大盘点",
    excerpt: "回顾2023年发布的所有限定款泡泡玛特，哪些是你的最爱？",
    author: "盲盒达人",
    date: "2023-12-28",
    image: "https://images.unsplash.com/photo-1603899968034-1a7a0a1f1f52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    comments: 45
  },
  {
    id: 2,
    title: "如何鉴别泡泡玛特真伪？收藏家必看指南",
    excerpt: "随着泡泡玛特的流行，市场上出现了不少仿制品，本文教你如何辨别真伪。",
    author: "收藏专家",
    date: "2023-12-15",
    image: "https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    comments: 32
  },
  {
    id: 3,
    title: "泡泡玛特保养秘籍：让你的收藏保持如新",
    excerpt: "正确的保养方法可以让你的泡泡玛特收藏品保持最佳状态，避免褪色和损坏。",
    author: "玩具修复师",
    date: "2023-12-05",
    image: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    comments: 28
  }
];

export default function RecentPosts() {
  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">最新文章</h2>
        <Link href="/blog" className="text-pink-500 hover:text-pink-600 transition-colors">
          查看全部 →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full card-hover">
              <div className="relative h-48 w-full">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <MessageSquare size={16} className="mr-1" />
                  <span>{post.comments} 评论</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}