import React from 'react'
import Layout from '../../layouts/Layout';
import { Outlet } from 'react-router-dom';
import styled from "@emotion/styled";

const PaymentPage = () => {
  const PaymentStyle = styled.div`
  width: 1300px;
  margin: 50px auto 100px;
  `
  return (
    <Layout>
      <PaymentStyle>
        <Outlet />
      </PaymentStyle>
    </Layout>
  );
};

export default PaymentPage