import React, { useState } from "react";
import styles from "./Home.module.css";
import { Outlet } from "react-router-dom";

import Featured from "../components/featured/Featured";
import Services from "./Home/Services/Services";

import Search from "../components/Search";
import FoodMenu from "../components/FoodMenu";
import styled from "styled-components";
import { StyledLink } from "../globalStyles";
import Upcoming from "../components/Upcoming";

const Container = styled.div`
  text-align: center;
`;

const Home = () => {
  const [type, setType] = useState("lunch");
  return (
    <Container>
      <Search />
      <FoodMenu type={type} setType={setType} />
      {/* <Outlet /> */}
      <StyledLink to="/items"></StyledLink>
      <Upcoming/>
      <Services />
    </Container>
  );
};

export default Home;
