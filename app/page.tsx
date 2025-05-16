import { FeatureArt } from "@/components/featureart/FeatureArt";
import Header from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";

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
          <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  <span className="text-cyan-400">Top</span> Artists
                </h2>
                <button className="text-purple-500 hover:text-purple-400 group">
                  View All{" "}
                  {/* <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
                </button>
              </div>

              {/* <ArtistsSection /> */}
            </div>
          </section>
        </div>

        {/* Footer */}
      </div>
    </>
  );
}
