import styled, { css } from "styled-components";
import searchbg from "../image/searchbg.png";
import { laptop, tablet } from '../responsive';

const Container = styled.header`
  width: 100%;
  height: calc(70vh - 70px);
  background-image: url(${searchbg});
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Title = styled.h1`
  color: #d1411e;
  margin-bottom: 1.2rem;
  font-size: 1.4rem;
  ${tablet({fontSize:'1.8rem', marginBottom:'1.4rem'})}
  ${laptop({fontSize:'2rem', marginBottom:'1.4rem'})}
`
const InputContainer = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputCss = css`
  font-size: 1rem;
  border: none;
  outline: none;
`;
const Input = styled.input`
  ${InputCss}
  width: 50%;
  padding: 0.5rem;
  border-radius: 0.3rem 0 0 0.3rem ;
  ${tablet({width:'40%'})}
`;
const Button = styled.button`
  ${InputCss}
  color: white;
  padding: 0.5rem 1rem;
  background-color: #d1411e;
  cursor: pointer;
  font-weight: 500;
  border-radius: 0 0.3rem 0.3rem 0;

  &:hover {
    background-color: #e1311e;
  }
${laptop({padding:'0.5rem 3rem'})}

`;
const Search = () => {
  return (
    <Container>
      <Title>THE BEST FOOD IN THE CAPITAL</Title>
      <InputContainer>

        <Input placeholder="Search food items" />
        <Button>Search</Button>
      </InputContainer>
    </Container>
  );
};

export default Search;
