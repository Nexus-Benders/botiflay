import Container from "@/_components/layout/container";
import AboutUs from "@/_components/sections/about-us";
import BlackBgSections from "@/_components/sections/black-bg-sections";
import GallerySlider from "@/_components/sections/gallery-slider";
import Growth from "@/_components/sections/growth";
import HeroSection from "@/_components/sections/hero-section";
import HowWeWork from "@/_components/sections/how-we-work";
import OurService from "@/_components/sections/our-service";
import React from "react";

export default function page() {
  return (
    <div className="">
      <Container>
        <HeroSection />
      </Container>
      <GallerySlider />
      <Container>
        <AboutUs />
        <Growth />
        <HowWeWork />
      </Container>
      <BlackBgSections>
        <OurService />
      </BlackBgSections>
    </div>
  );
}
