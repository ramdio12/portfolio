
import Skills from "../Components/Skills";
import { skills } from "../data/skills";


const Techstacks = () => {
  return (
    <div className="text-center  bg-neutral-300 mt-16 min-h-screen flex items-center justify-center flex-col">
      <div className="mb-20">
        <h2 className="text-6xl 2xl:text-7xl font-bold  mb-2 text-headingColor">
          Skills
        </h2>
        <p className="text-xl 2xl:text-2xl">
          These are skill I currently have and still learning
        </p>
      </div>

      <div className="flex w-4/5 justify-center gap-14 mb-12 flex-wrap">
        {skills.map((skill) => (
          <Skills key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Techstacks;
