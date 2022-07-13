import React from "react";
import './sort-on.scss';

type SortOnProps = {
  on: string;
}

function SortOn({on}: SortOnProps): JSX.Element {
  return(
    <button className="sort__on">{on}</button>
  )
}

export default SortOn
