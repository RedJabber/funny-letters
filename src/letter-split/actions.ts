import {LetterTypes} from "./LetterLendingTemplate/constants"
import {Action} from "redux";

export enum Actions {
    CONSONANT_LETTER_GUESSED,
    VOWEL_LETTER_GUESSED,
    LETTER_DIDNT_GUESSED
}

export interface LetterGuessedAction extends Action<Actions> {
    type: Actions,
    letter: string,
    nextLetter: string,
}

export interface ConsonantLetterGuessedAction extends LetterGuessedAction {
    type: typeof Actions.CONSONANT_LETTER_GUESSED,
}
export interface VowelLetterGuessedAction extends LetterGuessedAction {
    type: typeof Actions.VOWEL_LETTER_GUESSED,
}

export interface LetterDidNotGuessedAction extends Action<Actions> {
    type: typeof Actions.LETTER_DIDNT_GUESSED,
    nextLetter: string,
}

export type LendingActions = ConsonantLetterGuessedAction | VowelLetterGuessedAction | LetterDidNotGuessedAction

export let letterGuessedFactory = (letterType: LetterTypes)=> {
    const type = letterType === LetterTypes.CONSONANT ? Actions.CONSONANT_LETTER_GUESSED : Actions.VOWEL_LETTER_GUESSED;
    return (letter: string, nextLetter: string): LendingActions => {
        return {
            type,
            letter,
            nextLetter
        }
    };
}

export function letterDidNotGuess(nextLetter: string): LetterDidNotGuessedAction {
    return {
        type: Actions.LETTER_DIDNT_GUESSED,
        nextLetter
    }
}

