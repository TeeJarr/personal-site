import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/home.tsx";
import Resume from "../Resume/resume.tsx";
import Projects from "../Projects/projects.tsx";
import Contact from "../Contact/contact.tsx";
import Photography from "../Photography/photography.tsx";
import { useRef } from "react";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      // console.log(clientX, clientY);
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  return (
    <div
      ref={heroRef}
      className="flex flex-col h-screen justify-between bg-black"
      style={{
        backgroundImage:
          "radial-gradient(circle farthest-side at var(--x, 100px) var(--y, 100px), #1250aa 0%, transparent 100%)",
        // backgroundColor: "#1250ba",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
