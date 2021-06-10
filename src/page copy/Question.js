import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import wBtnMb from '../img/wBtnMb.png';
import mBtnMb from '../img/mBtnMb.png';

let qs1 = "";

// axios.get('https://dog.ceo/api/breeds/list/all').then((Response)=>{
//   console.log(Response.data);
//   console.log(Response.data.status);
//   console.log(Response.data.message.bulldog[1]);
//   qs1 = Response.data.message.bulldog[1];
// }).catch((Error)=>{
//   console.log(Error);
// })

/*
axios.get('http://172.30.1.40:8080/query/quest?mbti_id=00001').then((Response)=>{
  console.log(Response.data);
  // console.log(Response.data.status);
  // console.log(Response.data.message.bulldog[1]);
  console.log(Response.data.questList[0].questDtl);
  // qs1 = Response.data.message.bulldog[1];
  qs1 = Response.data.questList[0].questDtl;
}).catch((Error)=>{
  console.log(Error);
})

*/
/*
axios.post('http://1.238.222.186:9999/mbti/result?mbti_id=000001', {
         "gender" : "male",
         "user_answer" : [ 
           {"question_idx" : 1,
            "answer_idx" : "A" },
           {"question_idx" : 2,
            "answer_idx" : "A" },
           {"question_idx" : 3,
            "answer_idx" : "A" },
           {"question_idx" : 4,
            "answer_idx" : "A" },
           {"question_idx" : 5,
            "answer_idx" : "A" },
           {"question_idx" : 6,
            "answer_idx" : "A" },
           {"question_idx" : 7,
            "answer_idx" : "A" },
           {"question_idx" : 8,
            "answer_idx" : "A" },
           {"question_idx" : 9,
            "answer_idx" : "A" },
           {"question_idx" : 10,
            "answer_idx" : "A" },
           {"question_idx" : 11,
            "answer_idx" : "A" },
           {"question_idx" : 12,
            "answer_idx" : "A" },
           ] 
})
.then(function (response) {
   // response  
   console.log(response);
}).catch(function (error) {
  // 오류발생시 실행
  console.log(Error);
}).then(function() {
  // 항상 실행
});
*/

function Question () {

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
  /*
  let [Question, NewQuestion] = useState(['문제1', '문제2', '문제3','문제4','문제5','문제6','문제7','문제8','문제9','문제10','문제11','문제12']);
  let [Answer, NewAnswer] = useState(['답1', '답2', '답3','답4','답5','답6','답7','답8','답9','답10','답11','답12',]);
  */
  const [Question, NewQuestion] = useState([]);
  let [Answer, NewAnswer] = useState([]);
  let [Number, NextNumber] = useState(0);
  let i = 0;
  
  let [answerData, setAnswerData] = useState({       
    "gender" : "male",
    "user_answer" : [ 
      {"question_idx" : 1,
       "answer_idx" : "" },
      {"question_idx" : 2,
       "answer_idx" : "" },
      {"question_idx" : 3,
       "answer_idx" : "" },
      {"question_idx" : 4,
       "answer_idx" : "" },
      {"question_idx" : 5,
       "answer_idx" : "" },
      {"question_idx" : 6,
       "answer_idx" : "" },
      {"question_idx" : 7,
       "answer_idx" : "" },
      {"question_idx" : 8,
       "answer_idx" : "" },
      {"question_idx" : 9,
       "answer_idx" : "" },
      {"question_idx" : 10,
       "answer_idx" : "" },
      {"question_idx" : 11,
       "answer_idx" : "" },
      {"question_idx" : 12,
       "answer_idx" : "" },
      ]});



  let newResultData = {
    gender: "",
    match_type: "",
    mbti_id: "",
    my_type: "",
    my_type_match_img_url: "",
    my_type_match_item_1: "",
    my_type_match_item_2: "",
    my_type_match_same_gender_item_1: "",
    my_type_match_same_gender_item_2: "",
    my_type_match_same_img_url: "",
    my_type_rep_img_url: "",
    my_type_rep_item_1: "",
    my_type_rep_item_2: ""
  };

 let gender = "";
 let match_type = "";
 let mbti_id = "";
 let my_type = "";
 let my_type_match_img_url = "";
 let my_type_match_item_1 = "";
 let my_type_match_item_2 = "";
 let my_type_match_same_gender_item_1 = "";
 let my_type_match_same_gender_item_2 = "";
 let my_type_match_same_img_url = "";
 let my_type_rep_img_url = "";
 let my_type_rep_item_1 = "";
 let my_type_rep_item_2 = "";
/*
  const answerData = {       
  "gender" : "male",
  "user_answer" : [ 
    {"question_idx" : 1,
     "answer_idx" : "" },
    {"question_idx" : 2,
     "answer_idx" : "" },
    {"question_idx" : 3,
     "answer_idx" : "" },
    {"question_idx" : 4,
     "answer_idx" : "" },
    {"question_idx" : 5,
     "answer_idx" : "" },
    {"question_idx" : 6,
     "answer_idx" : "" },
    {"question_idx" : 7,
     "answer_idx" : "" },
    {"question_idx" : 8,
     "answer_idx" : "" },
    {"question_idx" : 9,
     "answer_idx" : "" },
    {"question_idx" : 10,
     "answer_idx" : "" },
    {"question_idx" : 11,
     "answer_idx" : "" },
    {"question_idx" : 12,
     "answer_idx" : "" },
    ]}
*/
  
  useEffect(() => {
    let completed = false;
    async function fetchData(){
      const result = await axios.get('http://1.238.222.186:9999/mbti/query/quest?mbti_id=000001');
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
    

    axios.post('http://1.238.222.186:9999/mbti/result?mbti_id=000001', 
    answerData
    )
    .then(function (response) {
      // response  
      console.log(response.data);
      gender                           = response.data.gender;
      match_type                       = response.data.my_type;
      mbti_id                          = response.data.mbti_id;
      my_type                          = response.data.my_type;
      my_type_match_img_url            = response.data.my_type_match_img_url;
      my_type_match_item_1             = response.data.my_type_match_item_1;
      my_type_match_item_2             = response.data.my_type_match_item_2;
      my_type_match_same_gender_item_1 = response.data.my_type_match_same_gender_item_1;
      my_type_match_same_gender_item_2 = response.data.my_type_match_same_gender_item_2;
      my_type_match_same_img_url       = response.data.my_type_match_same_img_url;
      my_type_rep_img_url              = response.data.my_type_rep_img_url;
      my_type_rep_item_1               = response.data.my_type_rep_item_1;
      my_type_rep_item_2               = response.data.my_type_rep_item_2;
      
      console.log(gender);
      console.log(match_type);
      console.log(mbti_id);
      console.log(my_type);
      console.log(my_type_match_img_url);
      console.log(my_type_match_item_1);
      console.log(my_type_match_item_2);
      console.log(my_type_match_same_gender_item_1);
      console.log(my_type_match_same_gender_item_2);
      console.log(my_type_match_same_img_url);
      console.log(my_type_rep_img_url);
      console.log(my_type_rep_item_1);
      console.log(my_type_rep_item_2);
      
      //let newResultData = {...resultData};
      newResultData.gender                           = gender                          ;
      newResultData.match_type                       = match_type                      ;
      newResultData.mbti_id                          = mbti_id                         ;
      newResultData.my_type                          = my_type                         ;
      newResultData.my_type_match_img_url            = my_type_match_img_url           ;
      newResultData.my_type_match_item_1             = my_type_match_item_1            ;
      newResultData.my_type_match_item_2             = my_type_match_item_2            ;
      newResultData.my_type_match_same_gender_item_1 = my_type_match_same_gender_item_1;
      newResultData.my_type_match_same_gender_item_2 = my_type_match_same_gender_item_2;
      newResultData.my_type_match_same_img_url       = my_type_match_same_img_url      ;
      newResultData.my_type_rep_img_url              = my_type_rep_img_url             ;
      newResultData.my_type_rep_item_1               = my_type_rep_item_1              ;
      newResultData.my_type_rep_item_2               = my_type_rep_item_2              ;

      console.log(newResultData.gender                           );
      console.log(newResultData.match_type                       );
      console.log(newResultData.mbti_id                          );
      console.log(newResultData.my_type                          );
      console.log(newResultData.my_type_match_img_url            );
      console.log(newResultData.my_type_match_item_1             );
      console.log(newResultData.my_type_match_item_2             );
      console.log(newResultData.my_type_match_same_gender_item_1 );
      console.log(newResultData.my_type_match_same_gender_item_2 );
      console.log(newResultData.my_type_match_same_img_url       );
      console.log(newResultData.my_type_rep_img_url              );
      console.log(newResultData.my_type_rep_item_1               );
      console.log(newResultData.my_type_rep_item_2               );
      console.log(newResultData);

}).catch(function (error) {
  // 오류발생시 실행
  console.log(Error);
}).then(function() {
  // 항상 실행
  
});


}

  function PostAnswerB() {
    let newAnswer = {...answerData};
    newAnswer.user_answer[Number].answer_idx = "B";
    setAnswerData(newAnswer);    axios.post('http://1.238.222.186:9999/mbti/result?mbti_id=000001', 
      answerData
)
.then(function (response) {
// response  
console.log(response);
//console.log(answerData);
}).catch(function (error) {
// 오류발생시 실행
console.log(Error);
}).then(function() {
// 항상 실행
});

  }



  function NextAnswerA () {
    //alert('NextAnswerA');
    //setAnswerData(answerData.user_answer[Number].answer_idx = "A");
    //console.log(answerData.user_answer[Number].answer_idx);
    //answerData.user_answer[Number].answer_idx = "A";
    //console.log(answerData.user_answer[Number].answer_idx);
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
      <Link to = "/Result">
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
      <Link to = "/Result">
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