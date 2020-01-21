import {LetterDidNotGuessedAction, LetterGuessedAction} from "../actions";

export interface StateProps {
    resolvedLetters?: string[]
}

export interface OwnProps {
    colorSchema: string
    lettersSet: string
}

export type DispatchProps = {
    guessed: (letter: string) => LetterGuessedAction,
    failed: (letter: string) => LetterDidNotGuessedAction,
}