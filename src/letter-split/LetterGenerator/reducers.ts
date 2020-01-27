import {Actions, GameActions, isLetterAction} from "../actions";
import {GuessState} from "./types";

export function letterReducer(prevState: string, action: GameActions): string {
    return isLetterAction(action) && action.nextLetter || ""
}

export function resolvedLettersReducer(prevState = new Set<string>(), action: GameActions): Set<string> {

    switch (action.type) {
        case Actions.CONSONANT_LETTER_GUESSED:
        case Actions.VOWEL_LETTER_GUESSED:
        case Actions.LETTER_DIDNT_GUESSED:
            if (!isLetterAction(action)) return prevState;
            let state = new Set<string>();
            prevState.forEach((value: string) => state.add(value))
            action.letter && state.add(action.letter)
            return state;
        case Actions.RESTART_GAME:
            return new Set<string>();
    }
    return prevState
}

export function lastGuessStateReducer(prevState = GuessState.NONE, action: GameActions): GuessState {

    switch (action.type) {
        case Actions.CONSONANT_LETTER_GUESSED:
        case Actions.VOWEL_LETTER_GUESSED:
            return GuessState.GUESSED;
        case Actions.LETTER_DIDNT_GUESSED:
            return GuessState.FAILED;
        case Actions.RESTART_GAME:
            return GuessState.NONE;
    }
    return prevState
}