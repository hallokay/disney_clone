import React from 'react'
import { Container, Content, Wrap } from "../assets/constants/commonCss";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        <Wrap>
          <Link to={`/`}>
            <img src="" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Trending