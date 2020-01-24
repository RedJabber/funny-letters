import {createStore} from "redux"
import reducers, {RootState} from "./reducers"
import {GameActions} from "./actions"

// @ts-ignore
export default createStore<RootState, GameActions, {}, {}>(reducers, {
    lives: 5,
    scores: 0,
    consonants: {resolvedLetters: []},
    vowels: {resolvedLetters: []},
    letter: null
})