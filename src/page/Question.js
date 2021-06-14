import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { useLocation, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import wBtnMb from '../img/wBtnMb.png';
import mBtnMb from '../img/mBtnMb.png';

function Question () {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const location = useLocation();
  const genderTest = location.state;
  console.log("뭐지" + JSON.stringify(genderTest));



  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  let [Qnumber, NewQnumber] = useState(['Q1.','Q2.','Q3.','Q4.','Q5.','Q6.','Q7.','Q8.','Q9.','Q10.','Q11.','Q12.']);

  const [Question, NewQuestion] = useState([]);
  let [Answer, NewAnswer] = useState([]);
  let [Number, NextNumber] = useState(0);
  let i = 0;
  
  let [answerData, setAnswerData] = useState([]);
  useEffect(() => {
    let completed = false;
    async function fetchData(){

    if(!completed) {
      setAnswerData(genderTest);
      }
    }
    fetchData();
    return () => {
      completed = true;
    };
  },[]);
  
  useEffect(() => {
    let completed = false;
    async function fetchData(){
      const result = await axios.get('https://api.life-in-valley.tech:8443/mbti/query/quest?mbti_id=000001');
      console.log(result.data.quest_list);
    if(!completed) {
      NewQuestion(result.data);
      NewAnswer(result.data);
      }
    }
    fetchData();
    return () => {
      completed = true;
    };
  },[]);
  
  
  function PostAnswerA() {
    let newAnswer = {...answerData};
    newAnswer.user_answer[Number].answer_idx = "A";
    setAnswerData(newAnswer);
    console.log(answerData);

}

  function PostAnswerB() {
    let newAnswer = {...answerData};
    newAnswer.user_answer[Number].answer_idx = "B";
    setAnswerData(newAnswer);    

  }



  function NextAnswerA () {

    let newAnswer = {...answerData};
    newAnswer.user_answer[Number].answer_idx = "A";
    setAnswerData(newAnswer);
    NextNumber(Number + 1);
  }
  
  function NextAnswerB () {
    let newAnswer = {...answerData};
    newAnswer.user_answer[Number].answer_idx = "B";
    setAnswerData(newAnswer);
    NextNumber(Number + 1);
  }

  function DefaultAs1Btn() {
    return(
      <h1 className="fontAs" onClick={NextAnswerA}>
        {Answer.quest_list && Answer.quest_list[Number].answer_list[0].answer_dtl}
      </h1>
      
    );
  }

  function NextAs1Btn() {
    return(
      <Link to = {{pathname:"/Result",state:
      {test:answerData}}}>
        <h1 className="fontAs" onClick={PostAnswerA}>
          {Answer.quest_list && Answer.quest_list[Number].answer_list[0].answer_dtl}
        </h1>
      </Link>
    );
  }

  function SetAs1Btn() {
    if(Number == 11){
      return <NextAs1Btn></NextAs1Btn>;
    }
    else{
      return <DefaultAs1Btn></DefaultAs1Btn>;
    }
  }



  function DefaultAs2Btn() {
    return(
      <h1 className="fontAs" onClick={NextAnswerB}>
        {Answer.quest_list && Answer.quest_list[Number].answer_list[1].answer_dtl}
      </h1>
    );
  }

  function NextAs2Btn() {
    return(
      <Link to = {{pathname:"/Result",state:
      {test:answerData}}}>
        <h1 className="fontAs" onClick={PostAnswerB}>
          {Answer.quest_list && Answer.quest_list[Number].answer_list[1].answer_dtl}
        </h1>
      </Link>
    );
  }

  function SetAs2Btn() {
    if(Number == 11){
      return <NextAs2Btn></NextAs2Btn>;
    }
    else{
      return <DefaultAs2Btn></DefaultAs2Btn>;
    }
  }

    return (
      <div className="qs">
        {isMobile && 
          <div className="bgMbQs">
            <div className="title">
              <h1 className="fontTitle">{Qnumber[Number]}</h1>
            </div>
            <div className="qs1">
              <h1 className="fontQs">{Question.quest_list && Question.quest_list[Number].quest_dtl}</h1>
            </div>
            <div className="as1">
              <SetAs1Btn></SetAs1Btn>
            </div>
            <div className="as2">
              <SetAs2Btn></SetAs2Btn>
            </div>
          </div>}
      </div>
    );

}

export default Question;
