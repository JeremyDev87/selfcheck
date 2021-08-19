import React from 'react';
import './assets/css/loglist.css';
import imgPhone from './assets/images/phone-alt-solid.svg'

function LogList() {



    return (
        <div className="logList">
            <h1>업체명</h1>
            <h6>일자</h6>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>일시</th>
                            <th>이름</th>
                            <th>이상 여부</th>
                            <th>전화</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>2020.08.11 13:45:10</span></td>
                            <td><span>박정욱</span></td>
                            <td><span>이상없음</span></td>
                            <td><a href="tel:01087855742"><img src={imgPhone} className="phoneImg" alt="phoneCall"/></a></td>
                        </tr>
                        <tr>
                            <td><span>2020.08.11 13:45:10</span></td>
                            <td><span>박정욱</span></td>
                            <td><span>진단필요</span></td>
                            <td><a href="tel:01087855742"><img src={imgPhone} className="phoneImg" alt="phoneCall"/></a></td>
                        </tr>
                        <tr>
                            <td><span>2020.08.11 13:45:10</span></td>
                            <td><span>박정욱</span></td>
                            <td><span>이상없음</span></td>
                            <td><a href="tel:01087855742"><img src={imgPhone} className="phoneImg" alt="phoneCall"/></a></td>
                        </tr>
                        <tr>
                            <td><span>2020.08.11 13:45:10</span></td>
                            <td><span>박정욱</span></td>
                            <td><span>이상없음</span></td>
                            <td><a href="tel:01087855742"><img src={imgPhone} className="phoneImg" alt="phoneCall"/></a></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default LogList;
