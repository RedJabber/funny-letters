import React, {FunctionComponent} from 'react';
import Scores from "./Stats"
import LetterLanding from "./LetterLending"
import LetterGenerator from "./LetterGenerator"
import "./styles.scss"
import styles from "./index.module.scss"

import TouchBackend from "react-dnd-touch-backend"
import {DndProvider} from "react-dnd"

const LetterSplitGame: FunctionComponent = () => (

    <div className={styles.gameArea}>
        <Scores scores={267} lives={5}/>
        <DndProvider backend={TouchBackend} options={({enableMouseEvents: true})}>
            <div className="fl__landings">
                <div className="fl__landing-space"/>

                <LetterLanding colorSchema="consonant" lettersSet="йцкнгшщзхфвпрлджчсмтб" resolvedLetters={['a','b']}/>
                <div className="fl__landing-space"/>
                <LetterLanding colorSchema="vowel" lettersSet="уеёыаоэяию" resolvedLetters={['V', 'x']}/>

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