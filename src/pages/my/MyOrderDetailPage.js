import React from 'react';
import '../../styles/my/MyOrderDetail.css'; // import 키워드를 사용하여 CSS 파일을 import
import Layout from '../../layouts/Layout';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



function MyOrderDetailPage() {
  const navigate = useNavigate();

  const goToOrderListPage = () => {
    navigate('/my'); // 기본 주문 내역 페이지의 경로로 이동
  };
 
  return (
    <div className="app">
    <div className="order-detail-page">
      {/* <header>
        <h1>주문 상세</h1>
      </header> */}
      {/* X 버튼 추가 */}
      <div className="button-container">
            <button onClick={goToOrderListPage} className="close-button">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
      <div className="order-section">
        <h2>주문내역</h2>
        <div className="order-info">
          <p>
            <span className="info-label">패밀리점</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대구 동성로점
          </p>
          <p>
            <span className="info-label">주문상태</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포장/식사 완료
          </p>
          <p>
            <span className="info-label">주문일시</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2024-4-16 18:32
          </p>
          <p>
            <span className="info-label">주문번호</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;432432432
          </p>
        </div>
      </div>
      <div className="order-section">
        <h2>주문옵션</h2>
        <div className="order-options">
        <p><strong>1. 치킨</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>20,000원</strong></p>
    <p><strong>2. 감자튀김</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>3,500원</strong></p>
    <p><strong>3. 코카콜라</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>2,000원</strong></p>
  </div>
      </div>
      <div className="order-section">
        <h2>결제금액</h2>
        <div className="payment-info">
          {/* <p>
            <span className="info-label">주문금액</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25,500원
          </p>
          <p>
            <span className="info-label">할인금액</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -5,000원
          </p> */}
          <p>
            <span className="info-label">총 결제금액</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,500원
          </p>
        </div>
      </div>
      <div className="order-section">
        <h2>결제방법</h2>
        <div className="payment-method">
          <p><span className="info-label">결제방법</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;카드결제</p>
        </div>
      </div>
    </div>
    {/* <footer className="footer">
      <p>© 2024 원조 통닭 프랜차이즈. All rights reserved.</p>
    </footer> */}
  </div>
);
}
export default MyOrderDetailPage;
