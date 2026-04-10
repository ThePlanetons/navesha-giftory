import Image from "next/image";

export default function Collections() {
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
      title: "History",
      img: "/images/tom-and-jerry.jpg",
      count: "431",
      child: [
        "/images/tom-and-jerry-1.jpg",
        "/images/tom-and-jerry-2.jpg",
        "/images/tom-and-jerry-3.jpg",
        "/images/tom-and-jerry-4.jpg"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="bg-gray-100 rounded-2xl shadow-lg p-8 w-full">

        {/* Header */}
        <h2 className="text-xl font-semibold mb-4">Popular Collections</h2>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["Profile", "New York", "Relaxing", "Person", "Fashion"].map((item) => (
            <button
              key={item}
              className="px-3 py-1 bg-white rounded-full text-sm shadow-sm hover:bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-4 shadow hover:shadow-md transition"
            >
              {/* Main Image */}
              <div className="relative w-full h-64 mb-3">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={card.title === "People"} // improves LCP
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mb-3">
                {card.child.map((img, i) => (
                  <div key={i} className="relative w-25 h-25">
                    <Image
                      src={img}
                      alt="thumb"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <span className="font-medium">{card.title}</span>
                <span className="text-sm text-gray-500">📷 {card.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}