import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 100px);
  background-image: url('../../image/featuredbg.png');
  overflow: hidden;
  position: relative;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  width: 5%;
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
       opacity: 0.1;
   }
`;
export const Wrapper = styled.div`
width: 300vw;
height: 100%;
display: flex;
transform: translateX(${-100 * index}vw);
transition:all 1.5s ease-in-out infinite alternate;
`
export const ImgContainer= styled.div`
width: 100vw;
height: 100%;
`
export const Image = styled.img`
width: 100vw;
height: 100%;
object-fit: cover;
`