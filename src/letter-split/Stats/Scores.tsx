import React, {FunctionComponent} from "react";
import "./counter.scss"

let Scores: FunctionComponent<{scores:number}> = ({scores})=>(
  <div className="fl__score-counter">{scores}</div>
);
export default Scores