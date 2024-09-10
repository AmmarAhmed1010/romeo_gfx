import BgNew from "@/components/BgNew";
import CardsDesign from "@/components/CardsDesign";
import Footer from "@/components/Footer";
import MultipleCards from "@/components/MultipleCards";
import NewPricingSection from "@/components/NewPricingSection";

export default function Home() {
  return (

    <>
      
      <BgNew />
      <MultipleCards /> 
      {/* <PricingSection /> */}
      <NewPricingSection/>
      {/* <NewPricingPlan/> */}
      <CardsDesign />
      <Footer/>
      
    </>
  );
}
