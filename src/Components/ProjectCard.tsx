import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type ProjectProps = {
  id: number;
  name: string;
  img: string;
};

const ProjectCard = ({ id, name, img }: ProjectProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="text-center h-72 2xl:h-80 w-96 2xl:w-wide mx-6 mb-4 bg-slate-50 rounded-lg overflow-hidden shadow-md cursor-pointer "
      onClick={() => navigate(`/project/${id - 1}`)}>
      <img src={img} alt={name} className=" w-full" />
      <div className="py-2">
        <h2 className="text-2xl font-medium">{name}</h2>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
