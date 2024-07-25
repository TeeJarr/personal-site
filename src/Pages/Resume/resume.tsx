i;
import "../Footer/footer.css";
import "./resume.css";
import Navbar from "../nav.tsx";

function Resume() {
  return (
    <>
      <div className="my-auto mx-auto text-gray-200 flex flex-col justify-center">
        <img
          src="/src/assets/headshot.jpeg"
          alt="Tristan Reynolds"
          className="rounded-full h-48 w-48 mx-auto mt-10 headshot"
        />
        <h1 className="nameHeader">Tristan Reynolds </h1>
      </div>
      <Navbar />
    </>
  );
}

export default Resume;
