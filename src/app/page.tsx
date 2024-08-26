import { BgCards } from "@/components/BgCards";
import BgNew from "@/components/BgNew";
import CardsDesign from "@/components/CardsDesign";
import MultipleCards from "@/components/MultipleCards";
import PricingPlan from "@/components/PricingPlan";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (

    <>
      <BgNew />
      <MultipleCards />
      <PricingSection />
      {/* <PricingPlan /> */}
      <CardsDesign/>
    </>
  );
}
