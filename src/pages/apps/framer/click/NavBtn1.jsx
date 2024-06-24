export default function NavBtn1() {
  return <App />;
}

// Navbar.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Menu
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            style={{
              listStyle: "none",
              padding: "20px",
              background: "#eee",
              position: "absolute",
              top: "50px",
              right: "10px",
            }}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <section id="home">
          <h1>Home</h1>
        </section>
        <section id="about">
          <h1>About</h1>
        </section>
        <section id="services">
          <h1>Services</h1>
        </section>
        <section id="contact">
          <h1>Contact</h1>
        </section>
      </main>
    </div>
  );
};
