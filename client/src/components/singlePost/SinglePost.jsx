import "./singlePost.css";
import oscar from "../../assets/oscar2.jpeg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={oscar} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          25일 오후 펫시터 구합니다.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            작성자: <b>Sophie</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          오스카는 2살이며, 활발한 성격입니다. 10월 25일 월요일 16시 ~ 20시에
          자택에서 봐주실 분 있나요? 위치는 서울시 강남구 도곡동 쌍용 예가
          아파트입니다. 근처에 사시는 분 환영합니다. 배변 훈련도 되어 있고,
          입질도 전혀 없어 수월한 편에 속합니다. 오스카는 2살이며, 활발한
          성격입니다. 10월 25일 월요일 16시 ~ 20시에 자택에서 봐주실 분 있나요?
          위치는 서울시 강남구 도곡동 쌍용 예가 아파트입니다. 근처에 사시는 분
          환영합니다. 배변 훈련도 되어 있고, 입질도 전혀 없어 수월한 편에
          속합니다. 오스카는 2살이며, 활발한 성격입니다. 10월 25일 월요일 16시 ~
          20시에 자택에서 봐주실 분 있나요? 위치는 서울시 강남구 도곡동 쌍용
          예가 아파트입니다. 근처에 사시는 분 환영합니다. 배변 훈련도 되어 있고,
          입질도 전혀 없어 수월한 편에 속합니다. 오스카는 2살이며, 활발한
          성격입니다. 10월 25일 월요일 16시 ~ 20시에 자택에서 봐주실 분 있나요?
          위치는 서울시 강남구 도곡동 쌍용 예가 아파트입니다. 근처에 사시는 분
          환영합니다. 배변 훈련도 되어 있고, 입질도 전혀 없어 수월한 편에
          속합니다.
        </p>
      </div>
    </div>
  );
}
