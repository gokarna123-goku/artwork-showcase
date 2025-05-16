import { FaAnglesRight, FaChevronRight } from "react-icons/fa6";

const artists = [
  {
    id: 1,
    name: "NeonSculptor",
    avatar:
      "https://cdn.pixabay.com/photo/2024/01/12/12/43/male-8503919_1280.png",
    artworks: 42,
    followers: "15.2K",
    background: "bg-gradient-to-r from-purple-900/40 to-pink-900/40",
  },
  {
    id: 2,
    name: "PixelMaster",
    avatar:
      "https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg",
    artworks: 37,
    followers: "12.8K",
    background: "bg-gradient-to-r from-cyan-900/40 to-blue-900/40",
  },
  {
    id: 3,
    name: "CyberArtist",
    avatar:
      "https://cdn.pixabay.com/photo/2024/08/13/08/52/ai-generated-8965482_1280.jpg",
    artworks: 56,
    followers: "21.5K",
    background: "bg-gradient-to-r from-pink-900/40 to-purple-900/40",
  },
  {
    id: 4,
    name: "DigitalDreamer",
    avatar:
      "https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg",
    artworks: 29,
    followers: "9.7K",
    background: "bg-gradient-to-r from-blue-900/40 to-cyan-900/40",
  },
];

export const FeatureArtist = () => {
  return (
    <>
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-cyan-400">Top</span> Artists
            </h2>
            <button className="text-cyan-400 hover:text-cyan-300 group flex items-center gap-x-2 cursor-pointer ease-in-out duration-300">
              View All{" "}
              <FaAnglesRight className="h-3 w-3 group-hover:translate-x-1 transition-transform ease-in-out duration-300" />
            </button>
          </div>

          {/* Artist card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className={`rounded-xl overflow-hidden border border-gray-800 ${artist.background} hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300`}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 mix-blend-overlay" />
                    <img
                      src={artist.avatar || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">
                    {artist.name}
                  </h3>
                  <div className="flex justify-center gap-4 text-sm text-gray-400 mb-8">
                    <span>{artist.artworks} Artworks</span>
                    <span>{artist.followers} Followers</span>
                  </div>
                  <button className="border-gray-700 border text-white hover:bg-white/5 hover:border-cyan-800 px-6 py-2 rounded-full group w-full flex items-center justify-center gap-x-1 cursor-pointer ease-in-out duration-300">
                    View Profile
                    <FaChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
