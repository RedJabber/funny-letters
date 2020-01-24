import {LetterTypes} from "./LetterLendingTemplate/constants"
import {Action} from "redux";

export enum Actions {
    CONSONANT_LETTER_GUESSED,
    VOWEL_LETTER_GUESSED,
    LETTER_DIDNT_GUESSED,
    RESTART_GAME
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
export interface RestartAction extends Action<Actions> {
    type: typeof Actions.RESTART_GAME
}

export type GameActions = ConsonantLetterGuessedAction | VowelLetterGuessedAction | LetterDidNotGuessedAction | RestartAction

export let letterGuessedFactory = (letterType: LetterTypes)=> {
    const type = letterType === LetterTypes.CONSONANT ? Actions.CONSONANT_LETTER_GUESSED : Actions.VOWEL_LETTER_GUESSED;
    return (letter: string, nextLetter: string): GameActions => {
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

