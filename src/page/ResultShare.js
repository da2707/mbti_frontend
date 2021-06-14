import React, { useState, useRef, useEffect } from 'react'; 
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { useLocation, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import Avatar from 'react-avatar';
import { KakaoLinkDefault, KakaoLinkScrap } from 'react-kakao-link';

function ResultShare ({match}) {
 

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



   //const params = this.props.match;
   console.log("params :: " + match.params.gender);

   const setMetaTags = ({ title="기본 타이틀", description="기본 설명", imageUrl="기본 사이트 이미지 경로" }) => {
  //set title 
  document .querySelector('meta[property="og:title"]') .setAttribute("content", `${title}`); 
  //set description 
  document .querySelector('meta[property="og:description"]') .setAttribute("content", description); 
  //set images 
  document .querySelector('meta[property="og:image"]') .setAttribute("content", imageUrl); 
  //set url 
  document .querySelector('meta[property="og:url"]') .setAttribute("content", window.location.href); };

  useEffect(() => {
    setMetaTags({
      title:"test",
      description:"testd",
      imageUrl:""
    });
  });


/*
    const location = useLocation();
    const genderTest = location.state;
    console.log("뭐지뭐지" + JSON.stringify(genderTest));
    console.log(genderTest.test);
*/
    let[NewTest, SetNewTest] = useState([]);
    let[dSex, SetDSex] = useState();

    useEffect(() => {
      let completed = false;
      async function fetchData(){
        const resultShare = await axios.get('https://api.life-in-valley.tech:8443/mbti/query/result?mbti_id=000001&gender='+match.params.gender+'&mbti_type='+match.params.mbti
        );
        console.log(resultShare.data);
          if(!completed){
          SetNewTest(resultShare.data);
          console.log("NewTest :: " + NewTest);
          if(NewTest.gender=="male"){
            SetDSex("female");
            console.log("dSex :: " + dSex);
          }
          else{
            SetDSex("male");
            console.log("dSex :: " + dSex);
          }
        }
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

      let result = "https://192.168.1.180:3000/ResultShare";

    return (
        <div className="result">
        {isMobile &&  
          <div className="bgMbResult">
            <div className="avatar">
              <Avatar size="100"
                      round="100px"
                      facebook-id="invalidfacebookusername"
                      src={home + NewTest.my_type_rep_img_url}/>
            </div>
            <div className="idolName1">
              <h1 className="fontIdolName1">{NewTest && NewTest.my_type_rep_item_1} {NewTest && NewTest.my_type_rep_item_2}</h1>
            </div>
            <div className="idolMbti">
              <h1 className="fontIdolMbti">{NewTest && NewTest.my_type}</h1>
            </div>



            <div className="chemiTitle1">
              <h1 className="fontIdolMbti">케미폭발<br/>동성친구</h1>
              <Avatar size="80"
                      round="100px"
                      facebook-id="invalidfacebookusername"
                      src={home + NewTest.my_type_match_same_img_url}/>
              <h1 className="fontIdolMbti">{NewTest.my_type_match_same_gender_item_1} {NewTest.my_type_match_same_gender_item_2}</h1>
              <Link to = {{pathname:"/More", state:
              {
                "gender" : NewTest.gender,
                "my_type" : NewTest.match_type}}}>
              <h1 className="moreBtn">더보기</h1>
              </Link>
            </div>

            <div className="chemiTitle2">
              <h1 className="fontIdolMbti">케미폭발<br/>이성친구</h1>
              <Avatar size="80"
                      round="100px"
                      facebook-id="invalidfacebookusername"
                      src={home + NewTest.my_type_match_img_url}/>
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

            <div className="shareTwitterBtn">
              <h1 className="shareTwitter">트위터로 공유하기</h1>
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
                    mobileWebUrl: result + "/" + NewTest.gender + "/" + NewTest.match_type,
                    webUrl: result + "/" + NewTest.gender + "/" + NewTest.match_type,
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
                      mobileWebUrl: result + "/" + NewTest.gender + "/" + NewTest.match_type,
                      webUrl: result + "/" + NewTest.gender + "/" + NewTest.match_type,
                    },
                  },
                  {
                    title: "앱으로 보기",
                    link: {
                      mobileWebUrl: result + "/" + NewTest.gender + "/" + NewTest.match_type,
                      webUrl: result + "/" + NewTest.gender + "/" + NewTest.match_type,
                    },
                  },
                ],
              }}
              jsKey={"b9fb41bcc6b6ab2dea9c74602d2efcf3"}
              >
              <h1 className="shareKakao">카카오로 공유하기</h1>
              </KakaoLinkDefault>
            </div>
            <div className="shareLinkBtn">
              <h1 className="shareLink">링크복사</h1>
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

export default ResultShare;
