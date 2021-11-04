import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const Slider = ({ slides }) => {
  const [curr, setCurr] = React.useState(0);
  const { length } = slides;

  const goToNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };

  React.useEffect(() => {
    setTimeout(goToNext, 2000);
  });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SlideShow>
      {slides.map((s, i) => (
        <div className={i === curr ? "slide active" : "slide"} key={s.title}>
          <img className="image" src={s.image} />
        </div>
      ))}
    </SlideShow>
  );
};

const SlideShow = styled.section`
  position: relative;
  height: 60vh;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Slider;
