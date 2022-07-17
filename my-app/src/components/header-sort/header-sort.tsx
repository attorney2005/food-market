import React from "react";
import './header-sort.scss';
import SortOnContainer from "../sort-on/sort-on-container";
import SortMealsContainer from "../sort-meals/sort-meals-container";
import SortTegContainer from "../sort-teg/sort-teg-container";

function HeaderSort(): JSX.Element {
  return (
    <div className="header__sort">
      <SortOnContainer/>
      <SortTegContainer/>
      <SortMealsContainer/>
    </div>
  )
}

export default HeaderSort
