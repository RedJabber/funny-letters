import React, {FunctionComponent} from "react";
import styles from "./index.module.scss";
import {useDrop} from "react-dnd"
import {ItemType, LetterDropResult, LetterGuessedOnDrop, LetterGuessFailed} from "../LetterGenerator/types"
import {type as LetterKey} from "../LetterGenerator/constants"
import {OwnProps, StateProps} from "./types"


let LetterLending: FunctionComponent<StateProps & OwnProps> =
    ({lettersSet, colorSchema, resolvedLetters, letterType}) => {
        let isMine = (letter: string) => !!~lettersSet.indexOf(letter.toLowerCase())
        const GUESSED: LetterGuessedOnDrop = {guessed: true, letterType: letterType};
        const FAILED: LetterGuessFailed = {guessed: false};
        const [{isOver}, drop] = useDrop<ItemType, LetterDropResult, any>({
            accept: LetterKey,
            collect: monitor => ({isOver: monitor.isOver(), item: monitor.getItem()}),
            drop: ({letter}): LetterDropResult => isMine(letter) ? GUESSED : FAILED
        });
        return (
            <div ref={drop}
                 className={styles.landing + " " + styles[colorSchema] + (isOver ? " " + styles.letterHover : "")}>
                <div className={styles.lettersSet}>
                    {resolvedLetters?.sort().map((letter, index) => <span key={letter}>{letter}</span>)}
                </div>
            </div>
        )
    }


export default LetterLending;