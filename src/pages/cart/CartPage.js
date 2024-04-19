import React, { useState } from "react";
import styled from "@emotion/styled";
import { CartCount, CartHeader, CartItem, CartMain, CartMenu, CartMoreBt, CartStyle, CartTotalPrice } from "../../styles/cart/CartStyle";

const cartData = [
  {
    id: 1,
    menu: "핫황금올리브치킨™크리스피",
    count: 1,
    price: 21000,
    pic: `/images/my/chicken1.jpg`,
  },
  {
    id: 2,
    menu: "자메이카 통다리구이",
    count: 1,
    price: 21500,
    pic: `/images/my/chicken2.jpg`,
  },
  {
    id: 3,
    menu: "모둠감자튀김",
    count: 1,
    price: 11000,
    pic: `/images/my/chicken2.jpg`,
  },
];


const CartPage = () => {
  
  return (
    <CartStyle>
      <CartHeader>
        <p>장바구니</p>
      </CartHeader>
      <CartMain>
        {cartData.map(item => {
          const [count, setCount] = useState(item.count);
          const handleIncrement = () => {
            setCount(count + 1);
          };
          const handleDecrement = () => {
            if (count > 1) {
              setCount(count - 1);
            }
          };


          return (
            <CartItem key={item.id}>
              <img src={item.pic} />
              <div>
                <CartMenu>
                  <span>{item.menu}</span>
                  <button>삭제</button>
                </CartMenu>
                <CartCount>
                  <div>
                    <button onClick={handleDecrement}>-</button>
                    <h2>{count}</h2>
                    <button onClick={handleIncrement}>+</button>
                  </div>
                  <span>{new Intl.NumberFormat().format(item.price * count)}원</span>
                </CartCount>
              </div>
            </CartItem>
          );
        })}
        <CartMoreBt>
        <img src="images/my/bt_plus.svg" />
        더 담으러 갈래요
      </CartMoreBt>
      <CartTotalPrice>
        <p>총 결제금액</p>
        <div>
          <span>원</span>
          <button>주문하기</button>
        </div>
      </CartTotalPrice>
      </CartMain>
    </CartStyle>
  );
};

export default CartPage;
