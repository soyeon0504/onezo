import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import "../../styles/menu/MenuDetail.css";
import axios from "axios";
import MenuDivider from "antd/es/menu/MenuDivider";

const DetailPage = () => {
  const [quantity, setQuantity] = useState(0);

  const [menuInfo, setMenuInfo] = useState(null);
  // const [loading, setLoding] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuInfo = async () => {
      const response = await axios.get("/menus/13");
      setMenuInfo(response.data);
      console.log(response.data);
    };
    fetchMenuInfo();
  }, []);

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleQuantityChange = change => {
    const newQuantity = quantity + change;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <Layout>
        <div className="menu-container">
          <div className="menu-image">
            {menuInfo ? (
              <img src={menuInfo.menu.menuImage}/>
            ) : ""}
          </div>
          <div className="menu-details">
            {menuInfo && <h1>{menuInfo.menu.menuName}</h1>}
            {menuInfo && (
              <p className="menu-price">
                {numberWithCommas(menuInfo.menu.price)} 원
              </p>
            )}
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
        <div className="lineContainer">
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="infoContainer">
            <div className="origin-info">
              <h2>원산지</h2>
              {menuInfo && menuInfo.menuInfos.length > 0 ? <p>닭고기 : {menuInfo.menuInfos[0].origin}</p> : ""}
            </div>
            <div className="allergy-info">
              <h2>알레르기 정보</h2>
              {menuInfo && menuInfo.menuInfos.length > 0 ? <p>{menuInfo.menuInfos[0].allergy}</p> : ""}
            </div>
          </div>
          <div className="nutrition-table">
            <div className="nutrient-info">
              <h2>영양성분 정보</h2>
              <table>
                <thead>
                  <tr>
                    <th>1회 제공량 : </th>
                    <th>100g</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>열량(Kcal) : </td>
                    {menuInfo && menuInfo.nutrients.length > 0 ? <td>{menuInfo.nutrients[0].kcal}</td> : ""}
                  </tr>
                  <tr>
                    <td>나트륨(mg) : </td>
                    {menuInfo && menuInfo.nutrients.length > 0 ? <td>{menuInfo.nutrients[0].na}</td> : ""}
                  </tr>
                  <tr>
                    <td>당류(g) : </td>
                    {menuInfo && menuInfo.nutrients.length > 0 ? <td>{menuInfo.nutrients[0].sugar}</td> : ""}
                  </tr>
                  <tr>
                    <td>지방(g) : </td>
                    {menuInfo && menuInfo.nutrients.length > 0 ? <td>{menuInfo.nutrients[0].fat}</td> : ""}
                  </tr>
                  <tr>
                    <td>단백질(g) : </td>
                    {menuInfo && menuInfo.nutrients.length > 0 ? <td>{menuInfo.nutrients[0].protein}</td> : ""}
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
