import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return visible ? (
    <button
      onClick={scrollToTop}
      title="Scroll to Top"
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 bg-accent text-black p-3 rounded-full shadow-lg hover:scale-110 transition duration-300"
    >
      <FaArrowUp />
    </button>
  ) : null;
};

export default ScrollToTop;
