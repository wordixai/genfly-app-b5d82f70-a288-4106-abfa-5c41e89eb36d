import Image from "next/image";
import Link from "next/link";
import { Heart, MessageSquare, Share2, Bookmark, User } from "lucide-react";

// 这个函数在实际应用中会从数据库获取数据
// 这里使用模拟数据
function getCollectionById(id: string) {
  return {
    id: parseInt(id),
    title: "Dimoo太空系列全收集",
    description: "这是我花了两年时间收集的Dimoo太空系列，包含了所有常规款和几个稀有限定款。太空系列是我最喜欢的Dimoo主题，每个角色都有独特的宇航服装和配饰。",
    username: "星空收藏家",
    userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    date: "2023-10-15",
    likes: 1245,
    comments: 89,
    images: [
      "https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2526&q=80",
      "https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
    ],
    tags: ["Dimoo", "太空系列", "全套", "限量版"],
    items: [
      { name: "宇航员Dimoo", rarity: "普通", releaseDate: "2022-05" },
      { name: "星际探险Dimoo", rarity: "普通", releaseDate: "2022-06" },
      { name: "银河Dimoo", rarity: "稀有", releaseDate: "2022-07" },
      { name: "彗星Dimoo", rarity: "普通", releaseDate: "2022-08" },
      { name: "黑洞Dimoo", rarity: "超稀有", releaseDate: "2022-09" }
    ]
  };
}

export default function CollectionDetailPage({ params }: { params: { id: string } }) {
  const collection = getCollectionById(params.id);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/collections" className="text-pink-500 hover:text-pink-600 transition-colors">
          ← 返回收藏列表
        </Link>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="relative h-96 w-full">
          <Image 
            src={collection.images[0]} 
            alt={collection.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-white mb-2">{collection.title}</h1>
              <div className="flex items-center">
                <div className="h-10 w-10 relative rounded-full overflow-hidden mr-3">
                  <Image 
                    src={collection.userAvatar} 
                    alt={collection.username}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{collection.username}</p>
                  <p className="text-gray-300 text-sm">{collection.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {collection.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-6">
              <button className="flex items-center text-pink-500">
                <Heart size={20} className="mr-2" />
                <span>{collection.likes}</span>
              </button>
              <button className="flex items-center">
                <MessageSquare size={20} className="mr-2" />
                <span>{collection.comments}</span>
              </button>
              <button className="flex items-center">
                <Share2 size={20} className="mr-2" />
                <span>分享</span>
              </button>
            </div>
            <button className="flex items-center">
              <Bookmark size={20} className="mr-2" />
              <span>收藏</span>
            </button>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">收藏描述</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {collection.description}
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">收藏图片</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {collection.images.map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image 
                    src={image} 
                    alt={`${collection.title} - 图片 ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">收藏清单</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="px-4 py-3 rounded-l-lg">名称</th>
                    <th className="px-4 py-3">稀有度</th>
                    <th className="px-4 py-3 rounded-r-lg">发行日期</th>
                  </tr>
                </thead>
                <tbody>
                  {collection.items.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">{item.rarity}</td>
                      <td className="px-4 py-3">{item.releaseDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">评论 ({collection.comments})</h2>
            <div className="flex mb-6">
              <div className="h-10 w-10 relative rounded-full overflow-hidden mr-3 flex-shrink-0">
                <div className="bg-gray-200 dark:bg-gray-700 h-full w-full flex items-center justify-center">
                  <User size={20} className="text-gray-500 dark:text-gray-400" />
                </div>
              </div>
              <div className="flex-grow">
                <textarea 
                  placeholder="写下你的评论..." 
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800"
                  rows={3}
                ></textarea>
                <div className="mt-2 flex justify-end">
                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    发表评论
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="h-10 w-10 relative rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="用户头像"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-bold mr-2">Molly爱好者</h4>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">2023-10-16</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    太棒了！我也在收集这个系列，但还缺黑洞Dimoo，真的很难找到。你是在哪里找到的呢？
                  </p>
                  <div className="mt-2 flex items-center space-x-4">
                    <button className="text-gray-500 dark:text-gray-400 text-sm hover:text-pink-500 transition-colors">
                      回复
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 text-sm hover:text-pink-500 transition-colors flex items-center">
                      <Heart size={14} className="mr-1" />
                      <span>12</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-10 w-10 relative rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="用户头像"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-bold mr-2">盲盒达人</h4>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">2023-10-15</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    这个收藏真的很完整！我特别喜欢银河Dimoo的设计，星空元素与角色结合得很好。
                  </p>
                  <div className="mt-2 flex items-center space-x-4">
                    <button className="text-gray-500 dark:text-gray-400 text-sm hover:text-pink-500 transition-colors">
                      回复
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 text-sm hover:text-pink-500 transition-colors flex items-center">
                      <Heart size={14} className="mr-1" />
                      <span>8</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="text-pink-500 hover:text-pink-600 transition-colors">
                查看更多评论
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}