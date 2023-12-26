import { motion } from "framer-motion";
import profile from "../assets/img/diomar.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-neutral-300 text-center md:flex  justify-center pt-12 overflow-hidden min-h-screen">
      <div className="basis-1/2  flex items-center justify-center">
        <div className="m-auto w-2/4 py-8">
          <motion.img
            initial={{ scale: 0, opacity: 0, rotate: 180 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" shadow-lg object-center w-full"
            src={profile}
            alt="user"
          />
        </div>
      </div>
      <motion.div
        initial={{ translateX: 200, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="basis-1/2  flex flex-col py-4 ">
        <h2 className="text-6xl 2xl:text-8xl font-bold text-headingColor ">
          About Me
        </h2>
        <p className="text-lg 2xl:text-2xl md:px-4">
          I am an IT graduate. I am passionate about improving my coding skills
          & developing applications & websites. Working for myself to improve my
          skills. I also love troubleshooting PC as well.
        </p>

        <div className="mt-6 flex flex-col items-start pl-2">
          <h3 className="text-4xl 2xl:text-5xl font-bold text-headingColor">
            Experiences
          </h3>
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start mt-4">
              <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-headingColor whitespace-break-spaces">
                Bachelor of Science in Information Technology
              </h3>
              <h4 className="font-medium 2xl:text-xl whitespace-pre">
                University of Science and Technology of Southern Philippines
              </h4>
              <p className="2xl:text-xl">June 2016 - September 2020</p>
            </div>
            <div className="flex flex-col items-start mt-4">
              <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-headingColor">
                Office Clerk
              </h3>
              <h4 className=" font-medium 2xl:text-xl">
                Del Monte Philippines Inc. - Bugo Cannery
              </h4>
              <p className="2xl:text-xl">June 2021 - April 2022</p>
            </div>
            <div className="flex flex-col items-start mt-4">
              <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-headingColor">
                Software Engineer Internship
              </h3>
              <h4 className="font-medium 2xl:text-xl">
                Fligno Software Philippines Inc.
              </h4>
              <p className="2xl:text-xl">March 2023 - June 2023</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
