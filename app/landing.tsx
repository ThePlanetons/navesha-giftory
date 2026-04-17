"use client";
import Image from "next/image";

export default function Landing() {
  const images = [
    "/images/one-piece-1.jpg",
    "/images/spider-man-4.jpg",
    "/images/tom-and-jerry.jpg",
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

          <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full">
            Explore
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          {/* Curved Top Effect */}
          <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-[50%] z-10"></div>

          <div className="grid grid-cols-3 gap-2">
            {images.map((src, i) => (
              <div key={i} className="relative w-full h-56 md:h-100 overflow-hidden">
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

          {/* Curved Bottom Effect */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-white rounded-t-[50%]"></div>
        </div>
      </div>
    </div>
  );
}
