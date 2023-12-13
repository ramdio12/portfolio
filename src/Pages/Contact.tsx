import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faHandPointDown,
  faHandPointRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import BrowserTitle from "../Components/BrowserTitle";

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const form: any = useRef();

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value === "") {
      setError(`The ${name} is empty`);
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setError("");
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    const { name, email, message }: any = inputs;

    if (name !== "" && email !== "" && message !== "") {
      emailjs
        .sendForm(
          "service_j3nlmho",
          "template_bzii8rp",
          form?.current,
          "Ck_znxaqbTUhW093x"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setMsg("Thank you for sending me a message!");
      setTimeout(() => {
        setMsg("");
        window.location.reload();
      }, 3000);
    } else {
      setMsg("Somethings wrong");
    }
  };

  return (
    <div className="w-full text-center  mt-24">
      <BrowserTitle name="Contact" />
      {/* <h1 className="text-4xl font-semibold pb-4 text-headingColor">
        Contact Me
      </h1> */}

      <div className="md:flex items-center justify-center">
        <div className=" basis-1/2">
          <div className="text-left md:w-4/5 mx-auto mb-8 px-4">
            <h1 className=" text-2xl mb-12">
              I have always aspired to be a part of an innovative team where I
              can foster professional and even personal growth. You can reach me
              at the following contact information:
            </h1>
            <h2 className="text-2xl  py-2 whitespace-nowrap">
              <FontAwesomeIcon icon={faEnvelope} className=" mr-4" />
              luib.diomar@gmail.com
            </h2>

            <h2 className="text-2xl ">
              <FontAwesomeIcon icon={faPhone} className=" mr-4" />
              0975-424-4225
            </h2>

            <a
              className="flex gap-3 text-2xl pt-2 items-center  w-72"
              href="../resume/diomar_luib_resume.pdf"
              download>
              <FontAwesomeIcon icon={faDownload} />
              <span>Download my Resume</span>
            </a>
          </div>

          <h2 className="text-2xl py-4 mr-4 flex items-center justify-center gap-2 text-center ">
            You can also send me a message{" "}
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="hidden md:block text-4xl"
            />
            <FontAwesomeIcon
              icon={faHandPointDown}
              className="md:hidden text-4xl"
            />
          </h2>
        </div>

        <div className=" basis-1/2 ">
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            ref={form}
            className="mx-auto bg-blue-900 md:w-4/5 py-2 px-2 mt-8 mb-4 relative overflow-hidden rounded-md"
            onSubmit={sendEmail}>
            <div className="flex flex-col mb-2">
              <label htmlFor="name" className="block text-xl text-white">
                Name
              </label>
              <input
                type="text"
                className="block w-96 mx-auto p-2 text-center   rounded-md"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="block text-xl text-white">
                Email
              </label>
              <input
                className="block w-96 mx-auto p-2 text-center  rounded-md"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className=" text-xl text-white">
                Message
              </label>
              <textarea
                rows={8}
                className="block w-96 rounded-md resize-none mx-auto"
                name="message"
                id="message"
                placeholder="Your Message here..."
                onChange={handleChange}></textarea>
            </div>

            <div className="w-full text-center absolute top-2">
              {msg ? (
                <h1 className=" text-green-900 text-2xl bg-green-200 w-64 mx-auto py-2">
                  {msg}
                </h1>
              ) : (
                <h1 className=" text-red-700 text-2xl bg-red-200 my-2  w-64 mx-auto">
                  {error}
                </h1>
              )}
            </div>
            <button
              type="submit"
              className="px-4 py-2  bg-red-500 text-xl text-white my-2 rounded-md">
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
