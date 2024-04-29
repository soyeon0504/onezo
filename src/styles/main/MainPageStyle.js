import styled from "@emotion/styled";

export const MainWrap = styled.div`
  width: 100vw;
  height: auto;
  background-color: #fff7e1;
  margin: 0 auto;
`;

export const MainWrapInner = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  padding-top: 70px;
`;

export const BannerSlide = styled.div`
  width: 1300px;
  height: auto;
  position: relative;
  justify-content: center;
`;

export const MenuWrap = styled.div``;

export const MenuTop = styled.div``;

export const MenuTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 360px;
  margin: 0 auto;
  margin-top: 100px;
  p {
    font-size: 25px;
    font-weight: 700;
    margin-top: 37px;
  }
`;

export const MenuButtonWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  font-size: 23px;
  width: 665px;
  button {
    width: 100px;
    height: 47px;
    border: 1px solid #572a01;
    border-radius: 30px;
    background-color: #fff;
    color: #572a01;
    text-align: center;
    cursor: pointer;
  }

  button:hover {
    background-color: #ffd15a;
    border: 1px solid #ffd15a;
    color: #fff;
  }
`;

export const MenuMainWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 100px;
`;

export const MenuMain = styled.div`
  padding-top: 110px;
  max-width: 1300px;
  margin: 0 auto;
  width: 370px;
  height: 400px;
  display: block;
`;

export const MenuImage = styled.div`
  width: 370px;
  height: 300px;
  img {
    width: 370px;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
    border: 1.5px solid #ab9480;
    border-radius: 15px;
    box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.2);
  }
`;

export const MenuDesc = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 5px 5px 0;
  width: 370px;
  .menu-desc {
    .menu-title {
      font-size: 22px;
      font-weight: 700;
      color: #572a01;
    }

    .menu-price {
      font-size: 22px;
      color: #555;
      font-weight: 500;
      margin-top: 30px;
    }
  }

  .menu-detail {
    color: #fff;
    cursor: pointer;
    width: 95px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    background-color: #ffd15a;
    font-weight: 500;
  }
`;

export const MenuMoreButton = styled.div`
  padding: 200px 100px;
  display: flex;
  justify-content: center;
  color: #572a01;
  font-weight: 500;
  text-align: center;
  align-items: center;
`;

export const MoreBtWrap = styled.div`
`

export const MoreBt = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 150px;
    height: 65px;
    border: 1px solid #572a01;
    border-radius: 32.5px;
    background-color: #fff;
    text-align: center;
    font-size: 25px;
    padding-top: 15px;
    &:hover {
      color: #fff;
      font-weight: 500;
      background-color: #ffd15a;
      border: 1px solid #ffd15a;
      cursor: pointer;
    }
`
