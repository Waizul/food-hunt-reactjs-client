import styled from "styled-components";

import { Link, StyledLink } from "../globalStyles";
import {tablet, laptop} from '../responsive'
import Items from "./Items";

const Container = styled.section`
  text-align: center;
`;

const ItemSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  & > span {
    cursor: pointer;

    &.active {
      border-bottom: 3px solid red;
    }
  }

  ${tablet({fontSize:'1.4rem'})}
`;

const Title = styled.h1`
  color: #d1411e;
  font-size: 1.7rem;
  ${tablet({fontSize:'2rem'})}

`;

const Desc = styled.p`
  width: 80%;
  text-align: justify;
  margin: auto;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  ${tablet({width:'60%'})}

`;

const Button = styled.button`
  padding: 10px 30px;
  margin: 20px auto;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background-color: #11115a;
`;

const FoodMenu = ({ type, setType }) => {
  return (
    <Container>
      {/* <Title>THE BEST FOOD IN THE CAPITAL</Title>
      <Desc>
        We deliver the best, original, and delicious food. Our foods taste is
        unique. Food will be delivered in a short period of time. If like to eat
        in our restaurant, we have great environment suited to your need.
      </Desc> */}

      <ItemSelection>
        <span
          onClick={() => setType("breakfast")}
          className={type === "breakfast" && "active"}>
          Breakfast
        </span>
        <span
          onClick={() => setType("lunch")}
          className={type === "lunch" && "active"}>
          Lunch
        </span>
        <span
          onClick={() => setType("dinner")}
          className={type === "dinner" && "active"}>
          Dinner
        </span>
      </ItemSelection>
      <Items type={type} />

      <Link to={`${type}`}>
        <Button>Checkout</Button>
      </Link>
    </Container>
  );
};

export default FoodMenu;
