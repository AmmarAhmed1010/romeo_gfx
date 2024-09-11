"use client"
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import BgNew from "@/components/BgNew";
import NewPricingSection from "@/components/NewPricingSection";
import CardsDesign from "@/components/CardsDesign";
import Featuring from "@/components/Featuring";
import MultipleCards from "@/components/MultipleCards";

export default function Home() {
  return (

    <>
      <BgNew/>
      <Featuring/>
      <MultipleCards/>
      <NewPricingSection/>
      <CardsDesign/>
      <Footer/>
    </>
  );
}
