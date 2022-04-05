import React, { useState } from 'react'
import { ArrowContainer, Container, Image, ImgContainer, Wrapper } from './featuredStyle'
import arrowLeft from'../../image/sign/arrowl.png'
import arrowRight from '../../image/sign/arrowr.png'

const Featured = () => {
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

export default Featured