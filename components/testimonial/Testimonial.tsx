"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Digital Artist",
    avatar:
      "https://cdn.pixabay.com/photo/2024/01/12/12/43/male-8503919_1280.png",
    content:
      "NeonArt has completely transformed my career as a digital artist. The platform's exposure and community have helped me connect with collectors worldwide.",
    rating: 5,
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "Art Collector",
    avatar:
      "https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg",
    content:
      "I've discovered so many incredible artists through NeonArt. The curation is excellent, and the buying process is seamless. My digital art collection has never been better!",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Gallery Owner",
    avatar:
      "https://cdn.pixabay.com/photo/2024/08/13/08/52/ai-generated-8965482_1280.jpg",
    content:
      "As a gallery owner, partnering with NeonArt has allowed us to expand our reach into the digital art space. The platform's technology and audience are unmatched.",
    rating: 4,
  },
  {
    id: 4,
    name: "Olivia Rodriguez",
    role: "NFT Enthusiast",
    avatar:
      "https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg",
    content:
      "The integration of blockchain technology with beautiful art curation makes NeonArt stand out from other platforms. It's my go-to place for discovering new digital art.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Kim",
    role: "3D Artist",
    avatar:
      "https://cdn.pixabay.com/photo/2024/01/12/12/43/male-8503919_1280.png",
    content:
      "As a 3D artist, I appreciate how NeonArt showcases my work in an immersive way. The platform truly understands how to present digital art in its best light.",
    rating: 5,
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Art Investor",
    avatar:
      "https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg",
    content:
      "NeonArt has made investing in digital art accessible and exciting. The authentication features give me confidence in my purchases, and the community is incredibly supportive.",
    rating: 4,
  },
];

export const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What Our <span className="text-cyan-400">Community</span> Says
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Hear from artists and collectors who have found success on our
            platform
          </p>

          {/* Testimonial card section */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-neutral-900/40 border-neutral-900 border rounded-xl"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-3 w-3 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-neutral-300 font-normal text-base italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center mt-10 gap-2">
              <button
                className="rounded-full text-white hover:bg-white/10 p-2 ease-in-out duration-300 cursor-pointer"
                onClick={prevPage}
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  className={`rounded-full p-0 ${
                    i === currentPage
                      ? "bg-cyan-400 hover:bg-cyan-500 w-5 h-2"
                      : "border-gray-500 text-white bg-white/15 w-2 h-2"
                  }`}
                  onClick={() => setCurrentPage(i)}
                >
                  <span className="sr-only">Page {i + 1}</span>
                </button>
              ))}
              <button
                className="rounded-full text-white hover:bg-white/10 p-2 ease-in-out duration-300 cursor-pointer"
                onClick={nextPage}
              >
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
