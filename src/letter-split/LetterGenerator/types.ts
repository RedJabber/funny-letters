import {DragObjectWithType} from "react-dnd";

export interface ItemType extends DragObjectWithType {
    letter: string
}
export type DropResult = {
    correct: boolean
}