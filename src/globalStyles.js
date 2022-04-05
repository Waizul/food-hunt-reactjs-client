import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: inherit;

  &.active {
    border-bottom: 3px solid red;
  }
`;
