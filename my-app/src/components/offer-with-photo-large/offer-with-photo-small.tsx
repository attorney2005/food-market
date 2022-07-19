import React from "react";
import './offer-with-photo-small.scss';


// const smallPhotoBlockNames = [
// // rolls = {
// //
// // };
//   edges = {
//     title: "Сочные ребрышки",
//     text: "Этот ароматный сладкий соус-маринад для ребрыше неотличим от соуса, который...",
//     likes = {
//       80,
//     },
//     time = {
//       "20 мин",
//     },
//     calories = {
//       "220ккал",
//     }
//
//   };
//
// steak = {};
//
// // pizza = {
// //
// // };
//
// tunaSalad = {};
//
// // holydayMenu = {
// //
// // };
//
// shrimpSalad = {};
//
// // cinnamonToast = {
// //
// // };
//
// ]

type OfferWithPhotoSmallProps = {
  title: string;
  text: string;
  likes: object;
  time: object;
  calories: object
}



function OfferWithPhotoSmall(props:OfferWithPhotoSmallProps): JSX.Element {
  return (
    <div className="offer__container">
      <div className="offer__container-photo">
        <img className="offer__container-photo" src="../../body-pictures/edges.jpg"
             width="252" height="192" alt="Edges">
        </img>
      </div>
      <div className="offer__container-text">
        <title>{props.title}</title>
        <p>{props.text}</p>
        <span>{props.likes}</span>
        <span>{props.time}</span>
        <span>{props.calories}</span>
      </div>
    </div>

  )
}

export default OfferWithPhotoSmall
