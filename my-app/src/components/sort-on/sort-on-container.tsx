import React from "react";
import './sort-on-container.scss';
import './sort-on.tsx';
import SortOn from "./sort-on";

const sortOnButtons = [
  "Популярности",
  "Калорийности",
  "Новизне"
]

function SortOnContainer(): JSX.Element {
  return(
    <div className="header__sort-on-container">
      {sortOnButtons.map(sortOnButton => (
        <SortOn
          on = {sortOnButton}
        />
      ))}
    </div>
  )
}

export default SortOnContainer
