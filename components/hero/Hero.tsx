import { FaSearch } from "react-icons/fa";

export const Hero = () => {
  return (
    <>
      {/* Hero Section with 3D Canvas */}
      <section className="h-screen relative">
        {/* Hero Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-30 md:mt-0 mt-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.2]">
            <span className="block">Discover & Collect Digital</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
              Masterpiece Arts
            </span>
          </h1>
          <p className="text-neutral-300 text-base md:text-xl max-w-2xl mb-8">
            Join the world's largest digital art marketplace where artists and
            collectors come together
          </p>
          <div className="flex items-center gap-6">
            <button className="md:text-lg text-base font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white md:px-8 px-6 py-3 text-base rounded-lg ease-in-out duration-300 cursor-pointer">
              Explore Gallery
            </button>
            <button className="md:text-lg text-base font-medium bg-neutral-100 text-neutral-700 hover:bg-neutral-300 md:px-8 px-6 py-3 rounded-lg ease-in-out duration-300 cursor-pointer">
              Join as Artist
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-md px-4">
          <div className="relative">
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-neutral-400 z-10" />
            <input
              type="text"
              placeholder="Search artists, collections, or artwork..."
              className="w-full bg-cyan-900/20 backdrop-blur-sm border border-cyan-900 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>
      </section>
    </>
  );
};
