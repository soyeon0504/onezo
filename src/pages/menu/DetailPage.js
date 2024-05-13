import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import "../../styles/menu/MenuDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCookie } from "../../util/cookieUtil";

const DetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [menuInfo, setMenuInfo] = useState();

  useEffect(() => {
    const fetchMenuInfo = async () => {
      try {
        const res = await axios.get(`/menus/${id}`);
        setMenuInfo(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("메뉴 불러오는데 실패함: ", error);
      }
    };
    fetchMenuInfo();
  }, [id]);

  const authToken = getCookie("accessToken");

  const orderMenuInfo = async () => {
    try {
      const res = await axios.post(
        `/api/cart/add`,
        {
          menuId: id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
    } catch (error) {
      console.error("장바구니 담는데 실패함: ", error);
    }
  };

  useEffect(() => {}, [id, quantity]);

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
            {menuInfo && menuInfo.menuInfo.length > 0 ? (
              <img src={menuInfo.menuInfo[0].menu.menuImage} />
            ) : (
              ""
            )}
          </div>
          <div className="menu-details">
            {menuInfo && <h1>{menuInfo.menuName}</h1>}
            {menuInfo && (
              <p className="menu-price">
                {numberWithCommas(menuInfo.price)} 원
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
            <button className="order-button" onClick={orderMenuInfo}>
              장바구니 담기
            </button>
          </div>
        </div>
        <div className="lineContainer">
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="infoContainer">
            <div className="origin-info">
              <h2>원산지</h2>
              {menuInfo && menuInfo.menuInfo.length > 0 ? (
                <p>닭고기 : {menuInfo.menuInfo[0].origin}</p>
              ) : (
                ""
              )}
            </div>
            <div className="allergy-info">
              <h2>알레르기 정보</h2>
              {menuInfo && menuInfo.menuInfo.length > 0 ? (
                <p>{menuInfo.menuInfo[0].allergy}</p>
              ) : (
                ""
              )}
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
                    {menuInfo && menuInfo.nutrient.length > 0 ? (
                      <td>{menuInfo.nutrient[0].kcal}</td>
                    ) : (
                      ""
                    )}
                  </tr>
                  <tr>
                    <td>나트륨(mg) : </td>
                    {menuInfo && menuInfo.nutrient.length > 0 ? (
                      <td>{menuInfo.nutrient[0].na}</td>
                    ) : (
                      ""
                    )}
                  </tr>
                  <tr>
                    <td>당류(g) : </td>
                    {menuInfo && menuInfo.nutrient.length > 0 ? (
                      <td>{menuInfo.nutrient[0].sugar}</td>
                    ) : (
                      ""
                    )}
                  </tr>
                  <tr>
                    <td>지방(g) : </td>
                    {menuInfo && menuInfo.nutrient.length > 0 ? (
                      <td>{menuInfo.nutrient[0].fat}</td>
                    ) : (
                      ""
                    )}
                  </tr>
                  <tr>
                    <td>단백질(g) : </td>
                    {menuInfo && menuInfo.nutrient.length > 0 ? (
                      <td>{menuInfo.nutrient[0].protein}</td>
                    ) : (
                      ""
                    )}
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
