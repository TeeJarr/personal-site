import { Document, Page } from "react-pdf";

const PDFViewer = ({ pdf }) => {
  return (
    <Document file={pdf}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFViewer;
