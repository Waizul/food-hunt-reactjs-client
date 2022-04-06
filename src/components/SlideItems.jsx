import styled from "styled-components";
import { useState } from "react";

import arrowLeft from "../image/sign/arrowl.png";
import arrowRight from "../image/sign/arrowr.png";
import {tablet} from '../responsive'
import Menu from "./Menu";

const Container = styled.div`
position: absolute;
width: 320px;
bottom: 0%;
left: 0%;
  /* margin: 0.5rem 1rem; */
  /* width: 90vw; */
  /* height: 30vh; */
  /* background-image: url('../image/searchbg.png'); */
  /* background-color: green; */
  overflow: hidden;
  /* position: relative; */
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${tablet({width:'420px',bottom:'25%',left:'8%'})}
`;
const Title = styled.h1`
  color: #d1411e;
  font-size: 2rem;
  margin-bottom: 1.4rem;
`;
const ArrowContainer = styled.div`
  position: absolute;
  width: 8%;
  height: 20%;
  margin-left: -10px;
  margin-right: -10px;
  top: 0;
  left: ${(props) => props.direction === "left" && "0px"};
  right: ${(props) => props.direction === "right" && "0px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 2;
  & > img {
    width: 100%;
    height: 100%;
    background-color: lightgray;
    opacity: 1;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  transform: ${(props) => props.index && `translateX(${-215* props.index}px)`};
  transition: all 1s ease-in-out;
`;
const ImgContainer = styled.div`
  /* width: 250px; */
  /* height: 100%; */
`;
const Image = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  ${tablet({width:'200px'})}
`;

const SlideItems = ({ items }) => {
  const [index, setIndex] = useState(0);
console.log(items.length-3)
  const handleSlide = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : (items.length-3));
    } else {
      setIndex(index !== (items.length-3) ? index + 1 : 0);
    }
  };

  return (
      <Container>
      <ArrowContainer direction="left" onClick={() => handleSlide("left")}>
        <img src={arrowLeft} alt="arrow left" />
      </ArrowContainer>
      <Wrapper index={index}>
        {items.slice(1).map((item) => (
          <ImgContainer key={item._id}>
            <Image src={item.imgUrl} alt="food item" />
          </ImgContainer>
        ))}
      </Wrapper>
      <ArrowContainer direction="right" onClick={() => handleSlide("right")}>
        <img src={arrowRight} alt="arrow right" />
      </ArrowContainer>
    </Container>
  );
};

export default SlideItems;
