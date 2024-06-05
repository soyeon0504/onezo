import React from "react";
import {
  Banner,
  BannerSlide,
  MainWrap,
  MainWrapInner,
  MenuButtonWrap,
  MenuDesc,
  MenuImage,
  MenuMain,
  MenuMainWrap,
  MenuMoreButton,
  MenuTitle,
  MenuTop,
  MenuWrap,
} from "../../styles/main/MainPageStyle";
import Layout from "../../layouts/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopModal } from "../../components/shop/ShopModal";
// Import Swiper styles
import "swiper/css";
import { getProduct } from "../../api/main/main_api";
import MoreButton from "../../components/main/MoreButton";
import useCustomLogin from "../../hooks/useCustomLogin";
import { ModalBackground } from "../../styles/review/ReveiwStyle";
import { getStore } from "../../api/cart/cart_api";

const btList = [
  { id: 1, title: "전체", category: "ALL" },
  { id: 2, title: "세트", category: "SET" },
  { id: 3, title: "치킨", category: "CHICKEN" },
  { id: 4, title: "사이드", category: "SIDE" },
  { id: 5, title: "소스", category: "SAUCE" },
  { id: 6, title: "음료", category: "DRINK" },
];

const CATEGORIES = {
  all: {
    value: "ALL",
  },
  set: {
    value: "SET",
  },
  chicken: {
    value: "CHICKEN",
  },
  side: {
    value: "SIDE",
  },
  sauce: {
    value: "SAUCE",
  },
  drink: {
    value: "DRINK",
  },
};
const menuData = [
  {
    menuImage: "../../images/main/chicken.svg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "ALL",
  },
  {
    menuImage: "../../images/main/chicken.svg",
    menuName: "제로콜라",
    price: "18,000원",
    menuCategory: "DRINK",
  },
  {
    menuImage: "../../images/main/chicken.svg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "CHICKEN",
  },
  {
    menuImage: "../../images/main/chicken.svg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "CHICKEN",
  },
  {
    menuImage: "../../images/main/chicken.svg",
    menuName: "양념소스",
    price: "18,000원",
    menuCategory: "SAUCE",
  },
  {
    menuImage: "../../images/main/chicken.svg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "CHICKEN",
  },
  {
    menuImage: "../../images/main/chicken.svg",
    menuName: "양념소스",
    price: "18,000원",
    menuCategory: "SAUCE",
  },
  {
    menuImage: "../../images/main/chicken.svg",
    menuName: "감자튀김",
    price: "18,000원",
    menuCategory: "SIDE",
  },
  {
    menuImage: "../../images/main/chicken.svg",
    menuName: "감자튀김",
    price: "18,000원",
    menuCategory: "SIDE",
  },
];

const data = [
  {
    id: 0,
    store: {
      id: 0,
      storeName: "string",
      address: "string",
      addressOld: "string",
      storePhone: "string",
      storeHours: "string",
      orderType: "DINE_IN",
    },
    stock: "string",
    price: 0,
    menuCategory: "ALL",
    menuName: "string",
    menuImage: "string",
  },
];

const MainPage = ({ data }) => {
  const navigate = useNavigate();
  const swiperRef = useRef();
  const { isLogin } = useCustomLogin();
  const [focus, setFocus] = useState("ALL");
  const [shopModal, setShopModal] = useState(false);
  const closeShopModal = () => setShopModal(false);

  // 전달 받은 목록데이터
  const [productData, setProductData] = useState(data);

  // 버튼 클릭 이벤트 처리 함수
  const handleCategoryClick = async item => {
    if (item.menuCategory === CATEGORIES.value) {
      try {
        const res = await getProduct(item.title);
        setProductData(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleMoreClick = () => {
    navigate(`/menu/${focus}/${1}`);
  };

  const handlePageChange = id => {
    navigate(`/menus/${id}`);
    console.log(id);
  };

  // 데이터 연동(매장)
  const [storeData, setStoreData] = useState(null);
  useEffect(() => {
    const storeGetData = async () => {
      try {
        const res = await getStore();
        setStoreData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    storeGetData();
  }, []);

  useEffect(() => {
    if (isLogin && storeData == null) {
      setShopModal(true);
    }
    else if (isLogin && storeData !== null) {
      setShopModal(false);
    }
  }, [storeData]);

  useEffect(() => {
    // 페이지가 처음 로드될 때 첫 번째 버튼에 해당하는 카테고리 데이터를 가져옴
    handleCategoryClick(btList[0]);
  }, []);

  return (
    <>
      <Layout>
        {shopModal && (
          <>
            <ShopModal onCloseModal={closeShopModal} />
            <ModalBackground></ModalBackground>
          </>
        )}
        <MainWrap>
          <MainWrapInner>
            <Banner>
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                loop={true}
                onSwiper={swiper => {
                  swiperRef.current = swiper;
                }}
                navigation={{
                  nextEl: ".slide-next",
                  prevEl: ".slide-prev",
                }}
                className="banner-slide"
              >
                <BannerSlide>
                  <SwiperSlide>
                    <img
                      src="../../images/main/banner1.svg"
                      className="banner1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="../../images/main/banner2.svg"
                      className="banner2"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="../../images/main/banner3.svg"
                      className="banner3"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="../../images/main/banner4.svg"
                      className="banner4"
                    />
                  </SwiperSlide>
                </BannerSlide>
              </Swiper>
              {/* <button className="slide-prev c-slide-prev"></button>
            <button className="slide-next c-slide-next"></button> */}
            </Banner>
            <MenuWrap>
              <MenuTop>
                <MenuTitle>
                  <img src="../../images/header/logo.svg" />
                  <p>메뉴보기</p>
                </MenuTitle>
                <MenuButtonWrap>
                  {btList.map((item, index) => {
                    return (
                      <button
                        key={`menu-bt-${index}`}
                        className={focus === item.category ? "focus" : ""}
                        onClick={() => {
                          setFocus(item.category);
                          handleCategoryClick(item);
                        }}
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </MenuButtonWrap>
              </MenuTop>
              <MenuMainWrap>
                {productData &&
                  productData
                    .filter(
                      item => focus === "ALL" || item.menuCategory === focus,
                    )
                    .slice(0, 6)
                    .map((item, index) => (
                      <MenuMain key={index} btList={btList[index]}>
                        <MenuImage>
                          <img src={item.menuImage} alt="메뉴 이미지" />
                        </MenuImage>
                        <MenuDesc>
                          <div className="menu-desc">
                            <div className="menu-title">{item.menuName}</div>
                            <div className="menu-price">
                              {item.price.toLocaleString()}원
                            </div>
                          </div>
                          <div>
                            <button
                              onClick={() => handlePageChange(item.id)}
                              className="menu-detail"
                            >
                              상세보기
                            </button>
                          </div>
                        </MenuDesc>
                      </MenuMain>
                    ))}
              </MenuMainWrap>
              <MenuMoreButton>
                <MoreButton
                  menuCategory={focus}
                  pageNum={1}
                  onMoreClick={handleMoreClick}
                >
                  더보기
                </MoreButton>
              </MenuMoreButton>
            </MenuWrap>
          </MainWrapInner>
        </MainWrap>
      </Layout>
    </>
  );
};

export default MainPage;
