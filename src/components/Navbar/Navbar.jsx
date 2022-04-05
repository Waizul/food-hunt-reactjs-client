import React, { useState } from "react";
import {useSelector} from 'react-redux'

import callIcon from "../../image/sign/telephone.png";
import cartImg from "../../image/sign/cart.png";
import useAuth from "../../hooks/useAuth";
import { StyledLink } from "../../globalStyles";
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
          <StyledLink to="/">
            <Logo>FoodHunt</Logo>
          </StyledLink>
        </Center>
        <Right>
          <Menu>
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
              <CartQuantity>{quantity}</CartQuantity>
            </Cart>
          </StyledLink>
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
