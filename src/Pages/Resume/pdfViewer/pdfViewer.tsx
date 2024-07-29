import { Document, Page } from "react-pdf";
const PDFViewer = () => {
  const pdfURL = "src/assets/Resume (1).pdf";
  const styles = {
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      marginTop: "10svh",
      overflow: "scroll",
      maxHeight: "70svh",
      boxShadow: "0 0 20px rgba(0, 0, 0, 1)",
      border: "8px solid black",
    },
  };

  return (
    <div style={styles.container}>
      <Document file={pdfURL}>
        <Page
          size="A4"
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
        <Page
          size="A4"
          pageNumber={2}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};
export default PDFViewer;
