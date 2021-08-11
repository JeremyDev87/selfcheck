import React from 'react';
import './assets/css/loglist.css';

function LogList() {



    return (
        <div className="logList">
            <h1>자가 진단 내역 List</h1>
            <h6>최근 10개의 내역을 확인할 수 있습니다</h6>
            <section>
                <table>
                    <thead>
                        <th>일시</th>
                        <th>배차</th>
                        <th>이상여부</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2020.08.11 13:45:10</td>
                            <td>신길/개봉선</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>2020.08.11 13:45:10</td>
                            <td>신길/개봉선</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>2020.08.11 13:45:10</td>
                            <td>신길/개봉선</td>
                            <td>○</td>
                        </tr>
                        <tr>
                            <td>2020.08.11 13:45:10</td>
                            <td>신길/개봉선</td>
                            <td>○</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default LogList;
