import React, { useState } from "react";
import styles from "./Navbar.module.css";
import callIcon from "../../image/sign/telephone.png";
import cartImg from "../../image/sign/cart.png";
import { Link, NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import {
  Button,
  CallDiv,
  CallIcon,
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
import Sidebar from "./Sidebar";
import { StyledLink } from "../../globalStyles/globalStyles";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { cart } = useCart();
  console.log(cart);
  const { user, logOut } = useAuth();
  console.log(user);
  const handleMobile = () => {
    setIsMobile(!isMobile);
  };
  console.log(isMobile);

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
          <StyledLink to="/">
            <Logo>FoodHunt</Logo>
          </StyledLink>
        </Center>
        <Right>
          <Menu isMobile={isMobile}>
            <MenuItem>
              <StyledLink to="/items">All Items</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/blog">Blog</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/Offer">Offer</StyledLink>
            </MenuItem>
          </Menu>
          <StyledLink to="/cart">
            <Cart>
              <Icon src={cartImg} alt="cart" />
              <CartQuantity>0</CartQuantity>
            </Cart>
          </StyledLink>
          <HamburgerMenu isMobile={isMobile} onClick={handleMobile}>
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
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </Right>
      </Container>
    </>
  );
};

export default Navbar;
