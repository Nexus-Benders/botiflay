import Container from "@/_components/layout/container";
import AboutUs from "@/_components/sections/about-us";
import GallerySlider from "@/_components/sections/gallery-slider";
import Growth from "@/_components/sections/growth";
import HeroSection from "@/_components/sections/hero-section";
import HowWeWork from "@/_components/sections/how-we-work";
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
    </div>
  );
}
