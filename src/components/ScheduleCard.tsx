import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  image: string;
  title: string;
  description: string;
}

const ScheduleCard: React.FC<Props> = ({ image, title, description }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div
      onClick={() => setShowFull(!showFull)}
      className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Blurred Background Image */}
      <div
        className="h-72 bg-cover bg-center filter blur-sm scale-105 transition-all duration-300"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gray-700/70 flex flex-col justify-center items-center text-center text-yellow-400 p-8">
        <h2 className="text-3xl font-extrabold mb-2">{title}</h2>
        <p className="text-yellow-400 text-lg max-w-xl">{description}</p>
        <p className="mt-6 text-blue-500 font-medium text-sm select-none">
          Click to {showFull ? "hide" : "view"} full schedule
        </p>
      </div>

      {/* Full Schedule Modal */}
      <AnimatePresence>
        {showFull && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setShowFull(false)}
          >
            <img
              src={image}
              alt="Full Schedule"
              className="max-h-[90vh] w-auto rounded-lg border-4 border-yellow-400 shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScheduleCard;