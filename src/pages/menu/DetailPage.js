import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import "../../styles/menu/MenuDetail.css";

const DetailPage = () => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = change => {
    const newQuantity = quantity + change;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };
  const nutritionData = {
    serving: 100,
    calories: 250.54,
    sodium: 273,
    carbs: 33.2,
    protein: 7.6,
    fat: 11.7,
    sugar: 23.71,
  };

  const originInfo = "닭고기: 국내산";
  const allergyInfo =
    "유유, 대두, 밀, 계란, 닭고기, 조개류(굴), 새우, 사료, 방부제";

  return (
    <>
      <Layout>
        <div className="menu-container">
          <div className="menu-image">
            <img src="../../images/main/chicken.svg" alt="원조 후라이드" />
          </div>
          <div className="menu-details">
            <h1>원조 후라이드</h1>
            <p className="menu-price">18,000원</p>
            <p className="menu-note">
              * 본 이미지는 실제와 다를 수 있으며 가맹점 상황에 따라 가격이
              상이할 수 있습니다.
            </p>
            <div className="quantity-controls">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity === 0}
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button className="order-button">주문하기</button>
          </div>
        </div>
        <div></div>
        <div className="nutrition-info">
          <div className="origin-info">
            <h2>원산지</h2>
            <p>{originInfo}</p>
          </div>
          <h3>영양성분 정보</h3>
          <table>
            <tbody>
              <tr>
                <th>1회 제공량</th>
                <td>{nutritionData.serving}g</td>
              </tr>
              <tr>
                <th>열량(Kcal)</th>
                <td>{nutritionData.calories}</td>
              </tr>
              <tr>
                <th>나트륨(mg)</th>
                <td>{nutritionData.sodium}</td>
              </tr>
              <tr>
                <th>탄수화물(g)</th>
                <td>{nutritionData.carbs}</td>
              </tr>
              <tr>
                <th>단백질(g)</th>
                <td>{nutritionData.protein}</td>
              </tr>
              <tr>
                <th>지방(g)</th>
                <td>{nutritionData.fat}</td>
              </tr>
              <tr>
                <th>당류(g)</th>
                <td>{nutritionData.sugar}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="allergy-info">
          <h1>알레르기 정보</h1>
          <p>{allergyInfo}</p>
        </div>
      </Layout>
    </>
  );
};

export default DetailPage;
