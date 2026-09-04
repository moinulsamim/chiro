import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
