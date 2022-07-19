import React from "react";
import './sort-teg.scss';

type SortTegProps = {
  text: string;
  onClick: () => void;
}

function SortTeg(props: SortTegProps): JSX.Element {
  return (
    <button
      className="header__sort-teg"
      onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default SortTeg
