import React, {FunctionComponent} from 'react';
import Scores from "./Stats"
import LetterGenerator from "./LetterGenerator"
import "./styles.scss"
import styles from "./index.module.scss"

import TouchBackend from "react-dnd-touch-backend"
import {DndProvider} from "react-dnd"
import ConsonantsLanding from "./ConsonantsLanding";
import VowelLanding from "./VowelLanding";

interface GameSettings {
    consonants:string, vowels:string
}

const Luft = () => (<div className="fl__landing-space" />)

const LetterSplitGame: FunctionComponent<GameSettings> = ({consonants, vowels}) => {

    return (
        <div className={styles.gameArea}>
            <Scores />
            <DndProvider backend={TouchBackend}
                         options={({enableMouseEvents: true, ignoreContextMenu: true, enableHoverOutsideTarget: true})}>
                <div className="fl__landings">
                    <Luft />
                    <ConsonantsLanding colorSchema="consonant" lettersSet={consonants} />
                    <Luft />
                    <VowelLanding colorSchema="vowel" lettersSet={vowels} />
                    <Luft />
                </div>
                <LetterGenerator letters={consonants + vowels}/>
            </DndProvider>
        </div>
    )
}

export default LetterSplitGame;