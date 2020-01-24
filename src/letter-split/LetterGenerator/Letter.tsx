import React, {FunctionComponent} from "react";
import {useDrag} from "react-dnd"
import {ItemType, LetterDropResult} from "./types"
import {type} from "./constants"
import {LetterTypes} from "../LetterLendingTemplate/constants";
import {connect} from "react-redux";
import {RootState} from "../reducers";
import {letterDidNotGuess, letterGuessedFactory} from "../actions"

type OwnProps = { letter: string };
type DispatchProps = {
    guessed: (letter: string, letterType: LetterTypes) => void
    failed: () => void
}
const Letter: FunctionComponent<OwnProps & DispatchProps> = ({letter, guessed, failed}) => {
    const [{isDragging}, drag] = useDrag<ItemType, LetterDropResult, { isDragging: boolean }>({
        item: {letter, type: type},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {

            let dropResult = monitor.getDropResult();
            if (dropResult == null) {
                return;
            }
            if (dropResult.guessed) {
                return guessed(letter, dropResult.letterType);
            }
            failed()
        }
    });
    return (
        <div ref={drag} className="fl__letter-widget new"
             style={isDragging ? {opacity: 0.8, color: "#333", backgroundColor: "wheat"} : {}}>{letter}</div>
    )
}

const consonantLetterGuessed = letterGuessedFactory(LetterTypes.CONSONANT);
const vowelLetterGuessed = letterGuessedFactory(LetterTypes.VOWEL);
const createLetterGenerator = (letters:string) =>()=> letters[Math.floor(Math.random() * letters.length)].toUpperCase();
// @ts-ignore
export default connect<{}, {guessed, failed}, { letters: string, letter: string}, RootState>(
    ({letter}, {letters}) => {
        return ({letter: letter || createLetterGenerator(letters)()});
    },
    (dispatch, {letters}): DispatchProps => {

        let generateNextLetter = createLetterGenerator(letters)
        return {
            guessed(letter, letterType) {
                let guessed = letterType === LetterTypes.CONSONANT ? consonantLetterGuessed : vowelLetterGuessed;
                dispatch(guessed(letter, generateNextLetter()))
            },
            failed() {
                dispatch(letterDidNotGuess(generateNextLetter()))
            }
        }
    })(Letter);