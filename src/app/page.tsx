"use client"
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import BgNew from "@/components/BgNew";
import NewPricingSection from "@/components/NewPricingSection";
import CardsDesign from "@/components/CardsDesign";
import MultipleCards from "@/components/MultipleCards";
import Thumbnail from "@/components/Thumbnail";



export default function Home() {

  return (

    <>
      {/* <Zomb/> */}
      <BgNew/>
      <MultipleCards/>
      {/* <Thumbnail/>       */}
      <NewPricingSection/>
      <CardsDesign/>
      <Footer/>
    </>
  );
}
