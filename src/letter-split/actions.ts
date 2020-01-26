import {LetterTypes} from "./LetterLendingTemplate/constants"
import {Action} from "redux";
import {access} from "fs";

export enum Actions {
    CONSONANT_LETTER_GUESSED,
    VOWEL_LETTER_GUESSED,
    LETTER_DIDNT_GUESSED,
    RESTART_GAME
}

export interface LetterAction extends Action<Actions> {
    type: Actions,
    letter: string,
    nextLetter: string,
    firstTime?: boolean
}


export interface ConsonantLetterGuessedAction extends LetterAction {
    type: typeof Actions.CONSONANT_LETTER_GUESSED,
}

export interface VowelLetterGuessedAction extends LetterAction {
    type: typeof Actions.VOWEL_LETTER_GUESSED,
}

export interface LetterDidNotGuessedAction extends LetterAction {
    type: typeof Actions.LETTER_DIDNT_GUESSED,
}

export interface RestartAction extends Action<Actions> {
    type: typeof Actions.RESTART_GAME
}

export type GameActions =
    ConsonantLetterGuessedAction
    | VowelLetterGuessedAction
    | LetterDidNotGuessedAction
    | RestartAction

export function isLetterAction(action: GameActions): action is LetterAction {
    return action.type === Actions.CONSONANT_LETTER_GUESSED ||
        action.type === Actions.LETTER_DIDNT_GUESSED ||
        action.type === Actions.VOWEL_LETTER_GUESSED;
}


export let letterGuessedFactory = (letterType: LetterTypes) => {
    const type = letterType === LetterTypes.CONSONANT ? Actions.CONSONANT_LETTER_GUESSED : Actions.VOWEL_LETTER_GUESSED;
    return (letter: string, isNew: boolean, nextLetter: string): GameActions => {
        return {
            type,
            letter,
            nextLetter,
            firstTime: isNew
        }
    };
}


export function letterDidNotGuess(letter: string, isNew: boolean, nextLetter: string): LetterDidNotGuessedAction {
    return {
        type: Actions.LETTER_DIDNT_GUESSED,
        letter,
        nextLetter,
        firstTime: isNew
    }
}

