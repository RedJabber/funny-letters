import React from "react";
import icon from "./game-over.svg"
import styles from "./index.module.sass"
import {connect} from "react-redux";
import {Actions} from "../actions"

export default connect(null, dispatch => ({
    restartGame: ()=>dispatch({type: Actions.RESTART_GAME})
}))(({restartGame}) => (
    <div className={styles.outerBorder} onClick={restartGame}>
        <img alt={"Game over!"} src={icon} width={190} height={190}/>
    </div>
));