import styled from "styled-components";
import { StyledLink } from "../globalStyles";
import useAuth from "../hooks/useAuth";

const navItems = [
  {
    id: "home",
    name: "Home",
    path: "/",
  },
  {
    id: "menu",
    name: "Menu",
    path: "/menu",
  },
  {
    id: "events",
    name: "Events",
    path: "/events",
  },
  {
    id: "offer",
    name: "Offer",
    path: "/offer",
  },
];

const Header = styled.header`
  position: fixed;
  top: 70px;
  height: calc(100vh - 70px);
  right: ${(props) => (props.active ? "0" : "-100vw")};
  width: 100vw;
  background-color: #d1411e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  z-index: 99;
`;
const Nav = styled.nav`
  height: 100%;
  padding: 1rem 2rem;
`;
const NavItems = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  color: white;
  font-size: 1.2rem;
`;
const NavItem = styled.li`
  width: 100px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

const User = styled.span`
  
`
const Button = styled.button`
  display: inline-block;
  align-self: flex-start;
  padding: 10px 20px;
  background-color:white;
  color: #d1411e;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transform: scaleX(1.1);
    color: white;
    background-color: red;
    transition: all 0.4s ease;
  }
`;

const NavMenu = ({ active, setActive }) => {

  const { user, logOut } = useAuth();

  return (
    <Header active={active}>
      <Nav>
        <NavItems>
          {navItems.map((navItem) => (
            <NavItem key={navItem.id} onClick={() => setActive(!active)}>
              {navItem.name}
            </NavItem>
          ))}

{user.email ? (
            <>
              <User>{user.displayName}</User>
              <Button onClick={logOut}>Logout</Button>
            </>
          ) : (
            <StyledLink to="/login">
              <Button>Login</Button>
            </StyledLink>
          )}

        </NavItems>
      </Nav>
    </Header>
  );
};

export default NavMenu;
