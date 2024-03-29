import BrowserTitle from "../Components/BrowserTitle";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center flex-col pt-28 md:pt-12 ">
      <BrowserTitle name="Projects" />
      <div className="w-full text-center 2xl:pb-12">
        <h1 className="text-6xl 2xl:text-8xl mb-4 mt-12 text-headingColor">
          My Projects
        </h1>
        <p className="text-2xl 2xl:text-4xl ">
          These are my current projects. This is where I put my creativity and
          problem solving skills to use.
        </p>
      </div>
      <div className="flex flex-wrap mt-4 mb-10 items-center justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
