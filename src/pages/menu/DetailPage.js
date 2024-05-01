import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import "../../styles/menu/MenuDetail.css";
import axios from "axios";

const DetailPage = () => {
  const [quantity, setQuantity] = useState(0);

  const [menuInfo, setMenuInfo] = useState(null);
  // const [loading, setLoding] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuInfo = async () => {
      const response = await axios.get("/menuInfo/5");
      setMenuInfo(response.data);
      console.log(response.data);
    };
    fetchMenuInfo();
  }, [menuInfo]);

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleQuantityChange = change => {
    const newQuantity = quantity + change;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const btList = [
    { title: "전체" },
    { title: "세트" },
    { title: "치킨" },
    { title: "사이드" },
    { title: "소스" },
    { title: "음료" },
  ];

  return (
    <>
      <Layout>
        <div className="MenuTitle">
          <img src="../../images/header/logo.svg" />
          <p>메뉴보기</p>
        </div>
        <div className="MenuButtonWrap">
          <button>전체</button>
          <button>세트</button>
          <button>치킨</button>
          <button>사이드</button>
          <button>소스</button>
          <button>음료</button>
        </div>
        <div className="menu-container">
          <div className="menu-image">
            <img src="../../images/main/chicken.svg" alt="원조 후라이드" />
          </div>
          {menuInfo && (
            <div className="menu-details">
              <h1>{menuInfo.menu.menuName}</h1>
              <p className="menu-price">
                {numberWithCommas(menuInfo.menu.price)} 원
              </p>
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
          )}
        </div>
        <div className="lineContainer">
          <div className="line"></div>
        </div>
        <div className="container">
          {menuInfo && (
            <div className="infoContainer">
              <div className="origin-info">
                <h2>원산지</h2>
                <p>닭고기 : {menuInfo.origin}</p>
              </div>
              <div className="allergy-info">
                <h2>알레르기 정보</h2>
                <p>{menuInfo.allergy}</p>
              </div>
            </div>
          )}
          <div className="nutrition-table">
            <div className="nutrient-info">
              <h2>영양성분 정보</h2>
              <table>
                <thead>
                  <tr>
                    <th>1회 제공량</th>
                    <th>100g</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>열량(Kcal)</td>
                    <td>250.54</td>
                  </tr>
                  <tr>
                    <td>나트륨(mg)</td>
                    <td>273</td>
                  </tr>
                  <tr>
                    <td>당류(g)</td>
                    <td>7.6</td>
                  </tr>
                  <tr>
                    <td>지방(g)</td>
                    <td>11.7</td>
                  </tr>
                  <tr>
                    <td>단백질(g)</td>
                    <td>23.71</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DetailPage;
