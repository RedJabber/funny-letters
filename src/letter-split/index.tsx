import React, {FunctionComponent} from 'react';
import Scores from "./Stats"
import LetterGenerator from "./LetterGenerator"
import "./styles.scss"
import styles from "./index.module.scss"

import TouchBackend from "react-dnd-touch-backend"
import {DndProvider} from "react-dnd"
import ConsonantsLanding from "./ConsonantsLanding";
import VowelLanding from "./VowelLanding";
import {LetterTypes} from "./LetterLendingTemplate/constants";

interface GameSettings {
}

const LetterSplitGame: FunctionComponent<GameSettings> = () => (

    <div className={styles.gameArea}>
        <Scores scores={267} lives={5}/>
        <DndProvider backend={TouchBackend} options={({enableMouseEvents: true})}>
            <div className="fl__landings">
                <div className="fl__landing-space"/>

                <ConsonantsLanding colorSchema="consonant" lettersSet="йцкнгшщзхфвпрлджчсмтб"/>
                <div className="fl__landing-space"/>
                <VowelLanding colorSchema="vowel" lettersSet="уеёыаоэяию"/>

                {/*
            <div className="fl__landing vowel">
                <div className="ok-letters-set"/>
                <div className="fl__counters_group vowel">
                    <div className="fl__counter success"/>
                    <div className="fl__counter fail"/>
                </div>
            </div>
            */}
                <div className="fl__landing-space"/>
            </div>
            <LetterGenerator letter="Ф"/>
        </DndProvider>
    </div>

);

export default LetterSplitGame;