import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../resume/diomar_luib_resume.pdf";
import {
  faDownload,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";





const Contact = () => {

  return (
    <motion.div className="w-full text-center min-h-screen  md:flex bg-blue-900" 
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >


      <div className="md:m-36 p-4 bg-blue-900 rounded-xl">
        <div className="md:flex items-center justify-center flex-col">
          <h1 className="text-amber-400 text-center mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Contact Me</h1>

          <h1 className="text-white text-2xl mb-12">
            I have always aspired to be a part of an innovative team where I
            can foster professional and even personal growth. You can reach me
            at the following contact information:
          </h1>

          <div className="md:flex items-center justify-center flex-col text-white ">
            <h2 className="text-2xl  py-2 whitespace-nowrap ">
              <FontAwesomeIcon icon={faEnvelope} className=" mr-4" />
              luibmar@outlook.com
            </h2>

            <h2 className="text-2xl ">
              <FontAwesomeIcon icon={faPhone} className=" mr-4" />
              0975-369-6049
            </h2>
            <a
              className="flex gap-3 text-2xl pt-2 items-center  w-72"
              href={resume}
              download="DMLuib_resume">
              <FontAwesomeIcon icon={faDownload} />
              <span>Download my Resume</span>
            </a>
          </div>
          <CustomLink title="Back to HOME" href="/">
            <FontAwesomeIcon icon={faHome} />
            <p className="px-2">Back to Home</p>
          </CustomLink>
        </div>
      </div>







    </motion.div>
  );
};

export default Contact;


function CustomLink({ href, children, props, target, title }: any) {
  return (
    <motion.a
      whileHover={{ scale: 1.2, transition: 1 }}
      {...props}
      title={title}
      href={href}
      target={target}
      className="text-xl flex mt-32 text-white">
      {children}
    </motion.a>
  );
}