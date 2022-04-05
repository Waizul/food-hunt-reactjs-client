import styled from "styled-components";

import { StyledLink } from "../globalStyles"

const Container = styled.section`
text-align: center;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
`;
const Title = styled.h1`

color: #d1411e;
font-size: 2rem;
`;
const Desc = styled.p`
width: 60%;
margin: auto;
font-size: 1.2rem;
margin-bottom: 2rem;
`;

const FoodMenu = () => {
  return (
    <Container>
      <Title>THE BEST FOOD IN THE CAPITAL</Title>
      <Desc>
        We deliver the best, original, and delicious food. Our foods taste is
        unique. Food will be delivered in a short period of time. If like to eat
        in our restaurant, we have great environment suited to your need.
      </Desc>

      <LinkContainer>
        <StyledLink to="breakfast">Breakfast</StyledLink>
        <StyledLink to="/">Lunch</StyledLink>
        <StyledLink to="dinner">Dinner</StyledLink>
      </LinkContainer>
    </Container>
  );
};

export default FoodMenu;
