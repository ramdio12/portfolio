import { motion } from "framer-motion";

type iconProps = {
  name: string;
  img: string;
};

const TechStack = ({ name, img }: iconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-36 h-36 text-center">
      <img className="w-full h-full" src={img} alt={name} />
      <p className="text-2xl mb-4">{name}</p>
    </motion.div>
  );
};

export default TechStack;
