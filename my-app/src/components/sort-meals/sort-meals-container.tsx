import React from "react";
import './sort-meals-container.scss';
import './sort-meals.tsx';
import SortMeals from "./sort-meals";

const sortMealsButtons = [
  "Праздничные блюда",
  "Итальянская кухня"
]

function SortMealsContainer(): JSX.Element {
  return (
 <div className="sort__meals-container">
   {sortMealsButtons.map(sortMealsButton => (
     <SortMeals
       mealsName = {sortMealsButton}
     />
   ))}
 </div>
  )
}

export default SortMealsContainer
