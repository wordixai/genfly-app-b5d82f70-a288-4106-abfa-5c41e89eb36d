import Image from "next/image";
import Link from "next/link";
import FeaturedCollections from "@/components/FeaturedCollections";
import HeroSection from "@/components/HeroSection";
import RecentPosts from "@/components/RecentPosts";
import PopularSeries from "@/components/PopularSeries";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FeaturedCollections />
      <PopularSeries />
      <RecentPosts />
      
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-6">加入我们的社区</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          无论你是资深收藏家还是刚刚开始，这里都有适合你的空间。分享你的收藏，结交志同道合的朋友。
        </p>
        <Link 
          href="/register" 
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          立即注册
        </Link>
      </section>
    </div>
  );
}