import React, { createContext, useState, useRef } from 'react'; 
import { useMediaQuery } from 'react-responsive';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import start from './img/start.png';
import startMb from './img/startMb.png';
import headMb from './img/headMb.png';
import bgPc from './img/bgPc.png';
import bgTb from './img/bgTb.svg';
import bgMb from './img/bgMb.svg';
import './App.css';
import SelectGender from './page/SelectGender';
import Start from './page/Start';
import Question from './page/Question';
import Result from './page/Result';
import More from './page/More';



function App () {

const TestContext = createContext({       
  "gender" : "",
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

const[test,setTest] = useState({
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
});




return (
      <Router>
        <header>
          
        </header>
        <main>
          <Route exact path="/" component={Start} />
          <Route path="/SelectGender" component={SelectGender} />
          <Route path="/Question" component={Question} setTest={setTest}/>
          <Route path="/Result" component={Result} />
          <Route path="/More" component={More} />

        </main>
      </Router>
    );
  }

export default App;
