import "./home.css";
import Footer from "../Footer/footer.tsx";
import Navbar from "../navBar/navBar.tsx";

function Home() {
  return (
    <>
      <div className="my-auto mx-auto text-white flex flex-col justify-center">
        <img
          src="/src/assets/headshot.jpeg"
          alt="Tristan Reynolds"
          className="rounded-full h-48 w-48 mx-auto mt-10 headshot"
        />
        <h1 className="nameHeader">Tristan Reynolds </h1>
        <Navbar />
      </div>
      <Footer />
    </>
  );
}

export default Home;
