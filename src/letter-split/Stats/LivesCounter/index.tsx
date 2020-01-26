import React, {FunctionComponent} from "react";

import heartIcon from "./heart.svg";
import styles from "./index.module.scss";

const LivesCounter: FunctionComponent<{ livesCount: number }> = ({livesCount}) => {
    let hearts = [];
    for (let i = 0; i < livesCount; i++) hearts.push(null);
    return (
        <div className={styles.livesCounter}>
            {hearts.map((unused, i) => <div key={i} className="fl__stars-area-star">
                <img alt="heart" src={heartIcon} width="30" height="30"/>
            </div>)}
        </div>
    );
};
export default LivesCounter;