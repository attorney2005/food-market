import React from "react";
import './sort-teg-container.scss';
import SortTeg from "./sort-teg";

const buttonNames = [
  "Омлет",
  "Завтрак",
  "Простой",
  "Десерт",
  "Бекон",
  "Тунец",
  "Лосось",
  "Ребрышки",
  "Закуски",
  "Салаты",
  "Курица",
];


function SortTegContainer(): JSX.Element {
  return (
    <div className="sort__meals-container">
      {buttonNames.map(buttonName => (
        <SortTeg
          text={buttonName}
          onClick={() => alert(buttonName)}
        />
      ))}
    </div>
  )
}
      export default SortTegContainer
