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
} from "../../styles/main/mainStyle";
import Layout from "../../layouts/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import { useNavigate } from "react-router-dom";

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

const MainPage = () => {
  const swiperRef = useRef();
  const navigate = useNavigate(`/menu/detail`);
  // 현재 선택된 버튼을 나타내는 상태
  // const [selectedButton, setSelectedButton] = useState('전체');

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
    const url = `/menu/detail`;
    navigate(url);
  };
  
  const handleClickMenu = () => {
    const url = `/menu`;
    navigate(url);
  }

  // 버튼 스타일 컴포넌트
  const StyledButton = styled.button`
    color: #572a01;
    font-weight: 500;
  `;

  return (
    <>
      <Layout />
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
            <button className="slide-prev c-slide-prev"></button>
            <button className="slide-next c-slide-next"></button>
          </Banner>
          <MenuWrap>
            <MenuTop>
              <MenuTitle>
                <img src="../../images/header/logo.svg" />
                <p>메뉴보기</p>
              </MenuTitle>
              <MenuButtonWrap>
                <button onClick={() => handleCategoryClick("전체")}>전체</button>
                <button onClick={() => handleCategoryClick("세트")}>세트</button>
                <button onClick={() => handleCategoryClick("치킨")}>치킨</button>
                <button onClick={() => handleCategoryClick("사이드")}>사이드</button>
                <button onClick={() => handleCategoryClick("소스")}>소스</button>
                <button onClick={() => handleCategoryClick("음료")}>음료</button>
              </MenuButtonWrap>
            </MenuTop>
            <MenuMainWrap>
              {menuData.map((item, index) => (
                <MenuMain key={index}>
                  <MenuImage>
                    <img src={item.image} alt="메뉴 이미지" />
                  </MenuImage>
                  <MenuDesc>
                    <div className="menu-desc">
                      <div className="menu-title">{item.title}</div>
                      <div className="menu-price">{item.price}</div>
                    </div>
                    <div>
                      <button onClick={() => handlePageChange()}
                       className="menu-detail">
                        상세보기
                      </button>
                    </div>
                  </MenuDesc>
                </MenuMain>
              ))}
            </MenuMainWrap>
            <MenuMoreButton>
              <StyledButton 
              className="menu-more-button"
              onClick={handleClickMenu}
              >더보기</StyledButton>
            </MenuMoreButton>
          </MenuWrap>
        </MainWrapInner>
      </MainWrap>
    </>
  );
};

export default MainPage;
