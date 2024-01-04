import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Techstacks from "./Techstacks";
import { motion } from "framer-motion";
import About from "./About";
import BrowserTitle from "../Components/BrowserTitle";

const Home = () => {
  return (
    <>
      <BrowserTitle name="Home" />
      <section className="bg-blue-900 h-screen w-full text-center flex items-center justify-center">
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center">
          <h1 className="text-amber-400 text-6xl md:text-8xl 2xl:text-9xl mb-4 font-bold">
            Hi, I am Diomar
          </h1>

          <p className="text-white text-2xl 2xl:text-5xl w-3/4">
            An aspiring IT professional with a passion of learning and creating
            websites.
          </p>

          <div className="text-white flex gap-x-6 mt-4">
            <CustomLink
              title="Chat me through linkedin"
              href="https://www.linkedin.com/in/i-am-diomar"
              target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </CustomLink>
            <CustomLink title="Contact Me" href="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </CustomLink>
            <CustomLink
              title="Check my projects and activities"
              target="_blank"
              href="https://github.com/ramdio12">
              <FontAwesomeIcon icon={faGithub} />
            </CustomLink>
          </div>
        </motion.div>
      </section>
      <About />
      <Techstacks />
    </>
  );
};

export default Home;
function CustomLink({ href, children, props, target, title }: any) {
  return (
    <motion.a
      whileHover={{ scale: 1.2, transition: 1 }}
      {...props}
      title={title}
      href={href}
      target={target}
      className="text-5xl 2xl:text-6xl">
      {children}
    </motion.a>
  );
}
