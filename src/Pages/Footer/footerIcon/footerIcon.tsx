import "./footerIcon.css";

function FooterIcon(props: {
  path: string;
  altText: string;
  text: string;
  url: string;
}) {
  return (
    <div className="flex items-center mx-5 footerIcon">
      <img
        src={props.path}
        alt={props.altText}
        className="mx-2 w-10 icon"
      ></img>
      <a href={props.url} className="text-white h-fit align-middle">
        {props.text}
      </a>
    </div>
  );
}
export default FooterIcon;
