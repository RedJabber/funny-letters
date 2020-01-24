import {Reducer} from "react";
import {Actions, GameActions} from "../actions";

const SCORES_INCREMENT = 5;
export let scoresReducer: Reducer<number, GameActions> =
    (scores = 0, {type}) => {
        switch (type) {
            case Actions.CONSONANT_LETTER_GUESSED:
            case Actions.VOWEL_LETTER_GUESSED:
                return scores + SCORES_INCREMENT;
            case Actions.RESTART_GAME:
                return 0;
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