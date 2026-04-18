"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export type NavItem = {
  label: string;
  value: string;
};

type SlidingPillNavProps = {
  items: NavItem[];
  value?: string;
  onChange?: (val: string) => void;
  size?: "sm" | "md" | "lg";
  scrollSync?: boolean;
};

export default function SlidingPillNav({
  items,
  value,
  onChange,
  size = "md",
  scrollSync = false,
}: SlidingPillNavProps) {
  const [active, setActive] = useState(value || items[0]?.value);

  // Sync external value
  useEffect(() => {
    if (value) setActive(value);
  }, [value]);

  // Optional scroll sync
  useEffect(() => {
    if (!scrollSync) return;

    const handleScroll = () => {
      for (const item of items) {
        const el = document.getElementById(item.value);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.value);
          onChange?.(item.value);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, scrollSync, onChange]);

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <PillItem
          key={item.value}
          item={item}
          active={active}
          setActive={(val) => {
            setActive(val);
            onChange?.(val);
          }}
          size={size}
        />
      ))}
    </div>
  );
}

type PillItemProps = {
  item: NavItem;
  active: string;
  setActive: (val: string) => void;
  size: "sm" | "md" | "lg";
};

function PillItem({ item, active, setActive, size }: PillItemProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const sizeStyles = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
    lg: "px-5 py-2 text-base",
  };

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
        setPos({ x, y });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="relative"
    >
      {/* Sliding Pill */}
      {active === item.value && (
        <motion.div
          layoutId="pill"
          className="absolute inset-0 bg-red-500 rounded-full z-0"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <Button
        variant="ghost"
        onClick={() => setActive(item.value)}
        className={`relative z-10 rounded-full transition-colors
          ${sizeStyles[size]}
          ${
            active === item.value
              ? "text-white"
              : "text-gray-700 hover:text-black hover:bg-gray-100"
          }`}
      >
        {item.label}
      </Button>
    </motion.div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const items = [
//   { name: "Home", id: "home" },
//   { name: "About", id: "about" },
//   { name: "Features", id: "features" },
//   { name: "Product", id: "product" },
//   { name: "Gallery", id: "gallery" },
// ];

// export default function SlidingPillNav() {
//   const [active, setActive] = useState("home");

//   // 🔥 Scroll Sync
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = items.map((item) => document.getElementById(item.id));

//       for (const sec of sections) {
//         if (!sec) continue;

//         const rect = sec.getBoundingClientRect();
//         if (rect.top <= 120 && rect.bottom >= 120) {
//           setActive(sec.id);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="flex justify-center">

//         {items.map((item) => (
//           <MagneticItem
//             key={item.name}
//             item={item}
//             active={active}
//             setActive={setActive}
//           />
//         ))}

//     </div>
//   );
// }

// type NavItem = {
//   name: string;
//   id: string;
// };

// type MagneticItemProps = {
//   item: NavItem;
//   active: string;
//   setActive: (id: string) => void;
// };

// function MagneticItem({ item, active, setActive }: MagneticItemProps) {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   return (
//     <motion.button
//       onClick={() => {
//         setActive(item.id);
//         document.getElementById(item.id)?.scrollIntoView({
//           behavior: "smooth",
//         });
//       }}
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
//         const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
//         setPos({ x, y });
//       }}
//       onMouseLeave={() => setPos({ x: 0, y: 0 })}
//       animate={{ x: pos.x, y: pos.y }}
//       transition={{ type: "spring", stiffness: 150, damping: 15 }}
//       className="relative px-4 py-1.5 text-sm font-medium text-gray-600"
//     >
//       {/* Sliding Pill */}
//       {active === item.id && (
//         <motion.div
//           layoutId="nav-pill"
//           className="absolute inset-0 bg-red-500 rounded-full z-0"
//           transition={{ type: "spring", stiffness: 400, damping: 30 }}
//         />
//       )}

//       {/* Text */}
//       <span
//         className={`relative z-10 transition-colors ${active === item.id ? "text-white" : "hover:text-black"
//           }`}
//       >
//         {item.name}
//       </span>
//     </motion.button>
//   );
// }