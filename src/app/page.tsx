import Bg1 from "@/components/Bg1";
import FlipText from "@/components/FlipText";
import GenerateText from "@/components/GenerateText";
import Landing from "@/components/Landing";
import MultipleCards from "@/components/MultipleCards";
import PricingPlan from "@/components/PricingPlan";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (

      <>
      <header className="w-full p-4 bg-black">
      <h1 className="text-3xl px-20 py-3 lg:text-3xl font-serif  font-bold text-white  lg:text-left text-center">
        Romeo<span className="text-red-700">GFX</span>
      </h1>
    </header>
      <Bg1/> 
      <MultipleCards />
      <PricingSection />
      <PricingPlan />
      </>  
  );
}
