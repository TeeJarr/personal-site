import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between mt-1">
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
  );
}

export default Navbar;
