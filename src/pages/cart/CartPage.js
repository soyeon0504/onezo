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
import {
  deleteCartItem,
  getCartItem,
  getStore,
  putCartItem,
} from "../../api/cart/cart_api";
import { useSelector } from "react-redux";

// 더미데이터
const storeSampleData = {
  store: "대구동성로점",
  address: "대구 중구 동성로5길 89",
};
const cartSampleData = [
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
  // 유저 memberId 값
  const memberId = useSelector(state => state.loginSlice.memberId);

  // 데이터 연동(매장)
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    const storeGetData = async () => {
      try {
        const res = await getStore(memberId);
        setStoreData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    storeGetData();
  }, [memberId]);

  // 데이터 연동(장바구니 조회)
  const [cartListData, setCartListData] = useState(null);

  useEffect(() => {
    const cartGetData = async () => {
      try {
        const res = await getCartItem(memberId);
        setCartListData(res.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    cartGetData();
  }, [memberId]);

  // 총 갯수
  const totalQuantity = Array.isArray(cartListData)
    ? cartListData.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0)
    : 0;
  // 총 가격
  const totalPrice = Array.isArray(cartListData)
    ? cartListData.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity * currentItem.price;
      }, 0)
    : 0;

  // 데이터 연동(장바구니 삭제)
  const handleDeleteCartItem = async cartDetailId => {
    const confirmDelete = window.confirm("삭제하시겠습니까?");
    if (confirmDelete) {
      await deleteCartItem(cartDetailId);
      window.location.reload();
    }
  };

  // 경로 이동
  const navigate = useNavigate();
  const moveToMoreMenu = () => navigate(`/menu`);
  const moveToPatment = () =>
    navigate(
      `/payment/checkout?menu=${cartListData[0].menuName}&price=${totalPrice}`,
    );

  // 매장선택창 나오기
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
              {storeData && storeData.length > 0 && (
                <>
                  <p>{storeData[0].storeName}</p>
                  <h3>{storeData[0].address}</h3>
                </>
              )}
            </div>
            <button className="store_change" onClick={handleShopModal}>
              변경
            </button>
          </CartItem>
          {cartListData?.map(item => {
            // const [quantity, setQuantity] = useState(item.quantity);
            // const [cartId, setCartId] = useState(null);
            // const handleIncrement = cartItemId => {
            //   setQuantity(quantity + 1);
            //   setCartId(cartItemId);
            // };
            // const handleDecrement = cartItemId => {
            //   if (quantity > 1) {
            //     setQuantity(quantity - 1);
            //   }
            //   setCartId(cartItemId);
            // };
            // // 데이터 연동 (장바구니 수량 변경)
            // const cartPutData = async () => {
            //   await putCartItem({ cartId, quantity });

            //   useEffect(() => {
            //     cartPutData();
            //   }, [quantity]);
            // };
            return (
              <CartItem key={item.cartDetailId}>
                <img src={item.menuImage} />
                <div>
                  <CartMenu>
                    <span>{item.menuName}</span>
                    <button
                      onClick={() => {
                        handleDeleteCartItem(item.cartDetailId);
                      }}
                    >
                      삭제
                    </button>
                  </CartMenu>
                  <CartCount>
                    {/* <div>
                      <button onClick={() => handleDecrement(item.cartItemId)}>
                        -
                      </button>
                      <h2>{item.quantity}</h2>
                      <button onClick={() => handleIncrement(item.cartItemId)}>
                        +
                      </button>
                    </div> */}
                    <span>수량 : {item.quantity}</span>
                    <span>
                      {new Intl.NumberFormat().format(
                        item.price * item.quantity,
                      )}
                      원
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
            <p>총 결제금액 (총 수량)</p>
            <div>
              <span>
                {new Intl.NumberFormat().format(totalPrice)}원 ({totalQuantity}
                개)
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
