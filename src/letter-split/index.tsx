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
}

const Luft = ()=>(<div className="fl__landing-space" />)

const LetterSplitGame: FunctionComponent<GameSettings> = () => (

    <div className={styles.gameArea}>
        <Scores />
        <DndProvider backend={TouchBackend} options={({enableMouseEvents: true})}>
            <div className="fl__landings">
                <Luft />
                <ConsonantsLanding colorSchema="consonant" lettersSet="йцкнгшщзхфвпрлджчсмтб"/>
                <Luft />
                <VowelLanding colorSchema="vowel" lettersSet="уеёыаоэяию"/>
                <Luft />
            </div>
            <LetterGenerator letter="Ф"/>
        </DndProvider>
    </div>

);

export default LetterSplitGame;