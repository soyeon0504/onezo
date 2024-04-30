import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreBt, MoreBtWrap } from "../../styles/main/MainPageStyle";

const MoreButton = ({ categoryId, subCategoryId, pageNum, title }) => {
  const navigate = useNavigate();
  console.log(title);

  const handleClickMenu = () => {
    navigate(`/menu?category=${categoryId}&page=${pageNum}`, {
      state: { title },
    });
  };

  return (
    <MoreBtWrap>
      <MoreBt onClick={handleClickMenu}>
        더보기
      </MoreBt>
    </MoreBtWrap>
  );
};

export default MoreButton;
