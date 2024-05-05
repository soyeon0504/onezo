import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  CartCount,
  CartHeader,
  CartItem,
  CartMain,
  CartMenu,
  CartMoreBt,
  CartStyle,
  CartTotalPrice,
} from "../../styles/cart/CartStyle";
import Layout from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";
import { ShopModal } from "../../components/shop/ShopModal";
import { ModalBackground } from "../../styles/review/ReveiwStyle";
import { deleteCartItem, getCartItem } from "../../api/cart/cart_api";

// 더미데이터
const storeData = {
  store: "대구동성로점",
  address: "대구 중구 동성로5길 89",
};
const cartData = [
  {
    id: 1,
    menu: "원조간장통닭",
    count: 1,
    price: 21000,
    pic: `/images/my/chicken1.jpg`,
    totalPrice: 53500,
  },
  {
    id: 2,
    menu: "자메이카 통다리구이",
    count: 1,
    price: 21500,
    pic: `/images/my/chicken2.jpg`,
    totalPrice: 53500,
  },
  {
    id: 3,
    menu: "모둠감자튀김",
    count: 1,
    price: 11000,
    pic: `/images/my/chicken2.jpg`,
    totalPrice: 53500,
  },
];

const CartPage = () => {
  // 데이터 연동(장바구니 조회)
  const memberId = 1; // 로그인되면 userPk로 바꾸기
  const [cartListData, setCartListData] = useState(null);

  const cartGetData = async () => {
    await getCartItem({ memberId, setCartListData });
    
    useEffect(() => {
      cartGetData();
    }, []);
  };

  console.log(cartListData);

  // 데이터 연동(장바구니 삭제)
  const handleDeleteCartItem = async cartItemId => {
    const confirmDelete = window.confirm("삭제하시겠습니까?");
    if (confirmDelete) {
      await deleteCartItem(cartItemId);
      window.location.reload();
    }
  };

  // 경로 이동
  const navigate = useNavigate();
  const moveToMoreMenu = () => navigate(`/menu`);
  const moveToPatment = () =>
    navigate(
      `/payment/checkout?add=${storeData.address}&menu=${cartData[0].menu}&price=${cartData[0].totalPrice}`,
    );
  // 결제창 나오기
  const [payModal, setPayModal] = useState(false);
  const handlePayModal = () => setPayModal(true);
  const closePayModal = () => setPayModal(false);

  const [shopModal, setShopModal] = useState(false);
  const handleShopModal = () => setShopModal(true);
  const closeShopModal = () => setShopModal(false);

  return (
    <Layout>
      {shopModal && (
        <>
          <ShopModal onCloseModal={closeShopModal} />
          <ModalBackground></ModalBackground>
        </>
      )}
      <CartStyle>
        <CartHeader>
          <p>장바구니</p>
        </CartHeader>
        <CartMain>
          <CartItem>
            <img src="images/my/store.png" />
            <div style={{ width: "970px" }}>
              <p>{storeData.store}</p>
              <h3>{storeData.address}</h3>
            </div>
            <button className="store_change" onClick={handleShopModal}>
              변경
            </button>
          </CartItem>
          {cartListData?.map(item => {
            const [quantity, setQuantity] = useState(item.quantity);
            const handleIncrement = () => {
              setQuantity(quantity + 1);
            };
            const handleDecrement = () => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            };
            return (
              <CartItem key={item.cartItemId}>
                {/* <img src={item.pic} /> */}
                <div>
                  <CartMenu>
                    <span>{item.menuName}</span>
                    <button>삭제</button>
                  </CartMenu>
                  <CartCount>
                    <div>
                      <button onClick={handleDecrement}>-</button>
                      <h2>{quantity}</h2>
                      <button onClick={handleIncrement}>+</button>
                    </div>
                    <span>
                      {new Intl.NumberFormat().format(item.price * quantity)}원
                    </span>
                  </CartCount>
                </div>
              </CartItem>
            );
          })}
          <CartMoreBt onClick={moveToMoreMenu}>
            <img src="images/my/bt_plus.svg" />더 담으러 갈래요
          </CartMoreBt>
          <CartTotalPrice>
            <p>총 결제금액</p>
            <div>
              <span>
                {/* {new Intl.NumberFormat().format(cartData[0].totalPrice)}원 */}
              </span>
              <button onClick={moveToPatment}>주문하기</button>
            </div>
          </CartTotalPrice>
        </CartMain>
      </CartStyle>
    </Layout>
  );
};
export default CartPage;
