import styled from 'styled-components';

import {useSelector} from 'react-redux'

import callIcon from "../../image/sign/telephone.png";
import cartImg from "../../image/sign/cart.png";
import useAuth from "../../hooks/useAuth";
import { Link, StyledLink } from "../../globalStyles";
import {
  Button,
  CallDiv,
  CallTexts,
  Cart,
  CartQuantity,
  Center,
  Container,
  HamburgerMenu,
  Icon,
  IconWrapper,
  Left,
  Logo,
  Menu,
  MenuItem,
  Right,
  UserName,
} from "./navbarStyle";

const StyledNavLink = styled(StyledLink)`
&.active{
 border-bottom: 2px solid white;
}
`
const Navbar = ({active,setActive}) => {
  
  const quantity = useSelector(state => state.cart.quantity)
  // const { cart } = useCart();
  
  const { user, logOut } = useAuth();
  
 

  return (
    <>
      <Container>
        <Left>
            <CallDiv>
          <a href="tel:0100000000">
              <IconWrapper>
                <Icon src={callIcon} alt="call icon" />
              </IconWrapper>
              <CallTexts>
                <p>ORDER NOW !</p>
                <p className="dialNum">0100 000 000</p>
              </CallTexts>
          </a>
            </CallDiv>
        </Left>
        <Center>
          <Link to="/">
            <Logo>FoodHunt</Logo>
          </Link>
        </Center>
        <Right>
          <Menu>
            <MenuItem>
              <StyledNavLink to="/menus">Menus</StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink to="/blog">Blog</StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink to="/Offer">Offer</StyledNavLink>
            </MenuItem>
          </Menu>
          <StyledNavLink to="/cart">
            <Cart>
              <Icon src={cartImg} alt="cart" />
              <CartQuantity>{quantity}</CartQuantity>
            </Cart>
          </StyledNavLink>
          <HamburgerMenu active={active} onClick={()=>setActive(!active)}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </HamburgerMenu>
          {user.email ? (
            <>
              <UserName>{user.displayName}</UserName>
              <Button onClick={logOut}>Logout</Button>
            </>
          ) : (
            <StyledLink to="/login">
              <Button>Login</Button>
            </StyledLink>
          )}
        </Right>
      </Container>
    </>
  );
};

export default Navbar;
