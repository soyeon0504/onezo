import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import "../../styles/join/JoinTOS.css";
import { useNavigate } from "react-router-dom";

const JoinTOS = () => {
  const [isCheckedTOS, setIsCheckedTOS] = useState(false);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#fff");
  const [buttonFontColor, setButtonFontColor] = useState("#572a01");
  const [isButtonClickable, setIsButtonClickable] = useState(false);

  const handleCheckboxChangeTOS = () => {
    setIsCheckedTOS(!isCheckedTOS);
  };

  const handleCheckboxChangePrivacy = () => {
    setIsCheckedPrivacy(!isCheckedPrivacy);
  };

  useEffect(() => {
    if (isCheckedTOS && isCheckedPrivacy) {
      setButtonBackgroundColor("#ff8b38");
      setButtonFontColor("#fff");
      setIsButtonClickable(true);
    } else {
      setButtonBackgroundColor("#fff");
      setButtonFontColor("#572a01");
      setIsButtonClickable(false);
    }
  }, [isCheckedTOS, isCheckedPrivacy]);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isCheckedTOS && isCheckedPrivacy) {
      const url = `/join`;
      navigate(url);
    }
  };

  return (
    <Layout>
      <div className="join-wrap">
        <div className="join-title">회원가입 </div>
      </div>
      <div className="terms-container">
        <div className="border-box">
          <div className="scroll-y">
            <h2>원조통닭 서비스 이용약관</h2>
            <p>제 1장 총칙</p>
            <p>
              제 1조 (목적) 이 약관은 (주)원조통닭 (이하 회사라 합니다)이
              제공하는 웹서비스(이하 서비스라 합니다)의 이용조건 및 절차 등에
              관한 사항을 규정함을 목적으로 합니다.
            </p>
            <p>
              제 2조 (약관의 효력 및 변경) ① 본 서비스를 이용하고자 하는 모든
              이용자에 대하여 그 효력을 발생합니다. ② 이 약관의 내용은 서비스의
              일부 화면 또는 기타 방법 등에 의하여 그 내용을 게재함으로써 그
              효력을 발생합니다. ③ 회사는 운영 또는 영업상 중요한 사유가 있을
              경우 본 약관을 임의로 변경할 수 있으며, 변경된 약관은 본 조
              제2항과 같은 방법으로 공지함으로써 그 효력을 발생합니다.
            </p>
            <p>
              제 3조 (약관외 준칙) 이 약관에 명시되지 않은 사항은
              전기통신기본법, 전기통신사업법, 정보통신망이용촉진 등에 관한 법률
              및 기타 관련법령, 회사가 별도로 정한 지침 등에 의합니다.
            </p>
            <p>
              제 4조 (용어의 정의) 이 약관에서 사용하는 용어의 정의는 다음과
              같습니다. 1. 회 원 : 서비스를 제공받기 위하여 회사와 이용계약을
              체결하거나 이용자 아이디(ID)를 부여받은 자를 말합니다. 2. 아이디
              (ID) : 회원식별과 회원의 서비스 이용을 위하여 회원이 선정하고
              회사가 승인하는 영문자와 숫자의 조합 3. 비 밀 번 호 : 회원의
              비밀보호를 위해 회원자신이 설정한 문자와 숫자의 조합
            </p>
            <p>
              제 5조 (서비스의 내용) 회사는 회원에게 회사가 자체 개발하는
              서비스, 타 업체와 협력 개발한 서비스, 타 업체가 개발한 서비스 및
              기타 회사에서 별도로 정하는 각종 서비스 등을 제공합니다. 단,
              회사의 사정상 각 서비스별로 제공일정 및 제공방법이 변경되거나
              지연, 미 제공될 수도 있습니다.
            </p>
            <p>제 2장 서비스 이용계약</p>
            <p>
              제 6조 (이용계약의 성립) ① 위의 이용약관에 동의하십니까? 라는
              이용신청시의 물음에 회원이 동의 단추를 누르면 이 약관에 동의하는
              것으로 간주됩니다. ② 이용계약은 제7조에 규정한 회원의 이용신청에
              대하여 회사가 승낙함으로써 성립합니다.
            </p>
            <p>
              제 7조 (이용신청) ① 본 서비스를 이용하기 위해서는 회사 소정의
              가입신청 양식에서 요구하는 모든 이용자 정보를 기록하여 신청합니다.
              ② 가입신청 양식에 기재하는 모든 이용자 정보는 모두 실제 데이터인
              것으로 간주됩니다. 실명이나 실제 정보를 입력하지 않은 사용자는
              법적인 보호를 받을 수 없으며 서비스의 제한을 받을 수 있습니다.
            </p>
            <p>
              제 8조(회원정보 사용에 대한 동의) ① 회사는 제7조에 따라 가입 신청
              양식에 기재된 회원의 개인정보를 본 이용계약의 이행과 본
              이용계약상의 서비스 제공을 위한 목적으로 이용합니다. ② 회원 정보는
              회사와 제휴한 업체에 제공될 수 있습니다. 단, 회사는 회원 정보 제공
              이전에 제휴 업체, 제공 목적, 제공할 회원 정보의 내용 등을 사전에
              공지하고 회원의 동의를 얻어야 합니다. ③ 회원은 회원 정보 수정을
              통해 언제든지 개인 정보에 대한 열람 및 수정을 할 수 있습니다. ④
              회원이 가입 신청 양식에 회원정보를 기재하고, 회사에 본 약관에 따라
              이용신청을 하는 것은 회사가 본 약관에 따라 이용신청서에 기재된
              회원정보를 수집, 이용 및 제공하는 것에 동의하는 것으로 간주됩니다.
            </p>
            <p>
              제 9조(이용신청의 승낙) ① 회사는 회원이 제7조에서 정한 사항을
              정확히 기재하여 이용 신청을 하였을 때 다음 제2항, 제3항의 경우를
              예외로 하여 승낙할 수 있습니다. 기재 사항의 항목에 따라 서비스
              이용의 일부가 제한될 수 있습니다. ②회사는 다음의 경우 이용신청에
              대하여는 승낙을 유보할 수 있습니다. 1. 서비스 이용설비에 여유가
              없는 경우 2. 기술상 서비스 제공이 불가능한 경우 3. 기타 사유로
              이용승낙이 곤란한 경우 ③ 회사는 다음 각 호의 1에 해당하는
              이용신청에 대하여 이를 승낙하지 않을 수 있습니다. 1. 다른 사람의
              명의를 사용하여 신청한 경우 2. 이용신청시 필요내용을 허위로
              기재하여 신청한 경우 3. 사회의 안녕질서 또는 미풍양속을 저해할
              목적으로 신청한 경우 4. 기타 회사가 정한 이용신청요건이 만족되지
              않았을 경우
            </p>
            <p>
              제 10조(계약사항의 변경) 회원은 이용신청시 기재한 이용자정보가
              변경되었을 경우에는, 온라인으로 수정을 하여야 하며 미변경으로
              인하여 발생되는 문제의 책임은 이용자에게 있습니다.
            </p>
          </div>
        </div>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isCheckedTOS}
            onChange={handleCheckboxChangeTOS}
          />
          <span className="checkmark"></span>
          (필수) 약관에 동의합니다.
        </label>
        <div className="border-box">
          <div className="scroll-y">
            <h2>개인정보 처리 방침</h2>
            <p>개인정보의 수집 및 이용 목적</p>
            <p>회원관리</p>
            <p>
              회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정 이용
              방지와 비인가 사용 방지, 가입 의사 확인, 가입 및 가입횟수 제한,
              만14세 미만 아동 개인정보 수집 시법정 대리인 동의여부 확인, 추후
              법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등
              민원처리, 고지사항 전달
            </p>
            <p>마케팅 및 광고 활용</p>
            <p>
              신규 메뉴 개발 및 특화, 인구 통계학적 특성에 따른 서비스 제공 및
              광고게재, 접속 빈도 파악, 회원의 서비스 이용에 대한 통계, 이벤트
              등 광고 정보 전달
            </p>
            <p>개인정보수집정보</p>
            <p>
              가. ㈜혜인식품이 수집하는 개인정보는 다음과 같습니다.<br></br> -
              회원ID, 비밀번호, 이름, 연락처, 이메일<br></br> - 또한 서비스
              이용과정이나 사업 처리 과정에서 아래와 같은 정보들이 생성되어
              수집될 수 있습니다.<br></br> - 서비스 이용기록, 접속 로그, 쿠키,
              접속 IP 정보, 결제기록, 이용정지 기록
            </p>
            <p>
              나. ㈜혜인식품은 다음과 같은 방법으로 개인정보를 수집합니다.
              <br></br> - 홈페이지, 서면양식, 전화/팩스를 통한 회원가입, 상담
              게시판, 경품 행사 응모, 배송요청<br></br> - 제휴사로부터의 제공
            </p>
            <p>개인정보의 보유 및 이용 기간</p>
            <p>
              귀하의 개인정보는 개인정보의 수집목적 또는 제공받은 목적이
              달성되면 다음과 같이 파기됩니다. 가. 회원가입정보: 회원 탈퇴
              요청이 있거나 회원에서 제명된 때를 기준일자로 하여 3개월 보관 후
              파기 나. 기타 정보: 해당 개인정보의 수집목적이 달성된 때 단, 상법
              등 법령의 규정에 의하여 보존할 필요성이 있는 경우와 귀하의 동의가
              있는 경우에는 예외로 합니다. 1) 회원관리
            </p>
            <p>
              1) 회원관리 부정이용기록<br></br> - 보존항목: 가입인증 휴대폰번호,
              이메일주소
              <br></br>- 보존 이유: 부정 가입 및 이용 방지<br></br> - 보존 기간:
              1년
            </p>
          </div>
        </div>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isCheckedPrivacy}
            onChange={handleCheckboxChangePrivacy}
          />
          <span className="checkmark"></span>
          (필수) 약관에 동의합니다.
        </label>
      </div>
      <div
        className={`join-button ${isButtonClickable ? "clickable" : ""}`}
        style={{
          backgroundColor: buttonBackgroundColor,
          color: buttonFontColor,
        }}
        onClick={() => handleButtonClick()}
      >
        가입하기
      </div>
    </Layout>
  );
};

export default JoinTOS;
