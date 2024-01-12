import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scroll = document.documentElement.scrollTop;

    if (scroll >= 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      className=" fixed bottom-8 right-8 text-2xl bg-red-400 hover:bg-red-600 duration-500 ease-in-out text-white py-2 px-3 rounded-full"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTop;
