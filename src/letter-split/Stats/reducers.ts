import {Reducer} from "react";
import {Actions, LendingActions} from "../actions";

const SCORES_INCREMENT = 5;
export let scoresReducer: Reducer<number, LendingActions> =
    (scores = 111, action) =>
        (action.type === Actions.LETTER_GUESSED) ? scores + SCORES_INCREMENT : scores

export let livesReducer: Reducer<number, LendingActions> =
    (lives = 10, action) =>
        (action.type === Actions.LETTER_DIDNT_GUESSED) ? --lives : lives