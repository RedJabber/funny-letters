import {Actions, LetterTypes} from "./constants"
import {LetterDidNotGuessedAction, LetterGuessedAction} from "./types";

export function letterGuessed(letter: string, letterType: LetterTypes): LetterGuessedAction {
    return {
        type: Actions.LETTER_GUESSED,
        letter,
        letterType
    }
}

export function letterDidNotGuess(letter: string): LetterDidNotGuessedAction {
    return {
        type: Actions.LETTER_DIDNT_GUESSED,
        letter
    }
}

