import React, {FunctionComponent} from "react";
// import styles from "../LetterLending/index.module.scss";
import Letter from "./Letter"
import {connect} from "react-redux";
import {RootState} from "../reducers";

let LetterGenerator: FunctionComponent<{ letter: string, letters: string }> = ({letter, letters}) =>
    (
        <div className="fl__creation-area" style={{transform: "translate3d(0, 0, 0)"}}>
            <div className="fl__letter-widget-shadow">{letter}</div>
            <Letter letter={letter || "!"} letters={letters}/>
        </div>
    )
// @ts-ignore
export default connect<{letter: string,}, {}, { letters: string }, RootState>((rootState = {letter:"@"}, ownProps) => ({
    letter: rootState.letter,
    letters: ownProps.letters
}))(LetterGenerator);