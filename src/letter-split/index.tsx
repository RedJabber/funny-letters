import React, {FunctionComponent} from 'react';
import Scores from "./Stats"
import LetterGenerator from "./LetterGenerator"
import "./styles.scss"
import styles from "./index.module.scss"

import TouchBackend from "react-dnd-touch-backend"
import {DndProvider} from "react-dnd"
import ConsonantsLanding from "./ConsonantsLanding";
import VowelLanding from "./VowelLanding";
import GameOver from "./GameOver";
import {connect} from "react-redux";
import {RootState} from "./reducers";

interface GameSettings {
    consonants: string,
    vowels: string
}

interface State {
    lives: number
}

const Luft = () => (<div className="fl__landing-space"/>)

const LetterSplitGame: FunctionComponent<GameSettings & State> = ({consonants, vowels, lives}) => {

    return (
        <div className={styles.gameArea}>
            <Scores/>
            {
                (lives > 0) ?
                    (<DndProvider backend={TouchBackend}
                                  options={({
                                      enableMouseEvents: true,
                                      ignoreContextMenu: true,
                                      enableHoverOutsideTarget: true
                                  })}>
                        <div className="fl__landings">
                            <Luft/>
                            <ConsonantsLanding colorSchema="consonant" lettersSet={consonants}/>
                            <Luft/>
                            <VowelLanding colorSchema="vowel" lettersSet={vowels}/>
                            <Luft/>
                        </div>
                        <LetterGenerator letters={consonants + vowels}/>
                    </DndProvider>) :
                    <GameOver/>
            }
        </div>
    )
}

export default connect<State, {}, GameSettings, RootState>(({lives}, {vowels, consonants}) => ({
    lives: lives.lives,
    vowels,
    consonants
}))(LetterSplitGame);