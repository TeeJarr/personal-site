import "../Footer/footer.css";
import "./resume.css";
import PDFViewer from "./pdfViewer/pdfViewer.tsx";
import NavbarBot from "../navBar/navBarBot.tsx";
import pdf from "/src/assets/Resume (1).pdf";

function Resume() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-center text-white mt-5 resumeClass">
          Resume
        </h1>
      </div>
      <div className="crop mx-auto -mt-9">
        <object
          width="100%"
          height="100%"
          data={pdf}
          type="application/pdf"
          className=""
        ></object>
      </div>
      <NavbarBot />
    </>
  );
}

export default Resume;
