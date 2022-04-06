import { Link as l, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(l)`
text-decoration: none;
`
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: inherit;
  border-bottom: 3px solid white;


  &.active {
    border-bottom: 3px solid red;
  }
`;
