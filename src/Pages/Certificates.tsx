import CertificateCard from "../Components/CertificateCard";
import certificates from "../data/certificates.json";

const Certificates = () => {
  return (
    <div className="text-center  bg-neutral-300 mt-16 min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-6xl 2xl:text-7xl font-bold mt-20 text-headingColor">
        Certificates
      </h2>

      <div className="md:flex gap-8 items-center justify-center md:w-4/5 m-auto">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
