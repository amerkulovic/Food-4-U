import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish, veggies and rice.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german pastry specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Cheese Burger",
    description: "Everyone's favorite burger, plain and simple",
    price: 15.99,
  },
  {
    id: "m6",
    name: "Hot Dog",
    description: "Beef, buns, ketchup, mustard, and a lot of love!",
    price: 8.99,
  },
  {
    id: "m7",
    name: "Chicken Tenders",
    description: "Crisp, just like how the picky eater's like em :)",
    price: 17.99,
  },
  {
    id: "m8",
    name: "Matcha",
    description: "A boost of vitamins in liquid form!",
    price: 6.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
