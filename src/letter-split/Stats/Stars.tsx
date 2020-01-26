import React, {FunctionComponent} from "react";
import goldStarIcon from "./gold-star.svg";
import silverStarIcon from "./silver-star.svg";

const SILVER_STAR_SCORES_STEP = 50;
const GOLD_STAR_SCORES_STEP = SILVER_STAR_SCORES_STEP * 2;


enum StarType {
    GOLD,
    SILVER
}

/**
 * SILVER_STAR_SCORES_STEP(50) for silver and 100 for gold star
 * @param scores
 * @constructor
 */
let Stars: FunctionComponent<{ scores: number }> = ({scores}) => {
    let stars: StarType[] = [];
    let goldCount = Math.trunc(scores / GOLD_STAR_SCORES_STEP);
    for (let i = 0; i < goldCount; i++) {
        stars.push(StarType.GOLD)
    }
    if (scores % (GOLD_STAR_SCORES_STEP) >= SILVER_STAR_SCORES_STEP) {
        stars.push(StarType.SILVER);
    }

    return (
        <div className="fl__stars-area">
            {
                stars.map((type, i) => <div key={i} className="fl__stars-area-star">
                    <img alt="heart" src={type === StarType.SILVER ? silverStarIcon : goldStarIcon} width="30"
                         height="30"/>
                </div>)
            }
        </div>
    );
}
export default Stars