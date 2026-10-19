import { motion } from "framer-motion";
import experiences from "../data/experiences.json";
import profile from "../assets/img/diomar.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-neutral-300 text-center md:flex  justify-center pt-8 overflow-hidden min-h-screen">
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
        className="basis-1/2 flex flex-col py-4 ">
        <h2 className="text-4xl 2xl:text-6xl font-bold text-headingColor ">
          Education and Experiences
        </h2>
      

        <div className="ml-4 mt-6 md:ml-12 flex flex-col items-start pl-2">
         
           {experiences.map((exp:any) => (
         <div className="flex flex-col items-start">
            <div className="flex flex-col items-start mt-4">
              <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-headingColor whitespace-break-spaces">
                {exp.name}
              </h3>
              <h4 className="font-medium 2xl:text-xl whitespace-pre">
                {exp.comed}
              </h4>
              <p className="2xl:text-xl">{exp.date}</p>
              {exp.description?<p className="text-left mr-24 font-medium">• {exp.description}</p>:""}
              
           
            </div>
          </div>
        ))}
          
        </div>
      </motion.div>
    </section>
  );
};

export default About;
