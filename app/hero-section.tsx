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
            <span className="italic font-normal">The Stories</span> Behind Every Wall Poster
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
        <div className="relative overflow-hidden perspective-[1800px]">

          {/* 🔝 Top Curve */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 
    w-[140%] sm:w-[130%] md:w-[120%] 
    h-12 sm:h-16 md:h-20 
    bg-white rounded-b-[100%] z-10"
          />

          {/* 🎬 Curved Screen Wrapper */}
          <div
            className="flex w-max animate-scroll gap-2 px-4 sm:px-6 md:px-10"
            style={{
              transform: "rotateX(18deg) scaleY(0.85) scale(1.1)",
              transformOrigin: "top center",
            }}
          >
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                className="relative w-44 sm:w-60 md:w-80 h-60 md:h-80 lg:h-100 shrink-0 overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt="art"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw"
                />
              </div>
            ))}
          </div>

          {/* 🌫️ Center Push (MAIN CURVE ILLUSION) */}
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 100%)",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.9), transparent 40%, rgba(0,0,0,0.35))",
            }}
          />

          {/* 🌑 Edge Depth */}
          <div className="pointer-events-none absolute inset-0 z-20 
    bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.25))]"
          />

          {/* 🔻 Bottom Curve */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
    w-[140%] sm:w-[130%] md:w-[120%] 
    h-10 sm:h-12 md:h-16 
    bg-white rounded-t-[100%]"
          />

        </div>
      </div>
    </div>
  );
}
