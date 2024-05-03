import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { PaymentBtSection, TossCheckoutHeader } from "../../styles/pay/CheckoutStyle";

const selector = "#payment-widget"; //DOM 요소 선택지

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm"; // 클라이언트 키
const customerKey = nanoid(); // 고객 키

const CheckoutPage = () => {
  // URL에서 매개변수 추출
  const [address, setAddress] = useState("");
  const [menu, setMenu] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const addressParam = searchParams.get("add");
    const menuParam = searchParams.get("menu");
    const priceParam = searchParams.get("price");
    setAddress(addressParam);
    setMenu(menuParam);
    setPrice(priceParam);
  }, [location]);

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
          <h1>가게주소</h1>
          <h2>{address}</h2>
        </div>

        <div className="orderInfo">
          <h1>결제금액</h1>
          <div className="orderPrice">
            <h2>{menu} 외 count개</h2>
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
                  orderName: "토스 티셔츠 외 2건",
                  customerName: "김토스",
                  customerEmail: "customer123@gmail.com",
                  customerMobilePhone: "01012341234",
                  successUrl: `${window.location.origin}/success`,
                  failUrl: `${window.location.origin}/fail`,
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
