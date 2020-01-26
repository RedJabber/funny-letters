import React, {FunctionComponent} from "react";
import {connect} from "react-redux";
import {DragSourceMonitor, useDrag} from "react-dnd"
import {ItemType, LetterDropResult} from "./types"
import {type} from "./constants"
import {LetterTypes} from "../LetterLendingTemplate/constants";
import {RootState} from "../reducers";
import {letterDidNotGuess, letterGuessedFactory} from "../actions"
import styles from "./index.module.scss"

type OwnProps = {
    letter: string
    letters: string
    resolvedLetters: Set<string>
};
type DispatchProps = {
    guessed: (letter: string, letterType: LetterTypes) => void
    failed: (letter: string) => void
}
export type StateProps = {}

const Letter: FunctionComponent<StateProps & OwnProps & DispatchProps> = ({letter, guessed, failed}: StateProps & OwnProps & DispatchProps) => {
    const [{isDragging}, drag] = useDrag<ItemType, LetterDropResult, { isDragging: boolean }>({
        item: {letter, type: type},
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (ignored: any, monitor: DragSourceMonitor) => {
            let dropResult: LetterDropResult = monitor.getDropResult();
            if (dropResult == null) {
                return;
            }
            if (dropResult.guessed) {
                guessed(letter, dropResult.letterType);
                return;
            }
            failed(letter)
        }
    });
    return (
        <div ref={drag} className={styles.letterNew}
             style={isDragging ? {opacity: 0.8, color: "#333", backgroundColor: "wheat"} : {}}>{letter}</div>
    )
}

const consonantLetterGuessed = letterGuessedFactory(LetterTypes.CONSONANT);
const vowelLetterGuessed = letterGuessedFactory(LetterTypes.VOWEL);
const createLetterGenerator = (letters: string) => () => letters[Math.floor(Math.random() * letters.length)].toUpperCase();

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    (ignored, {letters, letter}) => ({letter: letter || createLetterGenerator(letters)()}),
    (dispatch, {letters, resolvedLetters}: OwnProps): DispatchProps => {
        let generateNextLetter = createLetterGenerator(letters)
        let nextLetter = generateNextLetter();
        return {
            guessed(letter, letterType) {
                let guessed = letterType === LetterTypes.CONSONANT ? consonantLetterGuessed : vowelLetterGuessed;
                dispatch(guessed(letter, !resolvedLetters.has(letter), nextLetter))
            },
            failed(letter) {
                dispatch(letterDidNotGuess(letter, !resolvedLetters.has(letter), nextLetter))
            }
        }
    })(Letter);