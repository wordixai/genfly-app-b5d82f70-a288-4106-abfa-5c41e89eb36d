import Image from "next/image";
import Link from "next/link";

const popularSeries = [
  {
    id: 1,
    name: "Dimoo",
    description: "来自梦幻星球的Dimoo，拥有水滴形的脑袋和圆圆的眼睛，是泡泡玛特最受欢迎的IP之一。",
    image: "https://images.unsplash.com/photo-1560796819-92c8a7a9c60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    totalItems: 48
  },
  {
    id: 2,
    name: "Molly",
    description: "大眼睛小女孩Molly，是香港设计师Kenny Wong创作的经典形象，拥有众多粉丝。",
    image: "https://images.unsplash.com/photo-1513346940221-6f673d962e97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    totalItems: 56
  },
  {
    id: 3,
    name: "LABUBU",
    description: "来自艺术家Kasing Lung创作的小恶魔LABUBU，拥有尖尖的牙齿和可爱的表情。",
    image: "https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    totalItems: 36
  },
  {
    id: 4,
    name: "THE MONSTERS",
    description: "由艺术家Kasing Lung创作的可爱怪物系列，每个角色都有独特的性格。",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2526&q=80",
    totalItems: 24
  }
];

export default function PopularSeries() {
  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">热门系列</h2>
        <Link href="/series" className="text-pink-500 hover:text-pink-600 transition-colors">
          查看全部 →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {popularSeries.map((series) => (
          <Link href={`/series/${series.id}`} key={series.id}>
            <div className="flex bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="relative h-40 w-40 flex-shrink-0">
                <Image 
                  src={series.image} 
                  alt={series.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{series.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{series.description}</p>
                <span className="text-sm text-pink-500">{series.totalItems} 款收藏</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}