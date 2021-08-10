import React, {useState} from 'react';
import '../assets/css/topNav.css';
import hystecLogo from '../assets/images/hystec_logo.png';

function TopNav() {

    let [menuActive,setMenuActive] = useState(false);

    const MenuOpen = () => {
        menuActive
        ?setMenuActive(false)
        :setMenuActive(true)
        
    }

    return (
        <div className="topNav">
            <div className="topLogoDiv">
                <img src={hystecLogo} alt="hystecLogo" />
                <div className={"menu " + (menuActive?"active":"")} onClick={MenuOpen} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
    );
}

export default TopNav;
