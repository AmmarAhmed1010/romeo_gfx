import BgNew from "@/components/BgNew";
import CardsDesign from "@/components/CardsDesign";
import MultipleCards from "@/components/MultipleCards";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (

    <>
    <div className="h-screen w-screen bg-black">
      <BgNew />
      <MultipleCards />
      <PricingSection />
      <CardsDesign />
      </div>
    </>
  );
}
