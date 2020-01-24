import {Reducer} from "react";
import {Actions, LendingActions} from "../actions";

const SCORES_INCREMENT = 5;
export let scoresReducer: Reducer<number, LendingActions> =
    (scores = 0, {type}) =>
        (type === Actions.CONSONANT_LETTER_GUESSED || type === Actions.VOWEL_LETTER_GUESSED)
            ? scores + SCORES_INCREMENT : scores

export let livesReducer: Reducer<number, LendingActions> =
    (lives = 10, action) =>
        (action.type === Actions.LETTER_DIDNT_GUESSED) ? --lives : lives