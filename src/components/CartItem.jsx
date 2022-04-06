import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Container = styled.div`

`
const Wrapper = styled.div`
width: max-content;
	/* width: 90%; */
	/* max-height: 300px; */
	background-color: #d6d3d3b7;
	padding: 0.5rem 1rem;
	border-radius: 10px;
	display: flex;
	align-items: center;
	gap: 2rem;
`
const Image = styled.img`
	width: 100px;
	height: 100px;
`
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`
const Title = styled.h5`
	
`
const Price = styled.p`
font-size: 14px;
&>span{
	/* color: #f00303; */
	font-weight: 500;
}
	
`
const Quantity = styled.p`
font-size: 14px;
&>span{
	font-weight: 500;
}
`
const Total = styled.h5`
	&>span{
	color: #f00303;
	font-weight: 500;
}
`
const InputContainer = styled.div`
	width: max-content;
	height: max-content;
	border-radius: 30px;
	padding: 0.1rem 0.7rem;
	display: flex;
	gap: 0.2rem;
	font-weight: 500;
`
const Sign = styled.span`
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
const Input = styled.input`
	width: 2.5rem;
	padding-left: 0.5rem;
	font-weight: bold;
	border: none;
	outline:none;
	border-radius: 5px;
`
// const Left = styled.div`
// 	flex: 2;
// `


// .right {
// 	flex: 1;
// }

// .imgContainer {
// 	width: 100px;
// 	height: 100px;
// 	position: relative;
// }

// .table {
// 	width: 100%;
// 	border-spacing: 20px;
// }

// .name {
// 	font-weight: 500;
// 	color: #d1411e;
// 	font-size: 18px;
// }

// .total {
// 	font-weight: 500;
// 	font-size: 18px;
// }

// .wrapper {
	
// }

// .totalTextTitle {
// 	margin-right: 10px;
// }

// .button {
// 	height: 30px;
// 	color: #d1411e;
// 	font-weight: bold;
// 	cursor: pointer;
// 	margin-top: 20px;
// }

// @media screen and (max-width: 480px) {
// 	.container {
// 		flex-direction: column;
// 		padding: 20px;
// 	}

// 	.table {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: center;
// 	}

// 	.trTitle {
// 		display: none;
// 	}

// 	.tr {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: center;
// 		margin-bottom: 20px;
// 	}

// 	.imgContainer {
// 		width: 35vw;
// 		height: 35vw;
// 	}

// 	.name,
// 	.total {
// 		font-size: 24px;
// 	}

// 	.extras,
// 	.price,
// 	.quantity {
// 		font-size: 22px;
// 	}

// 	.price::before {
// 		content: 'Price: ';
// 		font-weight: 500;
// 	}
// 	.quantity::before {
// 		content: 'Quantity: ';
// 		font-weight: 500;
// 	}
// 	.total::before {
// 		content: 'Total: ';
// 		font-weight: 500;
// 	}

// 	.wrapper {
// 		width: 100%;
// 	}
// }
const CartItem = ({ item }) => {
	const [quantity, setQuantity] = useState(1);
 
  const { id } = useParams();
  const dispatch = useDispatch();

	const handleQuantity = (sign) => {
		if (sign === "-" && quantity > 1) {
		  setQuantity(quantity - 1);
		}
		if (sign === "+") {
		  setQuantity(quantity + 1);
		}
	  };
	
	  const handleAddToCart = () => {
		dispatch(addItem({ ...item, quantity }));
	  };
	return (
		<Container>
			<Wrapper>
				<Image src={item?.imgUrl} alt={item?.title} />
				<InfoContainer>
					<Title>{item.title}</Title>
					<Price><span>${item.price}</span></Price>
					<Quantity>Quantity: <span>{item.quantity}</span></Quantity>
					<Total>Total: <span>${(item.price*item.quantity).toFixed(2)}</span></Total>
				</InfoContainer>
				<InputContainer>
                  <Sign onClick={() => handleQuantity("-")} className='left'>-</Sign>
                  <Input
                    type="number"
                    value={quantity}
                  />
                  <Sign onClick={() => handleQuantity("+")} className='right'>+</Sign>
                </InputContainer>
					{/* {item.extras.map(extra=>
						<div>
						<p>{extra.title}</p>
					<p className={styles.price}>${extra.price}</p>
					
					</div>
						)} */}
					
			
			</Wrapper>
		</Container>
	);
};

export default CartItem;
