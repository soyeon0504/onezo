// 프론트 박소연 담당
import React, { useEffect, useState } from "react";
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
import { PaginationOrange } from "../../styles/Pagination";
import { getProduct } from "../../api/main/main_api";

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
  const [focus, setFocus] = useState("ALL");
  const pageSize = 9;
  // 전달 받은 목록데이터
  const [productData, setProductData] = useState([]);
  // const [totalPage, setTotalPage] = useState(null);
  const [totalPage, setTotalPage] = useState(
    Math.ceil(productData.length / pageSize),
  );
  const slicedMenuData = productData.slice(
    (pageNum - 1) * pageSize,
    pageNum * pageSize,
  );

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

  const handlePageChange = () => {
    const url = `/menu/detail`;
    navigate(url);
  };

  const handlePaginationChange = _tempPage => {
    setPageNum(_tempPage);
    setTotalPage(Math.ceil(productData.length / pageSize));
  };


  useEffect(() => {
    // 페이지가 처음 로드될 때 첫 번째 버튼에 해당하는 카테고리 데이터를 가져옴
    handleCategoryClick(btList[0]);
    setTotalPage(Math.ceil(productData.length / pageSize));
  }, [productData]);

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
              {/* 메뉴.map */}
              <MenuMainWrap>
                {slicedMenuData &&
                  slicedMenuData
                  .filter(item => focus === "ALL" || item.menuCategory === focus)
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
              />
            </div>
          </MainWrapInner>
        </MainWrap>
      </Layout>
    </>
  );
};

export default MainPage;
