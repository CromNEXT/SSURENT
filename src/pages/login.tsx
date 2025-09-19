import { NavLink } from "react-router-dom";

export default function Login() {
    return (
        <div className="d-flex flex-column align-items-center" style={{ marginTop: '50px' }}>
            <h1 className="text-center py-4">로그인</h1>
            <div className="border rounded p-4" style={{ width: '400px' }}>
                <div className="mb-3">
                    <label className="form-label">학번을 입력해주세요</label>
                    <input type="text" placeholder="학번 (ex. 2024XXXX)" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">비밀번호를 입력해주세요</label>
                    <input type="password" placeholder="비밀번호" className="form-control" />
                    <label className="sub-small-text">초기 비밀번호는 전화번호(숫자만)입니다. 반드시 변경해주세요</label>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-primary btn-lg w-50">로그인</button>
                </div>
            </div>
            <div className="text-center mt-3">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to="/changePW" className="text-decoration-none">비밀번호 재설정</NavLink>
            </div>
        </div>
    );
}