// import React, { useState } from "react";
// import styled from "@emotion/styled";
// import { IdBox, LoginBox,LogoZone } from "../../styles/login/LoginPageStyle";
// import { BtSection, CancelBt, Logo, SaveBt, VerifiBt } from "../../styles/join/JoinPageStyle";
// import { verificationGet, verificationPost } from "../../api/join/join_api";

// const VerificationStyle = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1000;
//   width: 500px;
//   height: 560px;
//   background: #fff;
//   padding-top: 20px;
//   border: 1px solid #AE9985;
//   border-radius: 10px;
// `;

// const VerificationModal = ({ closeModal, onConfirm, setVerificationId, verificationId }) => {
//   const [resultOk, setResultOk] = useState(false)
//   const [userData, setUserData] = useState({
//     userName: "",
//     userPhone: "",
//     userBirthday: "",
//   });

//   const handleChange = (fieldName, value) => {
//     let sanitizedValue;
  
//     if (fieldName === "userPhone" || fieldName === "userBirthday") {
//       const numRegex = /^[0-9]*$/;
//       if (!numRegex.test(value)) {
//         return;
//       }
//       sanitizedValue = value;
//     } else {
//       const regex = /^[가-힣]*[ㄱ-ㅎㅏ-ㅣ]*$/;
//       if (!regex.test(value)) {
//         return;
//       }
//       sanitizedValue = value;
//     }
  
//     setUserData(prevState => ({
//       ...prevState,
//       [fieldName]: sanitizedValue,
//     }));
//   };

//   const handleVerifiConfirm = async (userData) => {
//     if (!userData.userName || !userData.userPhone || !userData.userBirthday) {
//       return;
//     }
//     try {
//       let result;
//       result = await verificationPost(userData);
//       setVerificationId(result.id);
//       setResultOk(true);
//     } catch (error) {
//       console.log(error);
//       // 에러 발생 시 본인 확인 완료 문구 표시
//       setResultOk(true);
//     }
//   };

//   return (
//     <VerificationStyle>
//       <LogoZone>
//         <Logo src="/images/header/logo.svg" style={{ marginBottom: "50px" }} />
//       </LogoZone>
//       <LoginBox height={"340px"} mgbtm={"50px"}>
//         {resultOk ? (
//           <p>
//           본인인증 완료해주세요. 
//           </p>
//         ) : (
//           <p>
//           본인인증을 위해 <br />
//           정보 입력을 해주세요.
//           </p>
//         )}
//         <IdBox
//           type="text"
//           placeholder="이름 예) 홍길동"
//           value={userData.userName}
//           onChange={(e) => handleChange("userName", e.target.value)}
//         />
//         <IdBox
//           type="text"
//           placeholder="휴대폰 번호 예) 01000000000"
//           value={userData.userPhone}
//           onChange={(e) => handleChange("userPhone", e.target.value)}
//         />
//         <IdBox
//           type="number"
//           placeholder="생일 예) 20240513"
//           value={userData.userBirthday}
//           onChange={(e) => handleChange("userBirthday", e.target.value)}
//         />

//         <BtSection width={"380px"}>
//           {resultOk ? (
//               <VerifiBt onClick={()=> onConfirm(verificationId)}>본인 확인 완료</VerifiBt>
//             ) : (
//               <>
//                 <CancelBt onClick={closeModal}>닫기</CancelBt>
//                 <SaveBt onClick={() => handleVerifiConfirm(userData)}>
//                   확인
//                 </SaveBt>
//               </>
//             )}
//         </BtSection>
//       </LoginBox>
//     </VerificationStyle>
//   );
// };

// export default VerificationModal;
