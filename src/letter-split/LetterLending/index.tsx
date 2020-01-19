import React, {FunctionComponent} from "react";
import styles from "./index.module.scss";
import {useDrop} from "react-dnd"
import {type as LetterKey, ItemType, DropResult} from "../LetterGenerator/Letter"

let LetterLending: FunctionComponent<{ colorSchema: string, lettersSet: string, resolvedLetters: string[]}> =
    ({lettersSet, colorSchema, children, resolvedLetters}) => {
        let isMine = (letter: string)=> !!~lettersSet.indexOf(letter.toLowerCase())
        const [{isOver}, drop] = useDrop<ItemType, DropResult, any>({
            accept: LetterKey,
            collect: monitor => ({isOver: monitor.isOver(), item: monitor.getItem()}),
            drop:((item, monitor) => {
                return ({correct: isMine(item.letter)});
            })
        });
        return (
            <div ref={drop} className={styles.landing + " " + styles[colorSchema]}
                 style={isOver?{borderColor: "gray" } : {}} >
                <div className={styles.lettersSet}>
                    {resolvedLetters.map(letter=><span>{letter}</span>)}
                </div>
            </div>
        )
    }


export default LetterLending;