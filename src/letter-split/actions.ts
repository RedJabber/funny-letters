import {LetterTypes} from "./LetterLendingTemplate/constants"
import {Action} from "redux";

export enum Actions {
    LETTER_GUESSED,
    LETTER_DIDNT_GUESSED
}

export interface LetterGuessedAction extends Action<Actions> {
    type: typeof Actions.LETTER_GUESSED,
    letter: string,
    letterType: LetterTypes
}

export interface LetterDidNotGuessedAction extends Action<Actions> {
    type: typeof Actions.LETTER_DIDNT_GUESSED,
    letter: string
}

export function isGuessed(action: LendingActions): action is LetterGuessedAction {
    return action.type === Actions.LETTER_GUESSED
}

export type LendingActions = LetterGuessedAction | LetterDidNotGuessedAction

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

