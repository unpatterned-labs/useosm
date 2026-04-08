import { useState, useEffect } from "react";
import ArrowUp from "@/assets/icons/react/ArrowUp";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="shadow-dialog border-surface-30 group bg-surface-10 fixed right-6 bottom-8 flex size-12 cursor-pointer items-center justify-center rounded-full border-[0.07rem] transition-colors duration-300 hover:bg-green-300 md:right-10 md:bottom-10"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="group-hover:text-surface-10 text-grey-300 transition-colors duration-300" />
    </div>
  );
};

export default ScrollToTop;
