import { useParams } from "react-router-dom";
import { projects as ProjectItem } from "../data/projects";

const Project = () => {
  const { id }: any = useParams();
  const project = ProjectItem[id];
  const {
    name,
    img,
    tech,
    description,
    subname,
    note,
    github,
    demo,
    video_demo,
  } = project;

  return (
    <div className=" mt-28 w-full">
      <div className=" pb-8">
        <div className=" w-1/2 mx-auto">
          <img src={img} alt={name} className="w-full" />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-2xl font-extrabold">{name}</h1>
          <p className=" font-medium text-xl">{subname}</p>
        </div>
      </div>

      <div className="text-center w-5/6 md:w-3/4 mx-auto">
        <div className="mb-6">
          <p className="text-xl">TechStacks : {tech}</p>
        </div>

        <div>
          <p className="text-xl text-justify">{description}</p>
          <p className="text-xl my-6">
            Note: <br />
            {note}
          </p>
        </div>

        <div className="mx-auto py-4 flex flex-wrap gap-4 items-center justify-center">
          <a
            href={github}
            target="_blank"
            className=" bg-red-500 text-white text-lg px-4 py-1 rounded-md">
            Github
          </a>
          <a
            href={demo}
            target="_blank"
            className=" bg-green-500 text-white text-lg px-4 py-1 rounded-md">
            Demo
          </a>

          {video_demo && (
            <a
              href={video_demo}
              target="_blank"
              className=" bg-blue-700 text-white text-lg px-4 py-1 rounded-md">
              Video demo for {name}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
