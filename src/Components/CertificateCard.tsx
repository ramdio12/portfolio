import { motion } from "framer-motion";

interface CertificateProps {
  name: string;
  link: string;
  recieved: string;
  imgs: string;
}



const CertificateCard = ({ name, link, recieved, imgs }: CertificateProps) => {



  return (

    
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
      className="md:w-3/5 bg-slate-200 m-8 rounded-lg overflow-hidden"
      title={`Received on: ${recieved}`}>
      <a href={link} target="_blank">
        <img src={imgs} alt={name} className="w-full" key={name}/>
        <img
            src={`/src/to/directory/${name}?v=${Date.now()}`}
            alt=""
          />
      </a>

      <div className="py-2">
        <p className=" font-bold">{name}</p>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
