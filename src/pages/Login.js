import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  background: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

export default Login;
