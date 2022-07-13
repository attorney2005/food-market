import React from "react";
import './sort-meals.scss';

type SortMealsProps = {
  mealsName: string;
}

function SortMeals({mealsName}: SortMealsProps): JSX.Element {
  return (
    <button className="sort__meals">{mealsName}</button>
  )
}

export default SortMeals
