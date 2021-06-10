import React, { useState, useRef } from 'react'; 
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import Avatar from 'react-avatar';

function Result () {
    const isPc = useMediaQuery({
        query : "(min-width:1024px)"
      });
      const isTablet = useMediaQuery({
        query : "(min-width:768px) and (max-width:1023px)"
      });
      const isMobile = useMediaQuery({
        query : "(max-width:767px)"
      });

    return (
        <div className="result">
        {isMobile &&  
          <div className="bgMbResult">
            <div className="avatar">
              <Avatar size="100"
                      round="100px"
                      facebook-id="invalidfacebookusername"
                      src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"/>
            </div>
            <div className="idolName1">
              <h1 className="fontIdolName1">블랙핑크 지수</h1>
            </div>
            <div className="idolMbti">
              <h1 className="fontIdolMbti">ENFJ</h1>
            </div>



            <div className="chemiTitle1">
              <h1 className="fontIdolMbti">케미폭발<br/>이성친구</h1>
              <Avatar size="80"
                      round="100px"
                      facebook-id="invalidfacebookusername"
                      src="../img/testImg1.jpg"/>
              <h1 className="fontIdolMbti">샤이니 민호</h1>
              <h1 className="moreBtn">더보기</h1>
            </div>

            <div className="chemiTitle2">
              <h1 className="fontIdolMbti">케미폭발<br/>이성친구</h1>
              <Avatar size="80"
                      round="100px"
                      facebook-id="invalidfacebookusername"
                      src="../img/testImg2.jpg"/>
              <h1 className="fontIdolMbti">러블리즈 미주</h1>
              <Link to ="/More">
              <h1 className="moreBtn">더보기</h1>
              </Link>
            </div>

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

export default Result;