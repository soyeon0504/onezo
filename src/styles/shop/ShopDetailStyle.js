import styled from "@emotion/styled";

export const ShopDetailStyle = styled.div`
  width: 1300px;
  margin: 0 auto;
  padding: 50px 30px 100px;
`;
export const ShopDetailHeader = styled.div`
  display: flex;
  div:nth-of-type(1) {
    width: 850px;
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
    color: #555;
    margin-bottom: 15px;
  }
  div:nth-of-type(2) {
    width: 400px;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }
  button {
    display: block;
    width: 170px;
    height: 170px;
    border-radius: 10px;
    border: 1.5px solid #572a01;
    background: #fff;

    color: #572a01;
    font-size: 25px;
    font-weight: 600;
  }
  img {
    width: 70px;
    height: 70px;
  }
`;
export const ShopReviewZone = styled.div`
  width: 1240px;
  border-radius: 10px;
  border: 1px solid #572a01;
  padding: 20px;
  h1 {
    color: #4b4b4b;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const ReviewItem = styled.div`
border-bottom: 1px solid rgba(87, 42, 1, 0.50);
margin-top: 15px;
div{
    display: flex;
    justify-content: space-between;
}
  h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  p{
    color: #777;
    font-size: 12px;
  }
  h3{
    color: #777;
    font-size: 12px;
    margin-bottom: 10px;
  }
`;
