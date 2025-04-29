import Image from "next/image";
import Link from "next/link";
import { Filter, Search, Heart } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Dimoo太空系列全收集",
    username: "星空收藏家",
    image: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    likes: 1245,
    comments: 89,
    tags: ["Dimoo", "太空系列", "全套"]
  },
  {
    id: 2,
    title: "Molly经典款珍藏",
    username: "Molly控",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
    likes: 986,
    comments: 56,
    tags: ["Molly", "经典款", "限量版"]
  },
  {
    id: 3,
    title: "LABUBU限定版展示",
    username: "盲盒达人",
    image: "https://images.unsplash.com/photo-1566576912333-73f3d6ddcab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    likes: 1567,
    comments: 124,
    tags: ["LABUBU", "限定版", "稀有"]
  },
  {
    id: 4,
    title: "THE MONSTERS系列收藏",
    username: "怪物爱好者",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2526&q=80",
    likes: 876,
    comments: 42,
    tags: ["THE MONSTERS", "全套", "收藏"]
  },
  {
    id: 5,
    title: "Skullpanda珍藏系列",
    username: "熊猫迷",
    image: "https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    likes: 1102,
    comments: 67,
    tags: ["Skullpanda", "限量版", "珍藏"]
  }
];

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">收藏展示</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="搜索收藏..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Filter size={18} />
            <span>筛选</span>
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
          全部
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Dimoo
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Molly
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          LABUBU
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Skullpanda
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          THE MONSTERS
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Link href={`/collections/${collection.id}`} key={collection.id}>
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="relative h-64 w-full">
                <Image 
                  src={collection.image} 
                  alt={collection.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">by {collection.username}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {collection.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Heart size={18} className="text-pink-500 mr-1" />
                    <span className="text-gray-600 dark:text-gray-400">{collection.likes}</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{collection.comments} 评论</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
          加载更多
        </button>
      </div>
    </div>
  );
}