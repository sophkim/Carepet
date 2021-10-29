import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">SIGN UP</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="이름을 입력하세요."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="이메일을 입력하세요."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="비밀번호를 입력하세요."
        />
        <button className="registerButton">SIGN UP</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          SIGN UP
        </Link>
      </button>
    </div>
  );
}
