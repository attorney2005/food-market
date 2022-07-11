import React from "react";
import './sort-button.scss';

type SortButtonProps = {
  text: string;
  onClick: () => void;
}

function SortButton(props: SortButtonProps): JSX.Element {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default SortButton
