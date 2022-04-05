import { useState } from 'react';
import styled from 'styled-components';

import arrowLeft from '../image/sign/arrowl.png'
import arrowRight from '../image/sign/arrowr.png'

const Container = styled.section`
  height: 100vh;
  /* width: 100vw; */
  background-image: url('../image/searchbg.png');
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #d1411e;
  font-size: 2rem;
  margin-bottom: 1.4rem;
`
const ArrowContainer = styled.div`
  position: absolute;
  width: 5%;
  height: 10%;
  top: 0;
  left: ${props=>props.direction==='left' && '10px'};
  right: ${props=>props.direction==='right' && '10px'};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 2;
   &>img{
       width: 100%;
       height: 100%;
       background-color: lightgray;
       opacity: 0.3;
   }
`;
const Wrapper = styled.div`
width: 300vw;
height: 90%;
display: flex;
transform:${props=>props.index && `translateX(${-100 * props.index}vw)`};
transition:all 1.5s ease-in-out;
`
const ImgContainer= styled.div`
width: 100%;
height: 100%;
`
const Image = styled.img`
width: 80%;
height: 90%;
object-fit: contain;
`

const Upcoming = () => {
    const [index,setIndex] = useState(0)

    const feturedImages = [
		'https://i.ibb.co/KKQxc0v/dinner1.png',
		'https://i.ibb.co/fYZsjws/dinner4.png',
		'https://i.ibb.co/6mDtKfv/lunch6.png',
	];

    const handleSlide = direction => {
        if(direction === 'left') {
            setIndex(index !==0 ? index - 1 : 2)
        }else{
            setIndex( index !== 2 ? index + 1 : 0)
        }
    };

  return (
    <Container>
        <Title>OUR UPCOMING ITEMS</Title>
        <ArrowContainer direction='left' onClick={()=>handleSlide('left')}>
            <img src={arrowLeft} alt='arrow left' />
        </ArrowContainer>
        <Wrapper index={index}>
            {feturedImages.map((img,i)=>
            <ImgContainer key={i}>
                <Image src={img} alt='food item' />
            </ImgContainer>
            )}
        </Wrapper>
        <ArrowContainer direction='right' onClick={()=>handleSlide('right')}>
            <img src={arrowRight} alt='arrow right' />
        </ArrowContainer>
    </Container>
  )
}

export default Upcoming