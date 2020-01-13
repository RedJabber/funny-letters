import React, {FunctionComponent} from "react";
import styles from "./index.module.scss";

import LivesCounter from "./LivesCounter";
import Scores from "./Scores";
import ScoresDiff from "./ScoresDiff";
import Stars from "./Stars";

let Stats: FunctionComponent<{ scores: number, lives: number }> = ({scores, lives}) => (
    <div className={styles.scoreArea}>
        <span className={styles.title}>Р<span>а</span>ск<span>и</span>д<span>a</span>йк<span>a</span></span>
        <Scores scores={scores} />
        <ScoresDiff diff={32} />
        <LivesCounter livesCount={lives}/>
        <Stars scores={scores}/>
    </div>
);
export default Stats