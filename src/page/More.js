import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { useLocation, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import Avatar from 'react-avatar';
import { KakaoLinkDefault, KakaoLinkScrap } from 'react-kakao-link';

function More () {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const location = useLocation();
  const moreInputData = location.state;
  console.log("더보기로 넘어온 데이터 :: " + JSON.stringify(moreInputData));    

  const [details, setDetails] = useState(null);
  

  const getUserGeolocationDetails = (e,name) => {

    let completed = false;
    async function fetchData(){
      await axios.post('https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572')
      .then((response)=>{
      if(!completed){
        
        console.log("name :: " + JSON.stringify(name));
        console.log("name.item1 :: " + name.name.item_1);
        
        //const [LikeData,SetLikeData] = (name.name.like);
        //SetLikeData(name.name.like+1);

        const Share = {
          mbti_id : "000001",
          item_1 : name.name.item_1,
          item_2 : name.name.item_2,
          type : "like",
          ip_addr : response.data.IPv4,
          mbti_type : moreInputData.my_type,
          gender : moreInputData.gender
        };
        
        console.log("share " + JSON.stringify(Share));
        
        axios.post('http://1.238.222.186:9999/mbti/share',
        Share
        ).then((response)=>{
          console.log("share " + JSON.stringify(Share));
          console.log(response);
        });

        setDetails(response.data);  
        console.log(response.data);
        //console.log("geoLoc :: " + JSON.stringify(details));
        //console.log("IPv4 :: " + details.IPv4);
         }
      });
    }
    fetchData();
    return () =>{
      completed = true;
    };

  };  

      const isPc = useMediaQuery({
        query : "(min-width:1024px)"
      });
      const isTablet = useMediaQuery({
        query : "(min-width:768px) and (max-width:1023px)"
      });
      const isMobile = useMediaQuery({
        query : "(max-width:767px)"
      });
      
      const [testData, setTestData] = useState([]);
      useEffect(() => {
        let completed = false;
        async function fetchData(){
          const result = await axios.get('http://1.238.222.186:9999/mbti/query/similar?mbti_id=000001&mbti_type='+moreInputData.my_type+'&gender='+moreInputData.gender);
          console.log(result.data);
        if(!completed) setTestData(result.data);
        }
        fetchData();
        return () => {
          completed = true;
        };
      },[]);

      let home = "http://1.238.222.186:9999/mbti";
      let result = "http://192.168.1.180:3000/MoreShare";

      function HartA(name) {
        //const [Harts, SetHarts] = useState("🤍");
        //const [HartFlag, SetHartFlag] = useState(0);
        /*if(HartFlag == 0){
          SetHartFlag(1);
          SetHarts("❤");
        }
        else{
          SetHartFlag(0);
          SetHarts("🤍");
        }*/
        return(
          <h1 className="" onClick={(e) => {getUserGeolocationDetails(e,{name})}}>🤍</h1>
        );
      }

      const nameList = testData.similarRanking && testData.similarRanking.map(name => 
      <div className="more">
        <h1 className="moreNumber">{name.rank}</h1>
        <div className="moreAvatar">
          <Avatar size="70"
                  round="100px"
                  facebook-id="invalidfacebookusername"
                  src={home + name.img_url}/>
        </div>
        <div className="moreText">
          <h1 className="moreIdolName">{name.item_1} {name.item_2}</h1>
          <h1 className="moreLike" key={name.item_2}>❤ 좋아요 {name.like}개</h1>
          {/*<h1 className="moreShare">💌 공유하기 {name.shared}회</h1>*/}
        </div>
        <div className="hart">
          {/*<h1 className="" onClick={(e) => {getUserGeolocationDetails(e,{name})}}>{Harts}</h1>*/}
          <HartA></HartA>
        </div>  
      </div>
      );
      
      

    return (
        <div className="result">
        {isMobile &&  
          <div className="bgMbMore">
            <h1 className="moreTitle">나와 어울리는 아이돌은</h1>
            <h1 className="moreCount">{testData.similar_count}명 입니다.</h1>
            {nameList}
            <div className="shareTwitterBtn">
              <h1 className="shareTwitter">트위터로 공유하기</h1>
            </div>
            <div className="shareKakaoBtn">
              <KakaoLinkDefault
              className="template"
              template={{
                objectType: "feed",
                content: {
                  title: "아이돌더보기",
                  description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
                  imageUrl:
                    "../img/start.png",
                  link: {
                    mobileWebUrl: result + "/" + moreInputData.gender + "/" + moreInputData.my_type,
                    webUrl: result + "/" + moreInputData.gender + "/" + moreInputData.my_type,
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
                      mobileWebUrl: result + "/" + moreInputData.gender + "/" + moreInputData.my_type,
                      webUrl: result + "/" + moreInputData.gender + "/" + moreInputData.my_type,
                    },
                  },
                  {
                    title: "앱으로 보기",
                    link: {
                      mobileWebUrl: result + "/" + moreInputData.gender + "/" + moreInputData.my_type,
                      webUrl: result + "/" + moreInputData.gender + "/" + moreInputData.my_type,
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

export default More;