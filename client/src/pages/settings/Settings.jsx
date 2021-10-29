import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import olive from "../../assets/olive.jpeg";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={olive} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="carepet" />
          <label>Email</label>
          <input type="email" placeholder="carepet@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="******" />
          <buttons className="settingsSubmit">Update</buttons>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
