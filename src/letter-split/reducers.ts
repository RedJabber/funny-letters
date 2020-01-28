import {livesReducer, scoresReducer} from "./Stats/reducers";
import {lastGuessStateReducer, letterReducer, resolvedLettersReducer} from "./LetterGenerator/reducers";
import lendingReducer from "./LetterLendingTemplate/reducers";
import {StateProps as LettersLandingState} from "./LetterLendingTemplate/types";
import {Actions, GameActions} from "./actions";
import {GuessState} from "./LetterGenerator/types";
import {ScoresProps} from "./Stats/types";

export type RootState = Readonly<{
    scores: ScoresProps,
    lives: {lives:number, lifeGrowBar: number},
    consonants: LettersLandingState,
    vowels: LettersLandingState,
    letter?: string
    resolvedLetters: Set<string>
    lastGuessState: GuessState
}>


const vowelsReducer = lendingReducer(Actions.VOWEL_LETTER_GUESSED);
const consonantsReducer = lendingReducer(Actions.CONSONANT_LETTER_GUESSED);
export default ((state: RootState, action: GameActions) => {
    let scores = scoresReducer(state.scores, action);
    return {
        scores,
        lives: livesReducer(state.lives.lives, state.lives.lifeGrowBar, scores.scoresDiff, action),
        vowels: vowelsReducer(state.vowels, action),
        consonants: consonantsReducer(state.consonants, action),
        letter: letterReducer(state.letter || "", action),
        resolvedLetters: resolvedLettersReducer(state.resolvedLetters, action),
        lastGuessState: lastGuessStateReducer(state.lastGuessState, action),
    }
});