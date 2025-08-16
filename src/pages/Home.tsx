import React from 'react';
import '../components/Home.css'
import {Link} from "react-router-dom";
import {PersonFill} from "react-bootstrap-icons";
import {Building} from "react-bootstrap-icons";
import {Alarm} from "react-bootstrap-icons";

function Home() {
    return (
        <main className="main-content">
            <h1>학교에서 급하게 필요한</h1>
            <h1>물품이 있다면?</h1>
            <h2>지금 바로 SSURENT에서!</h2>
            <div className="button-container">
                <Link to="/rent">
                    <button type="button" className="btn btn-primary">물품대여 바로가기</button>
                </Link>
                <Link to="/return">
                    <button type="button" className="btn btn-primary">물품반납 바로가기</button>
                </Link>
            </div>
            <div className="middle-describes">
                <h2 >대여사업이 뭔가요</h2>
                <br/>
                <h4>
                    컴퓨터학부 학우분들의 보다 나은 생활을 위해<br/>
                    컴퓨터학부의 학생회비 납부자를 대상으로<br/>
                    물품 대여 사업을 진행하고 있습니다
                </h4>
            </div>
            <div className="info-cards-container">
                <div className="info-card">
                    <PersonFill size={80} color="#000000" />
                    <br/>
                    <br/>
                    <h3>이용 대상</h3>
                    <p>컴퓨터학부 학생회비 납부자</p>
                </div>
                <div className="info-card">
                    <Building size={80} color="#000000" />
                    <br/>
                    <br/>
                    <h3>대여 장소</h3>
                    <p>정보과학관 B1층 컴퓨터학부 학생회실</p>
                </div>
                <div className="info-card">
                    <Alarm size={80} color="#000000" />
                    <br/>
                    <br/>
                    <h3>이용 시간</h3>
                    <p>평일 10:00 ~ 16:00</p>
                </div>
            </div>
        </main>
    );
}

export default Home;