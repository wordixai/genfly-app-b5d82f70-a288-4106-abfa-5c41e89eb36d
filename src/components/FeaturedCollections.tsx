import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const featuredCollections = [
  {
    id: 1,
    title: "Dimoo太空系列全收集",
    username: "星空收藏家",
    image: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    likes: 1245,
    comments: 89
  },
  {
    id: 2,
    title: "Molly经典款珍藏",
    username: "Molly控",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
    likes: 986,
    comments: 56
  },
  {
    id: 3,
    title: "LABUBU限定版展示",
    username: "盲盒达人",
    image: "https://images.unsplash.com/photo-1566576912333-73f3d6ddcab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    likes: 1567,
    comments: 124
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">精选收藏</h2>
        <Link href="/collections" className="text-pink-500 hover:text-pink-600 transition-colors">
          查看全部 →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCollections.map((collection) => (
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
    </section>
  );
}