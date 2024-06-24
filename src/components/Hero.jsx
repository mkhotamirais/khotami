import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <section className="z-50 min-h-[60vh] mt-16">
        <div className="z-20 flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <img
                src="https://github.com/mkhotamirais/mkhotamirais.github.io/blob/main/images/me2-removebg.png?raw=true"
                alt="Mkhotami Rais"
                width="192"
                height="192"
                className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl w-full md:w-2/3 mx-auto text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I&apos;m Khotami.</span> I&apos;m a{" "}
          <span className="font-bold">full-stack developer</span> with <span className="font-bold">2 years</span> of
          experience. I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>
      </section>
    </>
  );
}
