import React from "react";
import './header-sort.scss';
import SortButton from "../sort-button/sort-button";

const names = [
  "Популярности",
  "Каллорийности",
  "Новизне",
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
  "Праздничные блюда",
  "Итальянская кухня"
];

function HeaderSort(): JSX.Element {
  return (
    <div className="header__sort">
      <SortButton></SortButton>
    </div>
  )
}

export default HeaderSort
