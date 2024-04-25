import Stairs from "../Transitions/Stairs";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiAbstract096 } from "react-icons/gi";
import MagneticIcon from "../Navbar/MagneticIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const notify = () => {
    message === ""
      ? toast("Fill in the blanks...")
      : toast("Sumitted successfully");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_xlmtn1s";
    const templateId = "template_rhafi1a";
    const publicKey = "b0kJ6OtDxmt0fjPX_";

    const templatePrams = {
      from_name: name,
      from_email: email,
      to_name: "Mr.Talha",
      message: message,
    };
    if (message.trim() !== "") {
      emailjs
        .send(serviceId, templateId, templatePrams, publicKey)
        .then((response) => {
          console.log("Email sent successfully", response);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending email: ", error);
        });
    } else {
      console.log("Messgae is empty");
    }
  };

  return (
    <Stairs>
      <div className="w-full h-full flex items-center justify-center flex-col p-16 ">
        <h1 className="text-3xl font-Angkor mb-6">CONTACT</h1>

        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Name:
            <input
              type="text"
              className="grow"
              placeholder="TALHA"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label
            htmlFor="email"
            className="input input-bordered flex items-center gap-2 mb-2"
          >
            Email:
            <input
              type="email"
              name="user_email"
              className="grow"
              placeholder="talhacust7@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <textarea
            name="message"
            id="message"
            className="textarea textarea-bordered mb-2 w-full"
            placeholder="Des."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" onClick={notify} className="btn w-full">
            submit
          </button>
          <ToastContainer />
        </form>

        {/* {RIght} */}

        <div className=" lg:text-2xl flex flex-col items-center justify-center mt-4">
          <ul className="contact-list px-1 py-1  font-Ubanta">
            <li className="flex items-center gap-5 mb-2">
              <FaLocationDot />
              <span className="contact-text place">City, ISLAMABAD</span>
            </li>

            <li className="list-item">
              <i className="flex items-center gap-5 mb-2">
                <FaPhone />
                <span className="contact-text place">+92 3180054578</span>
              </i>
            </li>

            <li className="list-item">
              <i className="flex items-center gap-5 mb-3">
                <MdEmail />
                <span className="contact-text place">
                  {" "}
                  talhacust7@gmail.com
                </span>
              </i>
            </li>
          </ul>

          <hr />
          <ul className="flex justify-evenly items-center mt-6 mb-6 text-3xl lg:text-4xl gap-6">
            <MagneticIcon>
              <li className="hover:text-red-300 hover:scale-150 transition-all duration-700 ">
                <a
                  href="https://github.com/CoderTalhaa"
                  target="_blank"
                  className="contact-icon"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
            </MagneticIcon>
            <MagneticIcon>
              <li className="hover:text-red-300 hover:scale-150 transition-all duration-500">
                <a
                  href="https://www.fiverr.com/zeyrox_7/develop-an-ar-virtual-experience-with-webxr?context_referrer=search_gigs&source=main_banner&ref_ctx_id=651b1c97242d400da7ef3b6f2d9a6f74&pckg_id=1&pos=3&context_type=auto&funnel=651b1c97242d400da7ef3b6f2d9a6f74&seller_online=true&imp_id=f168d246-8bcc-4e21-b116-9a58b71644d9"
                  target="_blank"
                  className="contact-icon"
                  rel="noreferrer"
                >
                  <GiAbstract096 />
                </a>
              </li>
            </MagneticIcon>
            <MagneticIcon>
              <li className="hover:text-red-300 hover:scale-150 transition-all duration-700">
                <a
                  href="https://twitter.com/home"
                  target="_blank"
                  className="contact-icon"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
            </MagneticIcon>
            <MagneticIcon>
              <li className="hover:text-red-300 hover:scale-150 transition-all duration-700">
                <a
                  href="https://www.instagram.com/7x.talha/"
                  target="_blank"
                  className="contact-icon"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </MagneticIcon>
          </ul>
          <hr className="mb-6" />

          <div className="opacity-15">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </Stairs>
  );
}

export default Contact;
