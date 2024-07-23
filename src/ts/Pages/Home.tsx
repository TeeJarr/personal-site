import Header from "./Components/Header.tsx";
import "/src/css/Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="homeBody">
        <img
          src="/src/assets/headshot.jpeg"
          alt="Tristan Reynolds"
          className="headshot"
        />
        <span className="about-text">
          <h2>About Me</h2>
          <hr />
          <p>
            I am a software engineer with a passion for creating and building
            new things. I have experience in full stack web development, mobile
            development, and game development. I am always looking for new
            opportunities to learn and grow as a developer.
          </p>
        </span>
      </div>
    </>
  );
}

export default Home;
