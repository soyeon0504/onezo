import React from "react";
import styled from "@emotion/styled";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <header>
        <Header />
      </header>
      <div style={{ position: 'absolute', top: '140px', left: '0', width: '100%', height: '100vh' }}>
      <ContentWrapper>{children}</ContentWrapper>
      <footer>
        <Footer />
      </footer>
      </div>
    </LayoutContainer>
  );
};

export default Layout;
