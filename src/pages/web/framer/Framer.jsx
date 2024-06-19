import { motion } from "framer-motion";

export default function Framer() {
  return (
    <div>
      Framer
      <motion.div
        className="w-36 h-36 bg-blue-500 rounded"
        // initial={{ opacity: 0, scale: 0 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      ></motion.div>
    </div>
  );
}
