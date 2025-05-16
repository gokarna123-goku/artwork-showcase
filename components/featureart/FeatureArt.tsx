"use client";

import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaAnglesRight, FaHeart, FaShare } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShare } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";

const artworks = [
  {
    id: 1,
    title: "Cybernetic Dreamscape",
    artist: "NeonSculptor",
    image:
      "https://cdn.pixabay.com/photo/2022/05/13/00/16/fractal-7192555_1280.jpg",
    price: "2.5 ETH",
    likes: 342,
  },
  {
    id: 2,
    title: "Digital Serenity",
    artist: "PixelMaster",
    image:
      "https://cdn.pixabay.com/photo/2022/03/22/00/35/fractal-7084115_1280.jpg",
    price: "1.8 ETH",
    likes: 256,
  },
  {
    id: 3,
    title: "Neon Metropolis",
    artist: "CyberArtist",
    image:
      "https://cdn.pixabay.com/photo/2024/10/26/11/44/street-art-9151082_1280.jpg",
    price: "3.2 ETH",
    likes: 489,
  },
  {
    id: 4,
    title: "Ethereal Connection",
    artist: "DigitalDreamer",
    image:
      "https://cdn.pixabay.com/photo/2024/10/26/11/44/street-art-9151082_1280.jpg",
    price: "1.5 ETH",
    likes: 217,
  },
  {
    id: 5,
    title: "Quantum Reflections",
    artist: "VirtualVisions",
    image:
      "https://cdn.pixabay.com/photo/2023/11/13/17/49/people-8386051_1280.jpg",
    price: "4.0 ETH",
    likes: 631,
  },
  {
    id: 6,
    title: "Synthetic Emotions",
    artist: "TechnoArtisan",
    image:
      "https://cdn.pixabay.com/photo/2024/10/26/11/44/street-art-9151081_1280.jpg",
    price: "2.2 ETH",
    likes: 374,
  },
];

export const FeatureArt = () => {
  const [likedArtworks, setLikedArtworks] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    if (likedArtworks.includes(id)) {
      setLikedArtworks(likedArtworks.filter((artworkId) => artworkId !== id));
    } else {
      setLikedArtworks([...likedArtworks, id]);
    }
  };

  return (
    <>
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-purple-500">Featured</span> Artworks
            </h2>
            <button className="text-cyan-400 hover:text-cyan-300 group">
              View All{" "}
              <FaAnglesRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* artwork grid section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="bg-neutral-900/60 border-neutral-800 overflow-hidden group rounded-lg"
              >
                <div className="p-0">
                  <div className="relative">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full aspect-[16/12] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-between items-center">
                          <button
                            className="text-white hover:text-neutral-200 hover:bg-white/20 p-2 rounded-md"
                            onClick={() => toggleLike(artwork.id)}
                          >
                            <IoMdHeartEmpty
                              className={`h-5 w-5 ${
                                likedArtworks.includes(artwork.id)
                                  ? "fill-pink-500 text-pink-500"
                                  : ""
                              }`}
                            />
                          </button>
                          <div className="flex gap-4">
                            <button className="text-white hover:text-neutral-200 hover:bg-white/20 p-2 rounded-md">
                              <MdOutlineShare className="h-5 w-5" />
                            </button>
                            <button className="text-white hover:text-neutral-200 hover:bg-white/20 p-2 rounded-md">
                              <TbExternalLink className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-5">
                    <div className="space-y-1">
                      <h3 className="text-white font-semibold text-lg">
                        {artwork.title}
                      </h3>
                      <p className="text-neutral-400 text-sm">
                        by {artwork.artist}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400 font-medium">
                        {artwork.price}
                      </span>
                      <span className="text-neutral-500 text-sm flex items-center gap-x-1">
                        <IoMdHeartEmpty className="h-4 w-4 inline" />{" "}
                        {artwork.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
