import {combineReducers} from "redux";
import {scoresReducer, livesReducer} from "./Stats/reducers";
import lendingReducer from "./LetterLendingTemplate/reducers";
import {LetterTypes} from "./LetterLendingTemplate/constants";

let reducers = combineReducers({
    scores: scoresReducer,
    lives: livesReducer,
    vowels: lendingReducer(LetterTypes.VOWEL),
    consonants: lendingReducer(LetterTypes.CONSONANT)
});
export default reducers;
export type RootState = ReturnType<typeof reducers>