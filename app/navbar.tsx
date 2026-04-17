"use client";

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  return (
    // className={`w-full flex justify-center transition-all duration-500 transform py-3
    //   ${scrolled ? "-translate-y-10" : "translate-y-0"}`
    // }
    <div
      className="w-full flex justify-center transition-all duration-500 transform py-3"
    >
      <div
        className={`flex items-center justify-between px-6 py-3 transition-all duration-500
          ${scrolled
            ? "w-[95%] md:w-[85%] lg:w-[75%] rounded-full backdrop-blur-xl bg-white/60 border border-white/30 shadow-lg"
            : "w-full rounded-none bg-transparent"
          }`
        }
      >
        {/* Logo */}
        <div className="font-semibold text-lg tracking-wide">
          Navesha
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex gap-2 text-sm">
          {["Home", "About", "Features", "Product", "Gallery"].map((item, i) => (
            <button
              key={item}
              className={`px-4 py-1.5 rounded-full transition-all duration-300
                ${i === 0
                  ? "bg-red-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-white/40 hover:text-black"
                }`
              }
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-red-500 text-white
            ${scrolled
              ? "shadow-md hover:scale-105"
              : "hover:scale-105"
            }`
          }
        >
          Explore
        </button>
      </div>
    </div>
  );
}