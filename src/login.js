import axios from 'axios';
import './assets/css/login.css';
import hystecLogo from './assets/images/hystec_logo.png';
import checkList from './assets/images/mainLogo.png';
import {useHistory} from 'react-router-dom';

function Login() {

    const history = useHistory();

    const onlyNumber = (e) => {
        let phoneNum = e.target.value;
        phoneNum = phoneNum.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        e.target.value = phoneNum;
    }

    const DoLogin = () => {
        // console.log("DoLogin");
        let inputPhoneNum = document.getElementById("loginID").value?? '';
        if(inputPhoneNum===''|| inputPhoneNum.length !== 11){
            alert("핸드폰 번호를 정확히 입력해주세요");
        }else{
            // console.log("valid check complete")
            LoginPrc(inputPhoneNum);
        }
    }

    const LoginPrc = (obj) => {
        // console.log(obj);
        axios.get('http://localhost:8005/api/login')
        .then((result)=>{ 
            // console.log(result.data);
            // console.log(result.data.phone);
            if(obj === result.data.phone){
                history.push({
                    pathname: "./check",
                    state : {loginPhone : obj}
                });
            }else{
                alert("자가진단 대상자가 아닙니다.")
            }
        })
        .catch(()=>{ console.log('error') })
    }

    return (
        <div className="login">
            <div className="topLogoDiv">
                <img src={hystecLogo} alt="hystecLogo"/>
            </div>
            <div className="contentsDiv">
                <img src={checkList} alt="checkList" />
            </div>
            <div className="submitDiv">
                <input id="loginID" type="tel" placeholder="하이픈 (-) 없이 핸드폰 번호를 입력하세요" onChange={onlyNumber}/>
                <input id="doLoginBtn" type="submit" value="자가진단 하기" onClick={DoLogin} />
            </div>
        </div>
    );
}

export default Login;
