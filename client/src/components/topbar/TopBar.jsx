import "./topbar.css";
import { Link } from "react-router-dom";
import olive from "../../assets/olive.jpeg";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fab fa-facebook-square"></i>
        <i class="topIcon fab fa-instagram"></i>
        <i class="topIcon fab fa-youtube"></i>
        <i class="topIcon fab fa-google"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              PETSITTER
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              MATCHING
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src="../../assets/olive.jpeg" alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                SIGN UP
              </Link>
            </li>
          </ul>
        )}

        <i class="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
