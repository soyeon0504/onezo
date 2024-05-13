import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import "../../styles/menu/MenuDetail.css";
import axios from "axios";
import MenuDivider from "antd/es/menu/MenuDivider";
import { useNavigate, useParams } from "react-router-dom";
import { postCartItem } from "../../api/cart/cart_api";
import Modal_Bt1 from "../../components/modal/Modal_Bt1";
import { ModalBackground } from "../../styles/review/ReveiwStyle";

const DetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [menuInfo, setMenuInfo] = useState();
  // const [loading, setLoding] = useState(true);
  // const [error, setError] = useState(null);
  const [memuId, setMenuId] = useState(null);

  useEffect(() => {
    const fetchMenuInfo = async () => {
      const res = await axios.get(`/menus/${id}`);
      setMenuInfo(res.data);
      setMenuId(res.data.id);
    };
    fetchMenuInfo();
  }, [id]);

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleQuantityChange = change => {
    const newQuantity = quantity + change;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  // 데이터 연동(장바구니 담기)
  const [postCartData, setPostCartData] = useState(null);
  const handleClickCart = async () => {
    setPostCartData({
      menuId: memuId,
      quentity: quantity,
    });
  };

  useEffect(() => {
    const postCart = async () => {
      if (postCartData) {
        await postCartItem({ data: postCartData, successFn, errFn });
      }
    };
    postCart();
  }, [postCartData]);

  const [successModal, setSuccessModal] = useState(false);
  const [errModal, setErrModal] = useState(false);
  const successFn = () => {
    setSuccessModal(true);
  };
  const errFn = () => {
    setErrModal(true);
  };
  const successOkBt = () => {
    setSuccessModal(false);
    navigate(`/cart`);
  };
  const errOkBt = () => {
    setErrModal(false);
  };
  const [zeroModal, setZeroModal] = useState(false);
  const handleClickZero = () => {
    setZeroModal(true)
  }
  const zeroOkBt = () => {
    setZeroModal(false)
  }

  return (
    <>
      {successModal && (
        <>
          <Modal_Bt1
            txt="선택하신 메뉴가 장바구니에 담겼습니다."
            onConfirm={successOkBt}
          ></Modal_Bt1>
          <ModalBackground></ModalBackground>
        </>
      )}
      {errModal && (
        <>
          <Modal_Bt1
            txt="서버에러로 장바구니 담기에 실패하였습니다."
            onConfirm={errOkBt}
          ></Modal_Bt1>
          <ModalBackground></ModalBackground>
        </>
      )}
      {zeroModal && (
        <>
          <Modal_Bt1
            txt="수량을 다시 확인해주세요."
            onConfirm={zeroOkBt}
          ></Modal_Bt1>
          <ModalBackground></ModalBackground>
        </>
      )}
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
            {quantity == 0 ? (
              <button className="order-button" onClick={handleClickZero}>
              장바구니 담기
            </button>
            ) : (
              <button className="order-button" onClick={handleClickCart}>
                장바구니 담기
              </button>
            )}
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
