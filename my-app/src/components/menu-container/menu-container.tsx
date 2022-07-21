import React from "react";
import './menu-container.scss';
import '../../components/menu-component/menu-component.tsx';
import MenuComponent from "../menu-component/menu-component";

const smallPhotoBlockNames = [
  {
    id: 1,
    img: "edges.jpg",
    title: "Омлет-рулет",
    text: "Аппетитный омлет с кабачком и большим количеством ...",
  },
  {
    id: 2,
    img: "edges.jpg",
    title: "Куриные наггетсы",
    text: "Наггетсы из куриной грудки придутся по вкусу всем без ...",
  },
  {
    id: 3,
    img: "edges.jpg",
    title: "Салат из фасоли",
    text: "Сочный, вкусный и достаточно сытный салат из фасоли и ...",
  },
  {
    id: 4,
    img: "edges.jpg",
    title: "Сырные кексы",
    text: "Отличное дополнение к первым блюдам, к чаю или ...",
  },
  {
    id: 5,
    img: "edges.jpg",
    title: "Сочные ребрышки",
    text: "Этот ароматный сладкий соус-маринад для ребрыше неотличим от соуса, который...",
  },
  {
    id: 6,
    img: "Users/vadimbajbuz/Code/learning/food-market/my-app/src/menu-pictures/edges.jpg",
    title: "Стейк из лосося",
    text: "Лосось обладает очень нежным, мягким вкусом и восхиттителен сам по себе",
  },
  {
    id: 7,
    img: "edges.jpg",
    title: "Рулетики из бекона",
    text: "Ужасно вкусно. Сытно! Просто и супер универсально. Ведь такое блюдо можно подавать не только в будни, " +
      "но и на праздники. Его можно подавать и как самостоятельно, и как закуску добавить любой гарнир",
  },
  {
    id:8,
    img: "edges.jpg",
    title:"Пицца Маргарита",
    text: "Традиционное итальянское блюдо, известное во всем мире. Ее состав очень простой, но вкус не оставляет равнодушным. " +
      "Понадобится совсем небольшой перечень ингридиентов, но важно использовать именно те ..."
  },
  {
    id: 9,
    img: "edges.jpg",
    title: "Салат с тунцом",
    text: "Свежий взгляд на популярный рыбный салат с обжаренным тунцом, овощами и зеленью..."
  },
  {
    id: 10,
    img:  "edges.jpg",
    title: "Салат с креветками",
    text: "Довольно изысканное блюдо, которое часто подают в ресторанах, готовится очень ...",
  },
  {
    id: 11,
    img: "edges.jpg",
    title: "Тосты с авакадо",
    text: "Быстрый и очень полезный завтрак с высоким содержанием насыщенных жиров и клетчатки. " +
      "Для тоста рекомендуем выбирать цельнозерновой хлеб, а авокадо сорта Хаас. Можно добавить другие...",
  },
  {
    id: 12,
    img: "edges.jpg",
    title: "",
    text: "",
  },
  {
    id: 13,
    img: "edges.jpg",
    title: "",
    text: "",
  },
  {
    id: 14,
    img: "edges.jpg",
    title: "",
    text: "",
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

