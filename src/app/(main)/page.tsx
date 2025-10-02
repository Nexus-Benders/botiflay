import Container from "@/_components/layout/container";
import GallerySlider from "@/_components/sections/gallery-slider";
import HeroSection from "@/_components/sections/hero-section";
import React from "react";

export default function page() {
  return (
    <div className="">
      <Container>
        <HeroSection />
      </Container>
      <GallerySlider />
    </div>
  );
}
