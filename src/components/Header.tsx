import { NavLink } from "react-router-dom";
import logo from "../assets/images/ssulogo.jpg"; // 이미지 경로는 실제 프로젝트에 맞게 확인해주세요.
import "../App.css";

export default function Header() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        "nav-link px-3 link-dark fw-bold" + (isActive ? " active" : "");

    return (
        // 1. 전체를 <div className="container">로 감싸줍니다.
        <div className="container">
            <header className="d-flex flex-wrap align-items-center py-3 mb-4 border-bottom">

                <NavLink to="/"
                         className="d-flex align-items-center text-dark text-decoration-none">
                    <img src={logo} alt="로고 이미지" style={{width: '90px'}} className="img-fluid me-2"/>
                    <span className="fs-4">SSURENT</span>
                </NavLink>

                <ul className="nav me-auto ms-5">
                    <li><NavLink to="/rent" className={linkClass}>대여하기</NavLink></li>
                    <li><NavLink to="/return" className={linkClass}>반납하기</NavLink></li>
                    <li><NavLink to="/info" className={linkClass}>정보</NavLink></li>
                    <li><NavLink to="/mypage" className={linkClass}>마이페이지</NavLink></li>
                </ul>

                <div className="text-end me-5">
                    <NavLink to="/login">
                        <button type="button" className="btn btn-outline-primary">로그인</button>
                    </NavLink>
                </div>
            </header>
        </div>
    );
}