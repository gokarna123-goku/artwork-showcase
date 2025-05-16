import { CTA } from "@/components/cta/CTA";
import { FeatureArt } from "@/components/featureart/FeatureArt";
import { FeatureArtist } from "@/components/featureartist/FeatureArtist";
import { Footer } from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Membership } from "@/components/membership/Membership";
import { Testimonial } from "@/components/testimonial/Testimonial";
import { WhyUs } from "@/components/whyus/WhyUs";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col text-neutral-500 bg-black overflow-x-hidden">
        {/* Navbar */}
        <Header />

        {/* Content */}
        <div className="w-full space-y-14">
          {/* Hero section */}
          <Hero />

          {/* Featured arts */}
          <FeatureArt />

          {/* Featured Artists Section */}
          <FeatureArtist />

          {/* Features Section */}
          <WhyUs />

          {/* Testimonials section */}
          <Testimonial />

          {/* Membership Section */}
          <Membership />

          {/* CTA Section */}
          <CTA />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
