import HeroSection from "@/components/home/HeroSection";
import PopularCourses from "@/components/home/PopularCourses";
import CoursesCategory from "@/components/home/CoursesCategory";
import FeaturesSection from "@/components/home/FeaturesSection";
import GiftCardSection from "@/components/home/GiftCardSection";
import ExclusiveBundles from "@/components/home/ExclusiveBundles";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <HeroSection />
      <PopularCourses />
      <CoursesCategory />
      <FeaturesSection />
      <GiftCardSection />
      <ExclusiveBundles />
    </div>
  );
}
