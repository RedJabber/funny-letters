import React, {FunctionComponent, useEffect, useRef} from "react";
import Letter from "./Letter"
import {connect} from "react-redux";
import {RootState} from "../reducers";
import styles from "./index.module.scss"
import {GuessState} from "./types";
import {createFailAnimation, createSuperAnimation, DO_NOTHING} from "./animations";

let LetterGenerator: FunctionComponent<{ letter: string, letters: string, resolvedLetters: Set<string>, lastGuessState: GuessState }> = ({letter, letters, resolvedLetters, lastGuessState = GuessState.NONE}) => {
    let el = useRef(null)
    useEffect(() => {
        if (lastGuessState === GuessState.NONE) return DO_NOTHING;
        if (lastGuessState === GuessState.FAILED) {
            let timeline = createFailAnimation(el);
            return timeline.kill.bind(timeline)
        }
        if (lastGuessState === GuessState.GUESSED) {
            let timeline = createSuperAnimation(el);
            return timeline.kill.bind(timeline)
        }
    })

    return (
        <div ref={el} className={styles.creationArea}>
            <div className={styles.letterShadow}>{letter}</div>
            <Letter letter={letter} letters={letters} resolvedLetters={resolvedLetters}/>
        </div>
    );
}

// @ts-ignore
export default connect<{ letter: string, lastGuessState: GuessState }, {}, { letters: string }, RootState>((rootState = {letter: "@"}, ownProps) => ({
    letter: rootState.letter,
    letters: ownProps.letters,
    resolvedLetters: rootState.resolvedLetters,
    lastGuessState: rootState.lastGuessState
}))(LetterGenerator);