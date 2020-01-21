import React, {FunctionComponent} from "react";
import styles from "./index.module.scss";
import {useDrop} from "react-dnd"
import {ItemType} from "../LetterGenerator/types"
import {type as LetterKey} from "../LetterGenerator/Letter"
import {DispatchProps, OwnProps, StateProps} from "./types"
import {ResolveThunks} from "react-redux";


let LetterLending: FunctionComponent<StateProps & ResolveThunks<DispatchProps> & OwnProps> =
    ({lettersSet, colorSchema, resolvedLetters, guessed, failed}) => {
        let isMine = (letter: string) => !!~lettersSet.indexOf(letter.toLowerCase())
        const [{isOver}, drop] = useDrop<ItemType, void, any>({
            accept: LetterKey,
            collect: monitor => ({isOver: monitor.isOver(), item: monitor.getItem()}),
            drop(item) {
                if (isMine(item.letter)) {
                    guessed(item.letter)
                }
                else {
                    failed(item.letter);
                }
            }
        });
        return (
            <div ref={drop} className={styles.landing + " " + styles[colorSchema]}
                 style={isOver ? {borderColor: "gray"} : {}}>
                <div className={styles.lettersSet}>
                    {resolvedLetters?.map((letter, index) => <span key={index}>{letter}</span>)}
                </div>
            </div>
        )
    }


export default LetterLending;