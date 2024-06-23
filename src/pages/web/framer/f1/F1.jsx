import { motion } from "framer-motion";
import { useState } from "react";

export default function F1() {
  const [go, setGo] = useState(false);
  return (
    <div>
      <button
        onClick={() => setGo((prev) => !prev)}
        className="p-2 leading-none rounded-xl text-white bg-blue-500 text-sm"
      >
        toggle action
      </button>
      <motion.div
        // layout
        animate={{ opacity: 0.5 }}
        transition={{
          opacity: { ease: "linear" },
          layout: { duration: 0.3 },
        }}
        className="w-14 h-14 bg-blue-500 rounded-full my-2 relative text-sm"
      >
        <div className="absolute left-full w-max">`animate: x: 100`;</div>
      </motion.div>
      <motion.div
        animate={{ x: go ? 100 : null }}
        transition={{ type: "just" }}
        className="w-14 h-14 bg-blue-500 rounded-full my-2 relative text-sm"
      >
        <div className="absolute left-full w-max">animate: x: 100</div>
      </motion.div>
      <motion.div
        animate={{ x: go ? 100 : null }}
        transition={{ type: "inertia" }}
        className="w-14 h-14 bg-blue-500 rounded-full my-2 relative text-sm"
      >
        <div className="absolute left-full w-max">animate: x: 100</div>
      </motion.div>
      <p>yang dipelajari</p>
      <p>animate: x</p>
      <p>transition: delay</p>
    </div>
  );
}
