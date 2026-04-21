"use client";
import Image from "next/image";

export default function HeroSection() {
  const images = [
    "/images/one-piece-1.jpg",
    "/images/grand-theft-auto-6-video-game.jpg",
    "/images/tom-and-jerry.jpg",
    "/images/wednesday-addams-jenna-ortega.jpg",
    "/images/anime-boy-sleeping-outdoors.jpg",
    "/images/cyberpunk-rider-in-the-neon-megacity.jpg",
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-white w-full">
        {/* Hero Section */}
        <div className="text-center px-6 pt-3.5">
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
            The Art of Human Expression, Uncover
            <br />
            <span className="italic font-normal">The Stories</span> Behind the Art
          </h1>

          {/* <p className="text-gray-500 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Discover new favorites among our diverse exhibitions. Uncover the
            stories and inspirations behind the art
          </p> */}

          <button className="mt-5 bg-red-500 text-white px-6 py-2 rounded-full">
            Explore
          </button>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden">
          {/* Curved Top Effect */}
          <div className="absolute top-0 left-0 w-full h-6 md:h-10 bg-white rounded-bl-[50%_100%] rounded-br-[50%_100%] z-10"></div>

          <div className="flex w-max animate-scroll gap-1 sm:gap-2 will-change-transform">
            {[...images, ...images].map((src, i) => (
              <div key={i}
                className="relative w-72 md:w-80 lg:w-88 h-72 md:h-86 lg:h-100 aspect-3/4 shrink-0 overflow-hidden"
              >
                <Image
                  src={src}
                  alt="art"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Bottom Base Curve */}
          <div className="absolute bottom-0 left-0 w-full h-6 md:h-10 bg-white rounded-tl-[50%_100%] rounded-tr-[50%_100%]"></div>

          {/* Center Concave Cut */}
          <div className="pointer-events-none absolute -bottom-6 sm:-bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 w-[140%] sm:w-[130%] md:w-[120%] h-24 sm:h-32 md:h-40 rounded-[50%] z-20"></div>
        </div>
      </div>
    </div>
  );
}
