import styled from "@emotion/styled";
import React from "react";

const MyCateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 150px;
  margin-top: 30px;
`

const MyCateLi = styled.li`
  display: block;
  p {
    color: ${props => (props.selected ? "#572A01" : "#000")};
    font-weight: ${props => (props.selected ? "700" : "400")};
    font-size: 18px;
    cursor: pointer;
    list-style: none;
  }
`;

const MyCategory = ({ selectedItem, myCate, onSubItemClick }) => {
    return (
    <MyCateDiv>
      {myCate[0].list.map(subItem => (
        <MyCateLi
          key={subItem}
          selected={selectedItem === subItem}
          onClick={() => {
            onSubItemClick(subItem);
          }}
        >
          <p>{subItem}</p>
        </MyCateLi>
      ))}
    </MyCateDiv>
  );
};

export default MyCategory;
