import styled from 'styled-components';


export const Container = styled.div`
  height: 50vh;
  width: 50vw;
  background-image: url('../../image/searchbg.png');
  overflow: hidden;
  position: relative;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  width: 10%;
  height: 10%;
  top: 0;
  left: ${props=>props.direction==='left' && '0'};
  right: ${props=>props.direction==='right' && '0'};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 2;
   &>img{
       width: 100%;
       height: 100%;
       background-color: #d1411e;
       opacity: 0.3;
   }
`;
export const Wrapper = styled.div`
width: 50vw;
height: 100%;
display: flex;
transform:${props=>props.index && `translateX(${-50 * props.index}vw)`};
transition:all 1.5s ease-in-out;
`
export const ImgContainer= styled.div`
width: 50vw;
height: 100%;
`
export const Image = styled.img`
width: 50vw;
height: 100%;
object-fit: contain;
`