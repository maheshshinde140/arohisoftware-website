"use client";
import React from "react";

import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import Card from "@/app/components/Card";
import TestimonialCards from "@/app/components/TestimonialCards";
import WhyChooseUs from "@/app/components/WhyChooseUs";

import Footer from "@/app/components/Footer";
import home from "../../public/home.jpg";
import Servicecard from "./components/servicecard";
import { Homelamp } from "./components/Homelamp";
import HomepageCard from "./components/HomepageCard";
import CareersComponent from "./components/CareersComponent";

export default function Home() {

  return (
    <div className=" relative overflow-hidden">
        <HeroSection />
        <HomepageCard />
        <WhyChooseUs />
        <Servicecard />
        <CareersComponent />
        <TestimonialCards />
        <Footer />
    </div>
  );
}
