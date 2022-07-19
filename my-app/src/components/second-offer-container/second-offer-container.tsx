import React from "react";
import './second-offer-container.scss';
import './offer-with-photo-small.tsx';
import OfferWithPhotoSmall from "./offer-with-photo-small";

const smallPhotoBlockNames = [
// rolls = {
//
// };
  edges = {
    title: "Сочные ребрышки",
    text: "Этот ароматный сладкий соус-маринад для ребрыше неотличим от соуса, который...",
    likes = {
      80,
    },
    time = {
      "20 мин",
    },
    calories = {
      "220ккал",
    }

  };

steak = {};

// pizza = {
//
// };

tunaSalad = {};

// holydayMenu = {
//
// };

shrimpSalad = {};

// cinnamonToast = {
//
// };

]

function SecondOfferContainer(): JSX.Element {
  return (
    <div >
      {smallPhotoBlockNames.map(smallPhotoBlockName => (
        <OfferWithPhotoSmall
          text={smallPhotoBlockNames}

        />
      ))}
    </div>
  )
}
export default SecondOfferContainer
