import {Reducer} from "react";
import {Actions, GameActions, isLetterAction} from "../actions";
import {ScoresProps} from "./types";

const SCORES_INCREMENT = 5;
export let scoresReducer: Reducer<ScoresProps, GameActions> =
    (scores = {scores: 0, scoresDiff: 0}, action) => {
        let {type} = action;
        switch (type) {
            case Actions.CONSONANT_LETTER_GUESSED:
            case Actions.VOWEL_LETTER_GUESSED:
                let scoresDiff = (isLetterAction(action) && action.firstTime) ? 3 * SCORES_INCREMENT : SCORES_INCREMENT
                return {
                    scores: scores.scores + scoresDiff,
                    scoresDiff
                }
            case Actions.LETTER_DIDNT_GUESSED:
                return {
                    ...scores,
                    scoresDiff: 0
                }
            case Actions.RESTART_GAME:
                return {scores: 0, scoresDiff: 0};
            default:
                return scores;
        }
    }

export let livesReducer: Reducer<number, GameActions> =
    (lives = 10, action) => {
        switch (action.type) {
            case Actions.LETTER_DIDNT_GUESSED:
                return --lives;
            case Actions.RESTART_GAME:
                return 5;
            default:
                return lives;
        }
    }