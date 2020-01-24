import {DragObjectWithType} from "react-dnd";
import {LetterTypes} from "../LetterLendingTemplate/constants";

export interface ItemType extends DragObjectWithType {
    letter: string
}

export interface LetterGuessedOnDrop {
    readonly guessed: true
    letterType: LetterTypes
}

export interface LetterGuessFailed {
    readonly guessed: false;
}
export type LetterDropResult = LetterGuessedOnDrop | LetterGuessFailed
