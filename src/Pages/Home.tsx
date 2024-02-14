import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Techstacks from "./Techstacks";
import { motion } from "framer-motion";
import About from "./About";
import BrowserTitle from "../Components/BrowserTitle";
import Certificates from "./Certificates";
import ScrollToTop from "../Components/ScrollToTop";
import intropic from "../assets/img/avataaars.png";

const Home = () => {
  return (
    <>
      <BrowserTitle name="Home" />
      <section className="bg-blue-900 min-h-screen w-full text-center md:flex items-center md:px-20">
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-start  md:basis-1/2 pt-60 md:pt-0 items-center xs:items-start ">
          <h1 className="text-amber-400 text-5xl md:text-7xl 2xl:text-8xl mb-4 font-bold">
            Hi , I am Diomar
          </h1>

          <p className="text-white text-xl md:text-2xl 2xl:text-4xl ">
            An aspiring IT professional with a passion of learning and creating
            websites. Explore my projects, showcasing my skills in web
            development.
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
        <div className=" hidden md:flex  items-center justify-center md:basis-1/2 overflow-hidden">
          <motion.img
            initial={{ rotate: 360, opacity: 0, translateX: 200 }}
            whileInView={{ rotate: 0, opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={intropic}
            alt="introduction_picture"
            className=" w-96"
          />
        </div>
      </section>
      <About />
      <Techstacks />
      <Certificates />
      <ScrollToTop />
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
