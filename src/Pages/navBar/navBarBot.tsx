import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex h-screen justify-center items-end mb-5">
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
    </div>
  );
}

export default Navbar;
