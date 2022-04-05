import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 70%;
  padding: 0.5rem 1rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &:hover{
    box-shadow: 1px 1px 10px 7px rgba(11,11,11,0.1);
  }
`
const ImgContainer = styled.div`
  width: 100%%;
`
const Image = styled.img`
width: 100%;
height: auto;
`;
const Name = styled.h3`
  font-weight: 500;
`
const Desc =  styled.p`
  /* font-weight: 400; */
  font-size: 0.9rem;
color:gray;
`
const Price = styled.p`
  /* color: #d1411e; */
  font-weight: bold;
`
const Item = ({ item }) => {
  return (
    <Container>
      <Wrapper>

      <ImgContainer>
      <Image src={item.imgUrl} alt={item.title} />
      </ImgContainer>
<Name>{item.title}</Name>
<Desc>{item.desc}</Desc>
<Price>${item.price}</Price>
      </Wrapper>
    </Container>
  );
};

export default Item;
