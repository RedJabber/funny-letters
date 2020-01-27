import {createStore} from "redux"
import reducers, {RootState} from "./reducers"
import {GameActions} from "./actions"
import {GuessState} from "./LetterGenerator/types";

// @ts-ignore
export default createStore<RootState, GameActions, {}, {}>(reducers, {
    lives: 5,
    scores: 0,
    consonants: {resolvedLetters: []},
    vowels: {resolvedLetters: []},
    letter: null,
    lastGuessState: GuessState.NONE
})