import {createStore} from "redux"
import reducers, {RootState} from "./reducers"
import {LendingActions} from "./actions"

// @ts-ignore
export default createStore<RootState, LendingActions, {}, {}>(reducers, {
    lives: 5,
    scores: 0,
    consonants: {resolvedLetters: []},
    vowels: {resolvedLetters: []},
    letter: null
})