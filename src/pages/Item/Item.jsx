import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import useCart from "../../hooks/useCart";
import { addToLocalStorage } from "../../localStorage/localStorage";
import styles from "./Item.module.css";
import { addItem } from "../../redux/cartSlice";

const Item = () => {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extras, setExtras] = useState([]);
  const { id } = useParams();
  const { cart, setCart } = useCart();
  const dispatch = useDispatch();

  const [price, setPrice] = useState(
    useEffect(() => {
      const url = `http://localhost:5000/items/${id}`;
      fetch(`${url}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
          setPrice(data.price);
        });
    }, [id])
  );

  useEffect(() => {
    fetch("/extras.json")
      .then((res) => res.json())
      .then((data) => setExtraOptions(data));
  }, []);

  const changedPrice = (number) => {
    setPrice(parseFloat(price) + parseFloat(number));
  };

  const handleChange = (e, extra) => {
    const checked = e.target.checked;

    if (checked) {
      changedPrice(extra.price);
      setExtras((prev) => [...prev, extra]);
    }
    if (!checked) {
      changedPrice(-extra.price);
      setExtras(extras.filter((ext) => ext._id !== extra._id));
    }
  };
  console.log(price);
  const handleAddToCart = () => {
    dispatch(addItem({ ...item, extras, price, quantity }));
  };

  const handleQuantity = (sign) => {
    if (sign === "-" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (sign === "+") {
      setQuantity(quantity + 1);
    }
  };

  
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <img src={item?.imgUrl} alt="" className={styles.imgItem} />
            <p className={styles.desc}>{item?.desc}</p>
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{item?.title}</h1>
          <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
            {extraOptions.map((extra) => (
              <>
                <div className={styles.option}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id={extra.title}
                    name={extra.title}
                    onChange={(e) => handleChange(e, extra)}
                  />
                  <label htmlFor={extra.title}>{extra.title}</label>
                  <p>:${extra.price}</p>
                </div>
              </>
            ))}
          </div>
          <div className={styles.addCart}>
            <p className={styles.price}>${item.price}</p>
            <div className={styles.add}>
              <span onClick={() => handleQuantity("-")}>-</span>
              <input
                type="number"
                value={quantity}
                className={styles.quantity}
              />
              <span onClick={() => handleQuantity("+")}>+</span>
            </div>
            <button className={styles.button} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          <Link to={"/cart"}>
            <button className={styles.button}>Proceed to Payment</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
