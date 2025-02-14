import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "You are my sunshine on a rainy day.",
  "Every love story is beautiful, but ours is my favorite.",
  "I love you more than words can express.",
  "You make my world brighter and my heart fuller.",
  "With you, every moment is special.",
  "I found my forever in you.",
  "Your love is the melody my heart beats to.",
  "Holding you is my favorite place to be.",
  "You are the dream I never want to wake up from.",
  "Every moment with you is like a beautiful song.",
  "I love you more than the stars love the night sky.",
  "My heart is, and always will be, yours.",
  "You are the reason my world is so beautiful.",
  "Forever isn’t long enough with you.",
  "Loving you is the easiest and best thing I have ever done.",
];

export default function ValentineQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-pink-200 p-4">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-red-600 mb-4"
        >
          Bee ❤️
        </motion.h1>
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-center text-red-500"
          >
            {quotes[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}
