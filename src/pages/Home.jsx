import React, { useState } from "react";
import styles from "./Home.module.css";
import { Outlet } from "react-router-dom";

import Featured from "../components/featured/Featured";
import Services from "./Home/Services/Services";

import Search from "../components/Search";
import FoodMenu from "../components/FoodMenu";
import styled from "styled-components";
import { StyledLink } from "../globalStyles";

const Container = styled.div`
text-align: center;
`;

const Button = styled.button`
  padding: 10px 30px;
  margin: 20px auto;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background-color: #11115a;
`
const Home = () => {
  return (
    <Container>
      <Search />
      <FoodMenu />
      <Outlet />
      <StyledLink to='/items'>

      <Button>Checkout</Button>
      </StyledLink>
      <Featured />
      <Services />
    </Container>
  );
};

export default Home;
