import BrowserTitle from "../Components/BrowserTitle";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="w-full min-h-max flex items-center justify-center flex-col pt-28 ">
      <BrowserTitle name="Projects" />
      <div className="w-full text-center">
        <h1 className="text-6xl mb-4 text-headingColor">My Projects</h1>
        <p className="text-2xl">These are my current Projects</p>
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
