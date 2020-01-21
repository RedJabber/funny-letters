import React, {FunctionComponent} from "react";
import {DragObjectWithType, useDrag} from "react-dnd"
import {ItemType, DropResult} from "./types"

export const type = Symbol("LETTER");

const Letter: FunctionComponent<{ letter: string }> = ({letter}) => {
    const [{isDragging}, drag, connectPreview] = useDrag<ItemType, any, { isDragging: boolean }>({
        item: {letter, type: type},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            console.log(monitor.getDropResult());
        }
    });
    return (
        <div ref={drag} className="fl__letter-widget new"
             style={isDragging ? {opacity: 0.8, color: "#333", backgroundColor:"wheat"} : {}}>{letter}</div>
    )
}

export default Letter;