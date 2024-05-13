import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import {
  PaymentBtSection,
  TossCheckoutHeader,
} from "../../styles/pay/CheckoutStyle";
import { useSelector } from "react-redux";
import { getCartItem, getStore } from "../../api/cart/cart_api";

const selector = "#payment-widget"; //DOM 요소 선택지

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm"; // 클라이언트 키
const customerKey = nanoid(); // 고객 키

const CheckoutPage = () => {
  // URL에서 매개변수 추출
  const [menu, setMenu] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const menuParam = searchParams.get("menu");
    const priceParam = searchParams.get("price");
    setMenu(menuParam);
    setPrice(priceParam);
  }, [location]);

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

  const [paymentWidget, setPaymentWidget] = useState(null); // 결제 위젯 인스턴스를 담을 상태
  const paymentMethodsWidgetRef = useRef(null); // 결제 방법 위젯의 참조를 저장하는 useRef 훅
  //   const [price, setPrice] = useState(500); // 결제할 상품의 가격
  const [paymentMethodsWidgetReady, isPaymentMethodsWidgetReady] =
    useState(false); // 결제 방법 위젯이 준비된 상태를 나타내는 상태값

  // 결제 위젯을 초기화하는 useEffect 훅입니다.
  // 컴포넌트가 마운트될 때 한 번만 실행됩니다.
  // loadPaymentWidget 함수를 사용하여 결제 위젯을 로드하고, 상태에 저장합니다.
  useEffect(() => {
    async function initializePaymentWidget() {
      try {
        const widget = await loadPaymentWidget(clientKey, customerKey);
        setPaymentWidget(widget);
      } catch (error) {
        console.error("Error loading payment widget:", error);
      }
    }
    initializePaymentWidget();
  }, []);

  // 결제 위젯이 로드되고, 상품의 가격이 변경될 때마다 실행되는 useEffect 훅입니다.
  // 결제 방법 위젯을 렌더링하고, 준비되면 isPaymentMethodsWidgetReady를 true로 설정합니다.
  useEffect(() => {
    if (!paymentWidget) return;

    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      selector,
      { value: price },
      { variantKey: "DEFAULT" },
    );

    paymentMethodsWidget.on("ready", () => {
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
      isPaymentMethodsWidgetReady(true);
    });
  }, [paymentWidget, price]);

  // 가격이 변경될 때마다 실행되는 useEffect 훅입니다.
  // 결제 방법 위젯의 가격을 업데이트합니다.
  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (!paymentMethodsWidget) return;

    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  return (
    <div className="wrapper">
      <TossCheckoutHeader>
        <p>주문 정보</p>
        <div className="orderInfo">
          {storeData && storeData.length > 0 && (
            <>
              <h1>지점명(가게주소)</h1>
              <h2>
                {storeData[0].storeName} ({storeData[0].address})
              </h2>
            </>
          )}
        </div>

        <div className="orderInfo">
          <h1>결제금액</h1>
          <div className="orderPrice">
            <h2>
              {menu} 외 {totalQuantity - 1}개
            </h2>
            <p>총 {new Intl.NumberFormat().format(`${price}`)}원</p>
          </div>
        </div>
      </TossCheckoutHeader>
      <div className="box_section">
        <div id="payment-widget" />
        <div style={{ paddingLeft: "24px" }}>
          {/* <div className="checkable typography--p">
            <label htmlFor="coupon-box" className="checkable__label typography--regular">
              <input
                id="coupon-box"
                className="checkable__input"
                type="checkbox"
                aria-checked="true"
                disabled={!paymentMethodsWidgetReady}
                onChange={(event) => {
                  setPrice(event.target.checked ? price - 5_000 : price + 5_000);
                }}
              />
              <span className="checkable__label-text">5,000원 쿠폰 적용</span>
            </label>
          </div> */}
        </div>

        <PaymentBtSection>
          <button
            className="button"
            style={{ marginTop: "30px" }}
            disabled={!paymentMethodsWidgetReady}
            onClick={async () => {
              try {
                await paymentWidget.requestPayment({
                  orderId: nanoid(),
                  orderName: "원조통닭",
                  customerName: "원조통닭 이용자님",
                  // customerEmail: "customer123@gmail.com",
                  // customerMobilePhone: "01012341234",
                  successUrl: `${window.location.origin}/payment/success`,
                  failUrl: `${window.location.origin}/payment/fail`,
                });
              } catch (error) {
                console.error("Payment request error:", error);
              }
            }}
          >
            결제하기
          </button>
        </PaymentBtSection>
      </div>
    </div>
  );
};

export default CheckoutPage;
