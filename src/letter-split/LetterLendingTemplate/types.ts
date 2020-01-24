import {LetterTypes} from "./constants";

export interface StateProps {
    resolvedLetters?: string[],
    letterType: LetterTypes
}

export interface OwnProps {
    colorSchema: string
    lettersSet: string
}
