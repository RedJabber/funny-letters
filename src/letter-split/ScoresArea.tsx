import React, {FunctionComponent} from "react";

let ScoresArea: FunctionComponent<{ scores: number, lives: number }> = () => (
    <div className="fl__score-area">
        <span className="fl__title">Р<span>а</span>ск<span>и</span>д<span>a</span>йк<span>a</span></span>
    </div>
);
export default ScoresArea