import { useState, useEffect } from "react";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

import styles from "./AvailableMeals.module.css";

const API_URL = "";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      let loadedMeals = [];

      for (let key in responseData) {
        loadedMeals.push({ id: key, ...responseData[key] });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    getMeals().catch(error => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  let mealItemList = meals.map(meal => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealItemList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
