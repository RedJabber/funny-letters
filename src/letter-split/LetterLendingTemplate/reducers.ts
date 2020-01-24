import {Actions, GameActions, LetterGuessedAction} from "../actions"
import {StateProps} from "./types"
import {Reducer} from "redux";


// @ts-ignore
let reducers: (guessedAction: Actions) => Reducer<StateProps, GameActions> =
    guessedAction => {
        function isGuessed(action: GameActions): action is LetterGuessedAction {
            return action.type === guessedAction;
        }

        return (state: StateProps, action) => {
            if (state === undefined) return {resolvedLetters: []};
            if (isGuessed(action)) {
                let {letter} = action;
                return ({resolvedLetters: [...state.resolvedLetters || [], letter]});
            }
            if (action.type === Actions.RESTART_GAME) {
                return ({resolvedLetters: []})
            }
            return state;
        };
    };

export default reducers
