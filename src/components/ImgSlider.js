import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { slideImgs } from '../assets/constants/constants'

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

  };
  return (
    <Carousel {...settings}>
      {slideImgs.map((slide, i) => (
        <Wrap key={i}>
          <a href="">
            <img src={slide.url} alt={slide.name} />
          </a>
        </Wrap>
      ))}
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
  }

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slik-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    position: relative;
    display: block;
    padding: 4px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249 .8);
      transition: all .3s ease-in-out;
    }
  }
`;

export default ImgSlider