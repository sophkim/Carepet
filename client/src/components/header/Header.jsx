import "./header.css";
import oscar from "../../assets/oscar.jpeg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Find Pet sitter in Your Area!</span>
        <span className="headerTitleLg">CarePet</span>
      </div>
      <img className="headerImg" src={oscar} alt="" />
    </div>
  );
}
