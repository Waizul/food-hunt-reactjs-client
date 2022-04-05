import styled from "styled-components";

import useMenu from "./../hooks/useMenu";
import { tablet, laptop } from "../responsive";
import Item from "./Item";
import FoodCard from "./FoodCard/FoodCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  ${tablet({ gridTemplateColumns: "repeat(2,1fr)", gap: "2rem" })}
  ${laptop({ gridTemplateColumns: "repeat(3,1fr)", gap: "3rem" })};
`;

const Items = ({ type }) => {
  const items = useMenu(type);
  console.log(type);
  console.log(items);
  return (
    <Container>
      {items.map((item) => (
        <Item item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Items;
