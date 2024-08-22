import Cards3 from "@/components/Cards3";
import Landing from "@/components/Landing";
import MultipleCards from "@/components/MultipleCards";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      <Landing />
      <MultipleCards />
      {/* <Cards3/> */}
      <PricingSection/>
    </>
  );
}
