import React, { useState, useRef, useEffect } from 'react'; 
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { useLocation, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import Avatar from 'react-avatar';
import { KakaoLinkDefault, KakaoLinkScrap } from 'react-kakao-link';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Result () {
 
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


const url = window.location.href;

const twitterShare = () => {
  window.open('https://www.twitter.com/intent/tweet?url='+result+"/"+NewTest.gender+"/"+NewTest.my_type);
};




    const location = useLocation();
    const genderTest = location.state;
    console.log("뭐지뭐지" + JSON.stringify(genderTest));
    console.log(genderTest.test);

    let[NewTest, SetNewTest] = useState([]);
    let[dSex, SetDSex] = useState();

    useEffect(() => {
      let completed = false;
      async function fetchData(){
        await axios.post('https://1.238.222.186:9999/mbti/result?mbti_id=000001', 
        genderTest.test
        ).then((Response)=>{
          if(!completed){
          SetNewTest(Response.data);
          console.log("NewTest :: " + NewTest);
          if(NewTest.gender=="male"){
            SetDSex("female");
            console.log("dSex :: " + dSex);
          }
          else{
            SetDSex("male");
            console.log("dSex :: " + dSex);
          }
        }});
      }

      fetchData();
      return () => {
        completed = true;
      };
    },[]);

    const isPc = useMediaQuery({
        query : "(min-width:1024px)"
      });
      const isTablet = useMediaQuery({
        query : "(min-width:768px) and (max-width:1023px)"
      });
      const isMobile = useMediaQuery({
        query : "(max-width:767px)"
      });

      let home = "https://1.238.222.186:9999/mbti";
      let end = "/images/ITZY_yeji.jpeg";

      let [moreInputData, setInputData] = useState([]);

      let result = "https://172.30.1.2:3000/ResultShare";

    return (
        <div className="result">
        {isMobile &&  
          <div className="bgMbResult">
            <div className="avatar">
              <Avatar size="100"
                      round="100px"
                      
                      facebook-id="invalidfacebookusername"
                      src={home + NewTest.my_type_rep_img_url}
                      /*avatarStyle={{borderWidth:2,borderColor:'white',borderTopLeftRadius: 1, borderStyle:'solid'}}*//>
            </div>
            <div className="idolName1">
              <h1 className="fontIdolName1">{NewTest && NewTest.my_type_rep_item_1} {NewTest && NewTest.my_type_rep_item_2}</h1>
              <Link to = {{pathname:"/More", state:
              {
                "gender" : NewTest.gender,
                "my_type" : NewTest.my_type}}}>
              <h1 className="moreBtn">더보기</h1>
              </Link>
            </div>
            <div className="blank"></div>
            <div className="idolMbti">
              <h1 className="fontIdolMbti">{NewTest && NewTest.my_type}</h1>
            </div>



            <div className="chemiTitle1">
              <h1 className="chemiSameSex">케미폭발<br/>동성친구</h1>
              <div className="chemiAvatar">
              <Avatar size="80"
                      round="100px"
                      facebook-id="invalidfacebookusername"
                      src={home + NewTest.my_type_match_same_img_url}/>
              </div>
              <h1 className="fontIdolMbti">{NewTest.my_type_match_same_gender_item_1} {NewTest.my_type_match_same_gender_item_2}</h1>
              <Link to = {{pathname:"/More", state:
              {
                "gender" : NewTest.gender,
                "my_type" : NewTest.match_type}}}>
              <h1 className="moreBtn">더보기</h1>
              </Link>
            </div>

            <div className="chemiTitle2">
              <h1 className="chemiDSex">케미폭발<br/>이성친구</h1>
              <div className="chemiAvatar">
              <Avatar size="80"
                      round="100px"
                      facebook-id="invalidfacebookusername"
                      src={home + NewTest.my_type_match_img_url}/>
              </div>
              <h1 className="fontIdolMbti">{NewTest.my_type_match_item_1} {NewTest.my_type_match_item_2}</h1>
              {
                NewTest.gender === "male" ? 
                (              <Link to = {{pathname:"/More", state:
                {
                  "gender" : "female",
                  "my_type" : NewTest.match_type}}}>
                <h1 className="moreBtn">더보기</h1>
                </Link>)
                : 
                (              <Link to = {{pathname:"/More", state:
                {
                  "gender" : "male",
                  "my_type" : NewTest.match_type}}}>
                <h1 className="moreBtn">더보기</h1>
                </Link>)
              }

            </div>

            <div className="shareTwitterBtn" >
              <h1 className="shareTwitter" onClick={twitterShare}>트위터로 공유하기</h1>
            </div>
            <div className="shareKakaoBtn">
              <KakaoLinkDefault
              className="template"
              template={{
                objectType: "feed",
                content: {
                  title: NewTest.match_type,
                  description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
                  imageUrl:
                    "../img/start.png",
                  link: {
                    mobileWebUrl: result + "/" + NewTest.gender + "/" + NewTest.my_type,
                    webUrl: result + "/" + NewTest.gender + "/" + NewTest.my_type,
                  },
                },
                social: {
                  likeCount: 286,
                  commentCount: 45,
                  sharedCount: 845,
                },
                buttons: [
                  {
                    title: "웹으로 보기",
                    link: {
                      mobileWebUrl: result + "/" + NewTest.gender + "/" + NewTest.my_type,
                      webUrl: result + "/" + NewTest.gender + "/" + NewTest.my_type,
                    },
                  },
                  {
                    title: "앱으로 보기",
                    link: {
                      mobileWebUrl: result + "/" + NewTest.gender + "/" + NewTest.my_type,
                      webUrl: result + "/" + NewTest.gender + "/" + NewTest.my_type,
                    },
                  },
                ],
              }}
              jsKey={"b9fb41bcc6b6ab2dea9c74602d2efcf3"}
              >
              <h1 className="shareKakao">카카오로 공유하기</h1>
              </KakaoLinkDefault>
            </div>
            <div className="shareLinkBtn" onClick={()=>alert(url + "/" + NewTest.gender + "/" + NewTest.my_type + "\n클립보드에 복사되었습니다.")}>
            <CopyToClipboard text={url + "/" + NewTest.gender + "/" + NewTest.my_type} 
                             >
              <h1 className="shareLink">링크복사</h1>
            </CopyToClipboard>
            </div>
            <div className="shareAdBtn">
              <h1 className="shareAd">광고</h1>
            </div>
            <div className="shareReStartBtn">
              <Link to ="/">
              <h1 className="reStart">다시 테스트 하기</h1>
              </Link>
            </div>
          </div>}
      </div>
    );

}

export default Result;