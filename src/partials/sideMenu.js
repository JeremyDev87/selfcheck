import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/sideMenu.css';
import LogOut from '../assets/images/power-off-solid.svg';
import CheckLog from '../assets/images/clipboard-check-solid.svg';

function SideMenu() {

    return (
        <div className="sideMenu">
                <div className="MenuInfo">
                    <strong>01087855742</strong> 님
                    <p>건강 관리 자가 진단</p>
                </div>
                <div className="navList">
                    <ul>
                        <Link to="/"><li><img src={CheckLog} alt="checkIcon"/><span>자가진단</span></li></Link>
                        <Link to="/login"><li><img src={LogOut} alt="logOutIcon"/><span>로그아웃</span></li></Link>
                    </ul>
                </div>
        </div>
    );
}

export default SideMenu;
