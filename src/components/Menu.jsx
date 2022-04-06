import styled from "styled-components";
import { useState, useEffect } from "react";

import SlideItems from "./SlideItems";
import styles from "../pages/Item/Item.module.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import ServiceCard from './ServiceCard/ServiceCard';
import { tablet } from "../responsive";

const Container = styled.section`
  margin-top: 2rem;
  position: relative;
  /* min-height: 40vh; */
  /* display: flex;
  justify-content: space-between; */
  
  ${tablet({marginTop:'3rem'})}
`;
const Wrapper = styled.div`
  /* padding: 0 6rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${tablet({flexDirection:'row'})}
`;
const Left = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  ${tablet({paddingLeft:'6rem'})}
`;
const InfoContainer = styled.div`
margin-bottom: 3rem;
`;
const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: normal;
  margin-bottom: 1.4rem;
`
const QuantityContainer = styled.div`
display: flex;
gap: 1rem;
margin-bottom: 1rem;
`;
const Price = styled.p`
width: 80px;
  font-size: 1.5rem;
  font-weight: 500;
`
const Quantity = styled.div`
padding: 0 0.7rem;
  border-radius: 2rem;
  display: flex;
  /* align-items: center; */
  box-shadow: 0px 0px 1px 1px lightgray;
`
const Sign = styled.span`
  /* width: 10px;
  height: 2px; */
  color: black;
  font-size:1.4rem;
  cursor: pointer;
  &.left{
    /* font-size: 3rem; */
  }
  &.right{
    color: red;
  }
`
const Button = styled.button`
  width: max-content;
  margin-bottom: 1rem;
  padding: 10px 30px;
  border-radius: 20px;
  border: none;
  background-color: #c80a29;
  color: white;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    background-color: #f80a29;
  }
`
const Right = styled.div`
  flex: 1;
`;
const ImgContainer = styled.div`
  width: 30vw;
  /* height: 40vh; */
`;
const Image = styled.img`
  width: 70%;
  /* height: 80%; */
  border-radius: 50%;
  box-shadow: 1px 10px 10px 7px rgba(11, 11, 11, 0.2);
`;
const Menu = ({ items }) => {
  console.log(items);
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extras, setExtras] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
console.log(id)
  const [price, setPrice] = useState(
    useEffect(() => {
      const url = `https://foodhuntbd.herokuapp.com/items/${id}`;
      fetch(`${url}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
          setPrice(data.price);
        });
    }, [id])
  );

  const handleQuantity = (sign) => {
    if (sign === "-" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (sign === "+") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addItem({ ...item, extras, price, quantity }));
  };

  return (
    <Container>
      <Wrapper>
        <Left>
       
      
              <InfoContainer>
                <Title>{item.title}</Title>
                <p>{item.desc}</p>
              </InfoContainer>
              <QuantityContainer>
                <Price> $
                  {(item.price * quantity).toFixed(2)}
                </Price>

                <Quantity>
                  <Sign onClick={() => handleQuantity("-")} className='left'>-</Sign>
                  <input
                    type="number"
                    value={quantity}
                    className={styles.quantity}
                  />
                  <Sign onClick={() => handleQuantity("+")} className='right'>+</Sign>
                </Quantity>
               
              </QuantityContainer>
              <Button onClick={handleAddToCart}>
                  Add
                </Button>
            
            </Left>
            <Right>
           
              {/* // <ImgContainer> */}
              <Image src={item.imgUrl} alt={item.title} />
              {/* // </ImgContainer> */}
          
            </Right>
      </Wrapper>
              <SlideItems items={items} />
    </Container>
  );
};

export default Menu;
