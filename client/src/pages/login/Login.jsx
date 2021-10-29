import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="이메일을 입력하세요."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="비밀번호를 입력하세요."
        />
        <button className="loginButton">LOGIN</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          SIGN UP
        </Link>
      </button>
    </div>
  );
}
