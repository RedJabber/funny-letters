import {combineReducers} from "redux";
import {livesReducer, scoresReducer} from "./Stats/reducers";
import {lastGuessStateReducer, letterReducer, resolvedLettersReducer} from "./LetterGenerator/reducers";
import lendingReducer from "./LetterLendingTemplate/reducers";
import {StateProps as LettersLandingState} from "./LetterLendingTemplate/types";
import {Actions} from "./actions";
import {GuessState} from "./LetterGenerator/types";
import {ScoresProps} from "./Stats/types";

export type RootState = Readonly<{
    scores: ScoresProps,
    lives: number,
    consonants: LettersLandingState,
    vowels: LettersLandingState,
    letter?: string
    resolvedLetters: Set<string>
    lastGuessState: GuessState
}>

export default combineReducers({
    scores: scoresReducer,
    lives: livesReducer,
    vowels: lendingReducer(Actions.VOWEL_LETTER_GUESSED),
    consonants: lendingReducer(Actions.CONSONANT_LETTER_GUESSED),
    letter: letterReducer,
    resolvedLetters: resolvedLettersReducer,
    lastGuessState: lastGuessStateReducer,
});