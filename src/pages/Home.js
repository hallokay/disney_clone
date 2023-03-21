import React from 'react';
import styled from 'styled-components';
import { ImgSlider, Recommends, Viewers } from '../components/index'
const Home = () => {
  return (
  <Container>
    <ImgSlider />
    <Viewers />
    <Recommends />
  </Container>
  );
}

const Container = styled.main `
    position: relative;
    top: 72px;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    padding: 0 calc(3.5vw + 5px);

    &::after {
        position: absolute;
        content: '';
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
`




export default Home