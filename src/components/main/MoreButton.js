import React, { useEffect, useState } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import { MoreBt, MoreBtWrap } from "../../styles/main/MainPageStyle";

const MoreButton = ({menuCategory, pageNum}) => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate(`/menu?cate=${menuCategory}&page=${pageNum}`);
  };
  return (
    <MoreBtWrap>
      <MoreBt yy
        onClick={handleMoreClick}
      >
        더보기
      </MoreBt>
    </MoreBtWrap>
  );
};

export default MoreButton;
