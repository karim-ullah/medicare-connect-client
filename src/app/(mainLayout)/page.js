import FeaturedDoctor from "@/components/HomePage/FeaturedDoctor";
import Hero from "@/components/HomePage/Hero";
import Specializations from "@/components/HomePage/MedicalSpecial";
import StatsSection from "@/components/HomePage/TrustedByThousand";
import WhyChooseUs from "@/components/HomePage/WhyChoiceUs";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <FeaturedDoctor/>
      <Specializations/>
      <StatsSection/>
      <WhyChooseUs/>
      
    </div>
  );
}
