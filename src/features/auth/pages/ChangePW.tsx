export default function ChangePW() {
    return (
        <div className="d-flex flex-column align-items-center" style={{ marginTop: '50px' }}>
            <h1 className="text-center py-4">비밀번호 변경</h1>

            <div className="border rounded p-4" style={{ width: '400px' }}>
                <div className="mb-3">
                    <label className="form-label">학번을 입력해주세요</label>
                    <input type="text" placeholder="학번 (ex. 2024XXXX)" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">전화번호를 입력해주세요</label>
                    <input type="text" placeholder="전화번호 (ex.010XXXXXXXX)" className="form-control" />
                    <label className="sub-supersmall-text">다른사람의 비밀번호를 무단으로 변경하려고 할 경우 처벌받을 수 있습니다</label>
                </div>

                <div className="text-center">
                    <button className="btn btn-outline-primary btn-lg w-50" style={{ fontSize: '14px' }}>변경 SMS 전송</button>
                </div>
            </div>
            <div>
                <label className="sub-smallblue-text">학생회비납부 시 입력했던 전화번호가 변경된 경우 학생회로 문의해주세요</label>
            </div>
        </div>
    );
}