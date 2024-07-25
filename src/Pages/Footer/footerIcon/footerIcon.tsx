import "./footerIcon.css";
import { Link } from "react-router-dom";

function FooterIcon(props: { path: string; altText: string; text: string }) {
  return (
    <div className="flex items-center mx-5 footerIcon">
      <img
        src={props.path}
        alt={props.altText}
        className="mx-2 w-10 icon"
      ></img>
      <span className="text-white h-fit align-middle">{props.text}</span>
    </div>
  );
}
export default FooterIcon;
