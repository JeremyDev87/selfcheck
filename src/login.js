import './assets/css/login.css';
import hystecLogo from './assets/images/hystec_logo.png';
import checkList from './assets/images/mainLogo.png';

function Login() {

    const onlyNumber = (e) => {
        let phoneNum = e.target.value;
        phoneNum = phoneNum.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        e.target.value = phoneNum;
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
                <input id="doLogin" type="submit" value="자가진단 하기"/>
            </div>
        </div>
    );
}

export default Login;
