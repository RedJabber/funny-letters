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

const NEW_LIFE_BORDER = 100;
export let livesReducer =
    (lives: number, lifeGrowBar: number, scoresDiff: number, action: GameActions) => {
        switch (action.type) {
            case Actions.CONSONANT_LETTER_GUESSED:
            case Actions.VOWEL_LETTER_GUESSED:
                lifeGrowBar += scoresDiff
                if (lifeGrowBar >= NEW_LIFE_BORDER) {
                    lives++;
                    lifeGrowBar %= NEW_LIFE_BORDER;
                }
                return {lives, lifeGrowBar}
            case Actions.LETTER_DIDNT_GUESSED:
                return {lives: --lives, lifeGrowBar};
            case Actions.RESTART_GAME:
                return {lives: 5, lifeGrowBar: 0};
            default:
                return {lives, lifeGrowBar};
        }
    }