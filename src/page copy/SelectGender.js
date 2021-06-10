import React, { useState, useRef } from 'react'; 
import axios from 'axios';
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import wBtnMb from '../img/wBtnMb.png';
import mBtnMb from '../img/mBtnMb.png';

let qs1 = "";

axios.get('https://dog.ceo/api/breeds/list/all').then((Response)=>{
  console.log(Response.data);
  console.log(Response.data.status);
  console.log(Response.data.message.bulldog[1]);
  qs1 = Response.data.message.bulldog[1];
}).catch((Error)=>{
  console.log(Error);
})

function SelectGender () {

  const [question, setQuestion] = useState();

  const displayStyle = 'display:none';

  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  const gdRef = useRef(null);



    return (
      <div>
        <div className="gd" ref={gdRef}>
        {isMobile &&  
          <div className="bgMbGd">
            <div className="wBtn">
              <Link to ="/Question">
              <img className="start" src={wBtnMb} />
              </Link>
            </div>
            <div className="mBtn">
              <img className="start" src={mBtnMb}/>
            </div>
          </div>}
        </div>
        {/* <div className="qs">
        {isMobile &&  
          <div className="bgMbQs">
            <div className="title">
              <h1 className="font">Q1.</h1>
            </div>
            <div className="qs1">
              <h2 className="font">문제</h2>
            </div>
            <div className="as1">
              <h1 className="font">{qs1}</h1>
            </div>
            <div className="as2">
              <h1 className="font">안녕안녕</h1>
            </div>
          </div>}
        </div> */}
      </div>
    );
}

export default SelectGender;