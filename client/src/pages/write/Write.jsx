import "./write.css";
import oscar from "../../assets/oscar2.jpeg";

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src={oscar} alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="내용을 입력해주세요."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">작성</button>
      </form>
    </div>
  );
}
