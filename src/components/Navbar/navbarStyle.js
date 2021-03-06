import styled from "styled-components";
import { laptop, tablet } from "../../responsive";

export const Container = styled.nav`
  height: 70px;
  padding: 0 10px;
  /* background-color: #d1411e; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99;
  ${tablet({ padding: "0 30px" })}
  ${laptop({ padding: "0 50px" })}
`;
export const Left = styled.div`
  flex: 1;
`;
export const CallDiv = styled.div`
  & > a {
    width: max-content;
    display: flex;
    align-items: center;
  }
`;
export const IconWrapper = styled.div`
  /* background-color: white; */
  padding: 5px;
  border: 2px solid #d1411e;
  border-radius: 50%;
`;
export const Icon = styled.img`
  width: 28px;
  height: 28px;
  background-color: black;
`;
export const CallTexts = styled.div`
  margin-left: 10px;
  color: #d1411e;
  & > p {
    margin: 0;
    width: max-content;
    font-size: 12px;
    font-weight: bold;
  }
  .dialNum {
    font-size: 14px;
  }
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const Logo = styled.h1`
  margin: 0;
  color: #d1411e;
  font-size: 29px;
  font-style: oblique;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;
export const Cart = styled.div`
  cursor: pointer;
  position: relative;
  margin-left: 25px;
`;
export const CartQuantity = styled.div`
  position: absolute;
  top: -12px;
  right: -6px;
  background-color: white;
  color: #d1411e;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Menu = styled.ul`
  position: absolute;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: ${(props) => (props.active ? "column" : "row")};
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  width: ${(props) => (props.active ? "100%" : "-100vw")};
  height: calc(100vh - 80px);
  top: 50px;
  right: 0;
  color: black;
  transition: ${(props) => props.active && "all 1s ease-in-out"};
  ${tablet({ position: "static", display: "flex", height: "100%" })}
  ${laptop({ position: "static", display: "flex", height: "100%" })}
`;
export const MenuItem = styled.li`
  list-style: none;
  width: max-content;
  font-size: 20px;
  border-bottom: 2px solid white;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid red;
    transition: all 0.2s ease;
  }
`;
export const UserName = styled.span`
  display: none;
  color: white;
  font-size: 12px;
  ${tablet({ display: "inline" })}
  ${laptop({ display: "inline" })}
`;
export const Button = styled.button`
  display: none;
  margin-left: 25px;
  padding: 6px 25px;
  font-size: 1rem;

  color: white;
  background-color: rgb(117, 13, 13);
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 0, 0, 0.808);
    transform: translate(0.1rem);
  }

  ${tablet({ display: "inline" })}
  ${laptop({ display: "inline" })}
`;
export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 10px;
  & > div {
    width: 28px;
    height: 3px;
    background-color: #d1411e;
    transition: all 1s ease;
    &.line1 {
      transform: ${(props) =>
        props.active ? "rotate(45deg) translate(4px, 7px)" : "0"};
    }
    &.line2 {
      opacity: ${(props) => (props.active ? "0" : "1")};
    }
    &.line3 {
      transform: ${(props) =>
        props.active ? "rotate(-45deg) translate(4px, -7px)" : "0"};
    }
  }
  ${tablet({ display: "none" })}
  ${laptop({ display: "none" })}
`;