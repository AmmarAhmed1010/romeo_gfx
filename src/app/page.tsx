import Bg1 from "@/components/Bg1";
import BgNew from "@/components/BgNew";
import MultipleCards from "@/components/MultipleCards";
import PricingPlan from "@/components/PricingPlan";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (

      <>
      <BgNew/>
      {/* <Bg1/>  */}
      <MultipleCards />
      <PricingSection />
      <PricingPlan />
      </>  
  );
}
