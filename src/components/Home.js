import React from "react";
import title from "../images/title.png";
import styled from "styled-components";
import Slider from "./Slider";
import defaultSlides from "../slides";

// import { useShopify } from "../hooks";

export default (props) => {
  // const { shopDetails } = useShopify();

  return (
    <Banner>
      <img src={title} alt="Lady Luck Art" />
      <Slider slides={defaultSlides}></Slider>
    </Banner>
  );
};

const Banner = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;
