import React from "react";
import './sort-teg.scss';

type SortButtonProps = {
  text: string;
  onClick: () => void;
}

function SortTeg(props: SortButtonProps): JSX.Element {
  return (
    <button
      className="header__sort-teg"
      onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default SortTeg
