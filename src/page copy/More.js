import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import Avatar from 'react-avatar';
import Food from './Food';



       /*
      const testData = {
        "my_type": "ENTJ",
        "similar_count": 2,
        "similarRanking": [
        {
        "rank": 1,
        "item_1": "블랙핑크",
        "item_2": "지수",
        "like": 2,
        "shared": 2,
        "img_url": "http://www.naver.com"
        },
        {
        "rank": 2,
        "item_1": "블랙핑크",
        "item_2": "제니",
        "like": 1,
        "shared": 1,
        "img_url": "http://www.naver.com"
        }
        ]
        }
        */





function More () {

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
          const result = await axios.get('http://1.238.222.186:9999/mbti/query/similar?mbti_id=000001&mbti_type=INTP&gender=male');
          console.log(result.data);
        if(!completed) setTestData(result.data);
        }
        fetchData();
        return () => {
          completed = true;
        };
      },[]);

      /*
      const [testData, setTestData] = useState([]);
      
      axios.get('http://1.238.222.186:9999/mbti/query/similar?mbti_id=000001&mbti_type=INTP&gender=male').then((Response)=>{
       console.log(Response.data);
       const test1 = Response.data;
       console.log(test1);
       setTestData(test1);
       console.log(testData);
     }).catch((Error)=>{
       console.log(Error);
     })
*/



      //const testData = "";


      
      /*
      useEffect(() => {
              async function fetchData(){
                const result = await axios.get('http://1.238.222.186:9999/mbti/query/similar?mbti_id=000001&mbti_type=INTP&gender=male');
                console.log(result.data);
              }
              fetchData();
            },[]);
      */
      





        /*
      const testData = {
        "my_type": "ENTJ",
        "similar_count": 2,
        "similarRanking": [
        {
        "rank": 1,
        "item_1": "블랙핑크",
        "item_2": "지수",
        "like": 2,
        "shared": 2,
        "img_url": "http://www.naver.com"
        },
        {
        "rank": 2,
        "item_1": "블랙핑크",
        "item_2": "제니",
        "like": 1,
        "shared": 1,
        "img_url": "http://www.naver.com"
        }
        ]
        }
        */
/*
       const testData = {
        "my_type": "INTP",
        "similar_count": 5,
        "similarRanking": [
        {
        "rank": 1,
        "item_1": "비투비 ",
        "item_2": "임현식 ",
        "like": 0,
        "shared": 0,
        "img_url": "NULL"
        },
        {
        "rank": 2,
        "item_1": "데이식스 ",
        "item_2": "제이 ",
        "like": 0,
        "shared": 0,
        "img_url": "NULL"
        },
        {
        "rank": 3,
        "item_1": "베리베리 ",
        "item_2": "민찬 ",
        "like": 0,
        "shared": 0,
        "img_url": "NULL"
        },
        {
        "rank": 4,
        "item_1": "골든차일드 ",
        "item_2": "TAG ",
        "like": 0,
        "shared": 0,
        "img_url": "NULL"
        },
        {
        "rank": 5,
        "item_1": "방탄소년단 ",
        "item_2": "진 ",
        "like": 0,
        "shared": 0,
        "img_url": "NULL"
        }
        ]
        }
*/

      const nameList = testData.similarRanking && testData.similarRanking.map(name => 
      <div className="more">
        <h1 className="moreNumber">{name.rank}</h1>
        <div className="moreAvatar">
          <Avatar size="70"
                  round="100px"
                  facebook-id="invalidfacebookusername"
                  src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"/>
        </div>
        <div className="moreText">
          <h1 className="moreIdolName">{name.item_1} {name.item_2}</h1>
          <h1 className="moreLike">❤ 좋아요 {name.like}개</h1>
          <h1 className="moreShare">💌 공유횟수 {name.shared}회</h1>
        </div>  
      </div>
      );
      
      

    return (
        <div className="result">
        {isMobile &&  
          <div className="bgMbMore">
            <h1 className="moreTitle">나와 어울리는 아이돌은</h1>
            <h1 className="moreCount">00명 입니다.</h1>
            {nameList}
            <div className="shareTwitterBtn">
              <h1 className="shareTwitter">트위터로 공유하기</h1>
            </div>
            <div className="shareKakaoBtn">
              <h1 className="shareKakao">카카오로 공유하기</h1>
            </div>
            <div className="shareLinkBtn">
              <h1 className="shareLink">링크복사</h1>
            </div>
            <div className="shareAdBtn">
              <h1 className="shareAd">광고</h1>
            </div>
            <div className="shareReStartBtn">
              <h1 className="reStart">다시 테스트 하기</h1>
            </div>
          </div>}
      </div>
    );

}

export default More;