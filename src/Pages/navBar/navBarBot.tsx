import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./navBarBot.css";

function Navbar() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex h-screen justify-center items-end mb-5"
    >
      <div className="text-white sticky bottom-0 w-2/4">
        <div className="flex justify-between mt-1">
          <Link to="/" className="pageLink">
            Home
          </Link>
          <Link to="/resume" className="pageLink">
            Resume
          </Link>
          <Link to="/projects" className="pageLink">
            Projects
          </Link>
          <Link to="/photography" className="pageLink">
            Photography
          </Link>
          <Link to="/contact" className="pageLink">
            Contact
          </Link>
        </div>
      </div>
    </m.div>
  );
}

export default Navbar;
