import Container from "@/_components/layout/container";
import AboutUs from "@/_components/sections/about-us";
import BlackBgSections from "@/_components/sections/black-bg-sections";
import ContactUs from "@/_components/sections/contact-us";
import FAQ from "@/_components/sections/faq";
import GallerySlider from "@/_components/sections/gallery-slider";
import Growth from "@/_components/sections/growth";
import HeroSection from "@/_components/sections/hero-section";
import HowWeWork from "@/_components/sections/how-we-work";
import MembershipBenefits from "@/_components/sections/membership";
import OurService from "@/_components/sections/our-service";
import OurWork from "@/_components/sections/our-work";
import PricingSection from "@/_components/sections/pricing-section";
import Testimonial from "@/_components/sections/testimonial";
import Tools from "@/_components/sections/tools";
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
        <OurWork />
        <Testimonial />
      </BlackBgSections>
      <Container>
        <MembershipBenefits />
        <PricingSection />
      </Container>
      <BlackBgSections>
        <Tools />
        <ContactUs />
      </BlackBgSections>
      <Container>
        <FAQ />
      </Container>
    </div>
  );
}
