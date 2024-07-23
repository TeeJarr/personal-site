import "/src/css/Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h1>Tristan Reynolds</h1>
        <div className="navItems">
          <a className="navBtn active" id="home" href="/">
            Home
          </a>
          <a className="navBtn" id="resume" href="/resume">
            Resume
          </a>
          <a className="navBtn" id="software" href="/contact">
            Software
          </a>
          <a className="navBtn" id="photography" href="/photgraphy">
            Photography
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
