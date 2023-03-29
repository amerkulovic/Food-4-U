import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div className={classes.description}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm props={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
