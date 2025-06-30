import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div className={classes.description}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm props={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
