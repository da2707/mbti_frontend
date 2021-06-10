import React, { useState, useEffect } from 'react'; 
import { useMediaQuery } from 'react-responsive';
import { useLocation, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import logo from '../logo.svg';
import start from '../img/start.png';
import startMb from '../img/startMb.png';
import headMb from '../img/headMb.png';
import bgPc from '../img/bgPc.png';
import bgTb from '../img/bgTb.svg';
import bgMb from '../img/bgMb.svg';
import '../App.css';
import SelectGender from './SelectGender';


function Start () {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      <div className="App">
        
         {/* <header className="App-header">
          <img src={bgPc} className="App-logo" alt="logo" />
        </header>  */}
        {/* <div> */}

          {/* {isPc && <p>HI PC</p>}
          {isTablet && <p>HI Tablet</p>}
          {isMobile && <p>HI Mobile</p>} */}
          {/* {isPc &&  <img src={bgPc} className="App-logo" alt="logo" />}
          {isTablet &&  <img src={bgTb} className="App-logo" alt="logo" />}
          {isMobile &&  <img src={bgMb} className="App-logo" alt="logo" />} */}
          {isPc &&  
          <div className="bgPc">
            <div className="sBtn">
              <img className="start" src={start}/>
            </div>
          </div>}
          {isTablet &&  <div className="bgTb"></div>}
          {isMobile &&  
          <div className="bgMb">
            <div className="dHead">
              <img className="head" src={headMb}/>
            </div>
            
            <div className="sBtn">
            <Link to ="/SelectGender">
              <img className="start" src={startMb}/>
            </Link>
            </div>
          </div>}
        {/* </div> */}
        
        {/* <Route path="/gd" component={gd} /> */}
      </div>
    );
  }

export default Start;
