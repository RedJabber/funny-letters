import {Actions, GameActions, isLetterAction} from "../actions";

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