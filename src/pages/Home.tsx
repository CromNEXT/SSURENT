import React from 'react';
import '../components/Home.css'
import {Link} from "react-router-dom";

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
        </main>
    );
}

export default Home;