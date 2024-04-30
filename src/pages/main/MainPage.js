import React from "react";
import styled from "styled-components";
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
import { useNavigate } from "react-router-dom";
import ShopModal from "../../components/shop/ShopModal"
// Import Swiper styles
import "swiper/css";
import { getProduct } from "../../api/main/main_api";
import MoreButton from "../../components/main/MoreButton";
import useCustomLogin from "../../hooks/useCustomLogin";

const btList = [
  { id: 1, title: "전체" },
  { id: 2, title: "세트" },
  { id: 3, title: "치킨" },
  { id: 4, title: "사이드" },
  { id: 5, title: "소스" },
  { id: 6, title: "음료" },
];

const menuData = [
  {
    image: "../../images/main/chicken.svg",
    title: "원조 후라이드",
    price: "18,000원",
  },
  {
    image: "../../images/main/chicken.svg",
    title: "원조 후라이드",
    price: "18,000원",
  },
  {
    image: "../../images/main/chicken.svg",
    title: "원조 후라이드",
    price: "18,000원",
  },
  {
    image: "../../images/main/chicken.svg",
    title: "원조 후라이드",
    price: "18,000원",
  },
  {
    image: "../../images/main/chicken.svg",
    title: "원조 후라이드",
    price: "18,000원",
  },
  {
    image: "../../images/main/chicken.svg",
    title: "원조 후라이드",
    price: "18,000원",
  },
];

const MainPage = ({ category, id }) => {
  const navigate = useNavigate();
  const swiperRef = useRef();
  const { isLogin } = useCustomLogin();


  // 전달 받은 목록데이터
  const [productData, setProductData] = useState();

  // 버튼 클릭 이벤트 처리 함수
  const handleCategoryClick = async () => {
    try {
      const res = await getProduct();
      // setSelectedButton(buttonName);
      setProductData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = () => {
    const url = `/menu/detail?cate=${id}`;
    navigate(url);
  };
  
  return (
    <>
      <Layout>
      {isLogin === true && <ShopModal />}
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
                        className={"bt-cate"}
                        onClick={() => {
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
                {menuData.map((item, index) => (
                  <MenuMain key={index} btList={btList[index]}>
                    <MenuImage>
                      <img src={item.image} alt="메뉴 이미지" />
                    </MenuImage>
                    <MenuDesc>
                      <div className="menu-desc">
                        <div className="menu-title">{item.title}</div>
                        <div className="menu-price">{item.price}</div>
                      </div>
                      <div>
                        <button
                          onClick={() => handlePageChange()}
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
                categoryId={id}
                pageNum={1}
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
