import styled, { css } from "styled-components";
import searchbg from "../image/searchbg.png";
import { laptop } from '../responsive';

const Container = styled.header`
  width: 100vw;
  height: calc(70vh - 70px);
  background-image: url(${searchbg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputCss = css`
  font-size: 1.2rem;
  border: none;
  outline: none;
`;
const Input = styled.input`
  ${InputCss}
  width: 40%;
  padding: 0.5rem;
  border-radius: 0.3rem 0 0 0.3rem ;
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
      <InputContainer>
        <Input placeholder="Search food items" />
        <Button>Search</Button>
      </InputContainer>
    </Container>
  );
};

export default Search;
