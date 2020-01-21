import {combineReducers} from "redux";
import lendingReducer from "./LetterLendingTemplate/reducers";
import {LetterTypes} from "./LetterLendingTemplate/constants";

let reducers = combineReducers({
    vowels: lendingReducer(LetterTypes.VOWEL),
    consonants: lendingReducer(LetterTypes.CONSONANT)
});
export default reducers;
export type RootState = ReturnType<typeof reducers>