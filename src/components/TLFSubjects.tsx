import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Activity {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  weeks: { title: string; description: string }[];
}

interface Props {
  activities: Activity[];
}

export const TLFCarousel: React.FC<Props> = ({ activities }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 300;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-blue-50 py-16 px-4" id="activities">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-4">
          TLF Subjects
        </h2>
        <p className="text-lg text-center text-blue-800 mb-10 max-w-2xl mx-auto">
          Explore our transformative learning journey and weekly modules!
        </p>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
          >
            <ChevronLeft />
          </button>

          {/* Card Container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto px-6 scroll-smooth no-scrollbar"
          >
            {activities.map((activity) => {
              const isSelected = selectedId === activity.id;

              return (
                <motion.div
                  key={activity.id}
                  onClick={() => setSelectedId(isSelected ? null : activity.id)}
                  className="relative flex-none w-72 sm:w-80 h-80 bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden"
                >
                  {/* Background Image */}
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className={`absolute w-full h-full object-cover transition-all duration-300 ${
                      isSelected ? "blur-sm scale-105" : ""
                    }`}
                    draggable={false}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent pointer-events-none" />

                  {/* Foreground Content */}
                  <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                    <div className="tlf-card bg-white p-4 md:p-6 rounded-xl shadow-md w-[220px] md:w-[260px]">
                      <h3 className="text-lg md:text-xl font-bold text-yellow-400 drop-shadow">
                        {activity.name}
                      </h3>
                    </div>
                    {isSelected ? (
                      <div className="text-sm text-gray-800 mt-2 bg-white/70 backdrop-blur-md p-3 rounded max-h-48 overflow-y-auto">
                        <p className="mb-2">{activity.description}</p>
                        {activity.weeks.map((week, i) => (
                          <div key={i} className="mb-1">
                            <p className="text-blue-600 font-semibold">{week.title}</p>
                            <p>{week.description}</p>
                          </div>
                        ))}
                        <p className="mt-2 text-yellow-500 font-medium">Click to hide ▲</p>
                      </div>
                    ) : (
                      <p className="text-sm text-yellow-500 mt-2 font-medium">Click to view details ▼</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Hide scrollbar across browsers */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default TLFCarousel;