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
      <h4 className="header__sort-on-title">Сортировать по:</h4>
      {sortOnButtons.map(sortOnButton => (
        <SortOn
          on = {sortOnButton}
        />
      ))}
      <input className="header__sort-input" value="Поиск" />
      <svg className="header__sort-input-pic" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 15L11.7709 11.75M2.84041 11.7956C1.25315 10.1981 0.633257 7.86957 1.21423 5.68726C1.79521 3.50495 3.48879 1.80037 5.65703 1.21562C7.82526 0.630876 10.1387 1.25479 11.726 2.85236C13.3133 4.44992 13.9331 6.77842 13.3522 8.96073C12.7712 11.143 11.0776 12.8476 8.90938 13.4324C6.74114 14.0171 4.42767 13.3932 2.84041 11.7956Z" stroke="#01170A" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
  )
}

export default SortOnContainer
