import React from "react";
import './menu-container.scss';
import '../../components/menu-component/menu-component.tsx';
import MenuComponent from "../menu-component/menu-component";

const smallPhotoBlockNames = [
  {
    id: 1,
    img: "../my-app/src/component/menu-pictures/menu-picture/edges.jpg",
    title: "Сочные ребрышки",
    text: "Этот ароматный сладкий соус-маринад для ребрыше неотличим от соуса, который...",
  },

  {
    id: 2,
    img: "edges.jpg",
    title: "Стейк из лосося",
    text: "Лосось обладает очень нежным, мягким вкусом и восхиттителен сам по себе",
  },
];


function MenuContainer(): JSX.Element {
  return (
    <div className="menu-container">
      {smallPhotoBlockNames.map(smallPhotoBlockName => (
      <MenuComponent
        id={smallPhotoBlockName.id}
        img={smallPhotoBlockName.img}
        title={smallPhotoBlockName.title}
        text={smallPhotoBlockName.text}
      />
      ))}
    </div>
  )
}

export default MenuContainer

