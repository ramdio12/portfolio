import { Link } from "react-router-dom";
import TechStack from "../Components/TechStack";
import { techstacks } from "../data/techstacks";

const Techstacks = () => {
  return (
    <div className="text-center  bg-neutral-300 mt-16 min-h-screen flex items-center justify-center flex-col">
      <div className="mb-20">
        <h2 className="text-6xl 2xl:text-7xl font-bold  mb-2 text-headingColor">
          Skills
        </h2>
        <p className="text-xl 2xl:text-2xl">
          These are the current teckstacks that I am working and learning
        </p>
      </div>

      <div className="flex w-full justify-center gap-10 mb-12 flex-wrap">
        {techstacks.map((techstack) => (
          <TechStack key={techstack.id} {...techstack} />
        ))}
      </div>
      <div className="py-8">
        <p className="text-2xl">
          You can check my projects
          <Link to="/projects" className="font-medium pl-2">
            Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Techstacks;
