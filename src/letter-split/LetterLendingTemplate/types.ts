import {Actions, LetterTypes} from "./constants"
import {Action} from "redux";

export interface LetterGuessedAction extends Action<Actions> {
    type: typeof Actions.LETTER_GUESSED,
    letter: string,
    letterType: LetterTypes
}

export interface LetterDidNotGuessedAction extends Action<Actions> {
    type: typeof Actions.LETTER_DIDNT_GUESSED,
    letter: string
}

export interface StateProps {
    resolvedLetters?: string[]
}

export function isGuessed(action:LendingActions): action is LetterGuessedAction  {
  return action.type === Actions.LETTER_GUESSED
}


export interface OwnProps {
    colorSchema: string
    lettersSet: string
}

export type DispatchProps = {
    guessed: (letter: string) => LetterGuessedAction,
    failed: (letter: string) => LetterDidNotGuessedAction,
}

export interface LendingState {
    resolvedLetters: string[]
}

export type LendingActions = LetterGuessedAction | LetterDidNotGuessedAction


export interface LandingStateProps {
    consonants: { resolvedLetters: string[] }
    vowels: { resolvedLetters: string[] }
}

export interface LandingDispatchProps {
    guessed(letter: string): void

    failed(letter: string): void
}

export interface LendingOwnProps {

}