import React from "react";
import './menu-container.scss';
import '../../components/menu-component/menu-component.tsx';
import MenuComponent from "../menu-component/menu-component";

const smallPhotoBlockNames = [
  {
    id: 2,
    img: "/../../public/menu-pictures/edges.jpg",
    title: "Куриные наггетсы",
    text: "Наггетсы из куриной грудки придутся по вкусу всем без ...",
    like: 260,
    time: "20 мин",
    calories: "138 ккал"
  },
  {
    id: 5,
    img: "menu-pictures/rolls.jpg",
    title: "Рулетики из бекона",
    text: "Ужасно вкусно. Сытно! Просто и супер универсально. Ведь такое блюдо можно подавать не только в будни, " +
      "но и на праздники. Его можно подавать и как самостоятельно, и как закуску добавить любой гарнир...",
    like: 220,
    time: "35 мин",
    calories: "150 ккал"
  },
  {
    id: 1,
    img: "edges.jpg",
    title: "Омлет-рулет",
    text: "Аппетитный омлет с кабачком и большим количеством ...",
    like: 510,
    time: "10 мин",
    calories: "55 ккал"
  },
  {
    id: 8,
    img: "menu-pictures/salmon-steak.jpg",
    title: "Стейк из лосося",
    text: "Лосось обладает очень нежным, мягким вкусом и восхиттителен сам по себе",
    like: 195,
    time: "20 мин",
    calories: "88 ккал"
  },
  {
    id: 3,
    img: "edges.jpg",
    title: "Салат из фасоли",
    text: "Сочный, вкусный и достаточно сытный салат из фасоли и ...",
    like: 132,
    time: "20 мин",
    calories: "85 ккал"
  },
  {
    id: 4,
    img: "edges.jpg",
    title: "Сырные кексы",
    text: "Отличное дополнение к первым блюдам, к чаю или ...",
    like: 222,
    time: "35 мин",
    calories: "147 ккал"
  },
  {
    id: 6,
    img: "menu-pictures/avocado-toasts.jpg",
    title: "Тосты с авакадо и шпинатом",
    text: "Быстрый и очень полезный завтрак с высоким содержанием насыщенных жиров и клетчатки. " +
      "Для тоста рекомендуем выбирать цельнозерновой хлеб, а авокадо сорта Хаас. Можно добавить другие...",
    like: 750,
    time: "5 мин",
    calories: "170 ккал"
  },
  {
    id:7,
    img: "menu-pictures/pizza-margo.jpg",
    title:"Пицца Маргарита",
    text: "Традиционное итальянское блюдо, известное во всем мире. Ее состав очень простой, но вкус не оставляет равнодушным. " +
      "Понадобится совсем небольшой перечень ингридиентов, но важно использовать именно те ...",
    like: 210,
    time: "25 мин",
    calories: "220 ккал"
  },
  {
    id: 9,
    img: "menu-pictures/tuna-salad.jpg",
    title: "Салат с тунцом",
    text: "Свежий взгляд на популярный рыбный салат с обжаренным тунцом, овощами и зеленью...",
    like: 412,
    time: "20 мин",
    calories: "85 ккал"
  },
  {
    id: 10,
    img: "menu-pictures/edges.jpg",
    title: "Сочные ребрышки",
    text: "Этот ароматный сладкий соус-маринад для ребрыше неотличим от соуса, который...",
    like: 80,
    time: "60 мин",
    calories: "260 ккал"
  },
  {
    id: 11,
    img:  "menu-pictures/shrimp-cocktail.jpg",
    title: "Салат с креветками",
    text: "Довольно изысканное блюдо, которое часто подают в ресторанах, готовится очень ...",
    like: 640,
    time: "15 мин",
    calories: "105 ккал"
  },
  {
    id: 12,
    img: "menu-pictures/detox.jpg",
    title: "Детокс-курс на неделю",
    text: "Подробнее",
    like: 510,
    time: "10 мин",
    calories: "56 ккал"
  },
  {
    id: 13,
    img: "menu-pictures/holiday-menu.jpg",
    title: "Праздничное меню",
    text: "Полное меню на любой праздник горячее, салаты, закуски и дессерт",
    like: 510,
    time: "10 мин",
    calories: "56 ккал"
  },
  {
    id: 14,
    img: "menu-pictures/mailing.jpg",
    title: "Попишитесь на нашу рассылочку",
    text: "Новые рецепты, сборники, советы и подборки блюд специально для вас!",
    like: 510,
    time: "10 мин",
    calories: "56 ккал"
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
        like={smallPhotoBlockName.like}
        time={smallPhotoBlockName.time}
        calories={smallPhotoBlockName.calories}
      />
      ))}
      <button type="button" className="menu-button">Загрузить еще</button>
    </div>
  )
}

export default MenuContainer

