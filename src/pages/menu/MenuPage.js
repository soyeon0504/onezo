// 프론트 박소연 담당
import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import {
  MainWrap,
  MainWrapInner,
  MenuButtonWrap,
  MenuDesc,
  MenuImage,
  MenuMain,
  MenuMainWrap,
  MenuTitle,
  MenuTop,
  MenuWrap,
} from "../../styles/menu/MenuStyle";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import { PaginationOrange } from "../../styles/Pagination";
import { getProduct } from "../../api/main/main_api";

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

const MainPage = (id, data) => {
  const navigate = useNavigate(`/`);
  const [pageNum, setPageNum] = useState(1);
  const pageSize = 9;
  // const [totalPage, setTotalPage] = useState(null);
  const [totalPage, setTotalPage] = useState(Math.ceil(menuData.length / pageSize));
  const slicedMenuData = menuData.slice(
    (pageNum - 1) * pageSize,
    pageNum * pageSize
  );

  // 전달 받은 목록데이터
  const [productData, setProductData] = useState(data);

  // 버튼 클릭 이벤트 처리 함수
  const handleCategoryClick = async item => {
    try {
      const res = await getProduct(item.title);
      setProductData(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageChange = () => {
    const url = `/menu/detail`;
    navigate(url);
  };

  const handlePaginationChange = _tempPage => {
    setPageNum(_tempPage);
    setTotalPage(Math.ceil(menuData.length / pageSize));
  };

  return (
    <>
      <Layout>
        <MainWrap>
          <MainWrapInner>
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
                        className={focus === index ? "focus" : ""}
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
              {/* 메뉴.map */}
              <MenuMainWrap>
                {productData && 
                  productData.map((item, index) => (
                  <MenuMain key={index} btList={btList[index]}>
                    <MenuImage>
                      <img src={item.menuImage} alt="메뉴 이미지" />
                    </MenuImage>
                    <MenuDesc>
                      <div className="menu-desc">
                        <div className="menu-title">{item.menuName}</div>
                        <div className="menu-price">{item.price.toLocaleString()}원</div>
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
            </MenuWrap>
            <div className="pagination-wrap">
              <PaginationOrange 
              current={pageNum}
              onChange={handlePaginationChange}
              total={totalPage}
              // pageSize={9}
              />
            </div>
          </MainWrapInner>
        </MainWrap>
      </Layout>
    </>
  );
};

export default MainPage;
