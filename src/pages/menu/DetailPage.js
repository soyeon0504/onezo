import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import "../../styles/menu/MenuDetail.css";

const DetailPage = () => {
  const [order, setOrder] = useState([]);
  const [quantities, setQuantities] = useState({});

  const menuItems = [
    {
      id: 1,
      name: "원조 양념치킨",
      price: "18,000",
      image: "../../images/main/chicken.svg",
    },
  ];

  const addToOrder = menuItem => {
    const newOrder = [...order];
    if (menuItem.id in quantities) {
      quantities[menuItem.id]++;
    } else {
      quantities[menuItem.id] = 1;
    }
    setOrder(newOrder);
    setQuantities({ ...quantities });
  };

  const decreaseQuantity = itemId => {
    const newQuantities = { ...quantities };
    newQuantities[itemId] = Math.max(0, newQuantities[itemId] - 1);
    setQuantities(newQuantities);
  };

  const increaseQuantity = itemId => {
    const newQuantities = { ...quantities };
    newQuantities[itemId] = (newQuantities[itemId] || 0) + 1;
    setQuantities(newQuantities);
  };

  return (
    <>
      <Layout>
        <div className="MenuTitle">
          <img src="../../images/header/logo.svg" />
          <p>메뉴보기</p>
        </div>
        <div className="MenuButtonWrap">
          <button>메뉴</button>
          <button>세트</button>
          <button>치킨</button>
          <button>사이드</button>
          <button>음료</button>
          <button>소스</button>
        </div>
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <div className="menuItem">
                <div className="menuItem_image_border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menuItem_image"
                  />
                </div>

                <div className="menuItem_info">
                  <p className="menuItem_name">{item.name}</p>
                  <p className="menuItem_price">{item.price}원</p>
                  <p className="menuItem_note">
                    * 본 이미지는 실제와 다를 수 있으며 가맹점 상황에 따라
                    가격이 상이 할 수 있습니다.
                  </p>
                  <div className="menuItem_controls">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="menuItem_controlButton"
                    >
                      -
                    </button>
                    <span className="menuItem_quantity">
                      {quantities[item.id] || 0}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="menuItem_controlButton"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => addToOrder(item)}
                    className="menuItem_orderButton"
                  >
                    주문하기
                  </button>
                </div>
              </div>
              <div className="dashedLine"></div>
            </li>
          ))}
        </ul>
        <div className="foodOrigin">
          <h1>원산지</h1>
          <tr>닭고기: 국내산</tr>
        </div>
        <div>영양정보</div>
        <div className="borderBox">
          <div className="nutritionInfo"></div>
        </div>
      </Layout>
    </>
  );
};

export default DetailPage;