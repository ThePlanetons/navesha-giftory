"use client";
import Image from "next/image";

export default function HeroSection() {
  const images = [
    "/images/one-piece-1.jpg",
    "/images/spider-man-4.jpg",
    "/images/tom-and-jerry.jpg",
    "/images/kpop-demon-hunters-rumi-mira-and-zoey.jpg",
    "/images/anime-boy-sleeping-outdoors.jpg",
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
          <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-bl-[25%_100%] rounded-br-[25%_100%] z-10"></div>

          <div className="flex w-max animate-scroll">
            {[...images, ...images].map((src, i) => (
              <div key={i}
                // className="relative w-full h-56 md:h-100 overflow-hidden"
                className="relative w-80 h-56 md:h-100 shrink-0 mx-1 overflow-hidden"
              >
                <Image
                  src={src}
                  alt="art"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Deep Center Concave Curve */}
          {/* <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-gray-200 rounded-[50%] z-20"></div> */}
          {/* Curved Bottom Effect */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-tl-[95%_100%] rounded-tr-[95%_100%]"></div>
        </div>
      </div>
    </div>
  );
}
