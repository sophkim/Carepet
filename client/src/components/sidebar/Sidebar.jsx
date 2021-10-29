import "./sidebar.css";
import aboutus from "../../assets/aboutus.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img src={aboutus}></img>
        <p>
          CarePet은 이웃이 반려동물의 펫시터가 되는 동네 기반 플랫폼입니다.
          사용자들은 게시판을 통해 펫시터를 구하거나 지원할 수 있으며, 최적의
          파트너를 추천해주는 매칭 서비스도 제공할 예정입니다.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">찾기</li>
          <li className="sidebarListItem">지원하기</li>
          <li className="sidebarListItem">강아지</li>
          <li className="sidebarListItem">고양이</li>
          <li className="sidebarListItem">장기</li>
          <li className="sidebarListItem">단기</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i class="sidebarIcon fab fa-facebook-square"></i>
          <i class="sidebarIcon fab fa-instagram"></i>
          <i class="sidebarIcon fab fa-youtube"></i>
          <i class="sidebarIcon fab fa-google"></i>
        </div>
      </div>
    </div>
  );
}
