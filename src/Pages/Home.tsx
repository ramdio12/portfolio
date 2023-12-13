import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Techstacks from "./Techstacks";
import { motion } from "framer-motion";
import About from "./About";
import { Link } from "react-router-dom";
import BrowserTitle from "../Components/BrowserTitle";

const Home = () => {
  return (
    <>
      <BrowserTitle name="Home" />
      <section className="bg-blue-900 h-screen w-full text-center flex items-center justify-center">
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-amber-400 text-6xl md:text-8xl mb-4 font-bold">
            Hi, I am Diomar
          </motion.h1>

          <p className="text-white text-2xl w-3/4">
            An aspiring IT professional with a passion of learning and creating
            websites.
          </p>

          <div className="text-white flex gap-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/i-am-diomar"
              target="_blank"
              className="text-5xl hover:scale-110 duration-75 ease-in-out">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <Link
              to="/contact"
              className="text-5xl hover:scale-110 duration-75 ease-in-out">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <a
              href="https://github.com/ramdio12"
              target="_blank"
              className="text-5xl hover:scale-110 duration-75 ease-in-out">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
      <About />
      <Techstacks />
    </>
  );
};

export default Home;
