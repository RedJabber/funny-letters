import React, {FunctionComponent} from "react";
import styles from "./index.module.scss";

import LivesCounter from "./LivesCounter";
import Scores from "./Scores";
import ScoresDiff from "./ScoresDiff";
import Stars from "./Stars";
import {connect} from "react-redux";
import {RootState} from "../reducers";

type Props = { scores: number, lives: number };
let Stats: FunctionComponent<Props> = ({scores, lives}) => (
    <div className={styles.scoreArea}>
        <span className={styles.title}>Р<span>а</span>ск<span>и</span>д<span>a</span>йк<span>a</span></span>
        <Scores scores={scores}/>
        <ScoresDiff diff={32}/>
        <div className={styles.heartsAndStarsGroup}>
            <Stars scores={scores}/>
            <LivesCounter livesCount={lives}/>
        </div>
    </div>
);
export default connect<Props, {}, {}, RootState>(({scores, lives}) => ({scores, lives}))(Stats)