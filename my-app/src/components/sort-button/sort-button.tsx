import React from "react";
import './sort-button.scss';

const names = ["Популярности", "Каллорийности", "Новизне", "Омлет", "Завтрак", "Простой", "Десерт", "Бекон", "Тунец", "Лосось", "Ребрышки", "Закуски", "Салаты", "Курица", "Праздничные блюда", "Итальянская кухня"];

function SortButton(name:string): JSX.Element {
  return (
    <button>{name}</button>
  )
}

export default SortButton
