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

const MainPage = () => {
  const navigate = useNavigate(`/`);
  const [pageNum, setPageNum] = useState(1);
  const pageSize = 9;
  // const [totalPage, setTotalPage] = useState(null);
  const [totalPage, setTotalPage] = useState(Math.ceil(menuData.length / pageSize));
  const slicedMenuData = menuData.slice(
    (pageNum - 1) * pageSize,
    pageNum * pageSize
  );
  
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
                  <button>전체</button>
                  <button>세트</button>
                  <button>치킨</button>
                  <button>사이드</button>
                  <button>소스</button>
                  <button>음료</button>
                </MenuButtonWrap>
              </MenuTop>
              {/* 메뉴.map */}
              <MenuMainWrap>
                {slicedMenuData.map((item, index) => (
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
