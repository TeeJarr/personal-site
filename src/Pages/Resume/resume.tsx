import "../Footer/footer.css";
import "./resume.css";
import NavbarBot from "../navBar/navBarBot.tsx";
import pdf from "/src/assets/Resume (1).pdf";
import { motion as m } from "framer-motion";

function Resume() {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-center text-white mt-5 resumeClass">
            Resume
          </h1>
        </div>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="crop mx-auto -mt-9"
      >
        <object
          width="100%"
          height="100%"
          data={pdf}
          type="application/pdf"
          className=""
        ></object>
      </m.div>
      <NavbarBot />
    </>
  );
}

export default Resume;
