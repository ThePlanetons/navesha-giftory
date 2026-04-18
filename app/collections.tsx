"use client";

import { useState } from "react";
import Image from "next/image";

export default function Collections() {
  const [active, setActive] = useState("Featured Universes");

  const navItems = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Features", value: "features" },
    { label: "Product", value: "product" },
    { label: "Gallery", value: "gallery" },
  ];

  const cards = [
    {
      title: "Spider-Man",
      img: "/images/spider-man.jpeg",
      count: "144",
      child: [
        "/images/spider-man-1.jpg",
        "/images/spider-man-2.jpg",
        "/images/spider-man-3.jpg",
        "/images/spider-man-4.jpg"
      ]
    },
    {
      title: "One Piece",
      img: "/images/one-piece.jpg",
      count: "7K",
      child: [
        "/images/one-piece-1.jpg",
        "/images/one-piece-2.png",
        "/images/one-piece-3.jpg",
        "/images/one-piece-4.jpg"
      ]
    },
    {
      title: "Tom & Jerry",
      img: "/images/tom-and-jerry-5.jpg",
      count: "431",
      child: [
        "/images/tom-and-jerry-1.jpg",
        "/images/tom-and-jerry-2.jpg",
        "/images/tom-and-jerry-3.jpg",
        "/images/tom-and-jerry.jpg"
      ]
    },
  ];

  return (
    <div className="flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-6">
      <div className="bg-gray-100 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 w-full">

        {/* Header */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
          Popular Collections
        </h2>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["Kollywood Classics", "Featured Universes", "Hollywood Highlights", "Korean Wave", "Action Packed", "Editor’s Choice", "Feel Good", "Trending Now"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-3 py-1 text-xs sm:text-sm rounded-full shadow-sm transition cursor-pointer
                ${active === item
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto pb-2 sm:flex xl:grid xl:grid-cols-3 xl:overflow-visible no-scrollbar">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="min-w-[80%] sm:min-w-[45%] md:min-w-[60%] lg:min-w-[44%] xl:min-w-0 bg-white rounded-2xl p-3 sm:p-4 shadow hover:shadow-md transition"
            >
              {/* Main Image */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 mb-3">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  priority={i === 0}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mb-3">
                {card.child.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28"
                  >
                    <Image
                      src={img}
                      alt="thumb"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 640px) 280px, (max-width: 1280px) 320px, 360px"
                      quality={100}
                      priority={i < 2}
                      placeholder="empty"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base font-medium">
                  {card.title}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  📷 {card.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}