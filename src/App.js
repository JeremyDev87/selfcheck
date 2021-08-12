import React, {useState} from 'react';
import {useLocation} from 'react-router';
import {useHistory} from 'react-router-dom';
import './assets/css/app.css';

function App() {

  const location = useLocation();
  const history = useHistory();

  // // let [phoneNum,setPhoneNum] = useState(location.state.loginPhone);
  // let test = location.state.loginPhone;
  // console.log(test);

  return (
    <div className="App">
      <div className="contents">
        <div className="ques">
          <span>1) 본인의 몸에 열이 있나요?</span>
          <div className="select">
            <input type="radio" id="select" name="feverRadio"/><label htmlFor="select">네</label>
            <input type="radio" id="select2" name="feverRadio"/><label htmlFor="select2">아니오</label>
          </div>
        </div>
        <div className="ques">
          <span>2) 본인에게 코로나19가 의심되는 증상이 있나요?</span>
          <div className="select">
            <input type="radio" id="select3" name="feverRadio2"/><label htmlFor="select3">네</label>
            <input type="radio" id="select4" name="feverRadio2"/><label htmlFor="select4">아니오</label>
          </div>
        </div>
        <div className="ques">
          <span>3) 동거가족 중 현재 자가격리 중인 가족이 있나요?</span>
          <div className="select">
            <input type="radio" id="select5" name="feverRadio3"/><label htmlFor="select5">네</label>
            <input type="radio" id="select6" name="feverRadio3"/><label htmlFor="select6">아니오</label>
          </div>
        </div>
      </div>
      <div className="btnDiv">
        <p className="agreeMsg">
          위와 같이 자가진단을 수행하며 <br/>해당 내용은 방역에 활용됩니다.
        </p>
        <input className="selectSubmit" type="submit" value="자가 진단 제출하기"/>
      </div>
    </div>
  );
}

export default App;
