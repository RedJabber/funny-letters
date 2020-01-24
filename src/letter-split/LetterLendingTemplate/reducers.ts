import {Actions, LendingActions, LetterDidNotGuessedAction, LetterGuessedAction} from "../actions"
import {StateProps} from "./types"
import {Reducer} from "redux";


// @ts-ignore
let reducers: (guessedAction: Actions) => Reducer<StateProps, LendingActions> =
    guessedAction => {
        function isGuessed(action:LetterGuessedAction | LetterDidNotGuessedAction): action is LetterGuessedAction {
            return action.type === guessedAction;
        }
        return (state: StateProps, action) => {
            console.log(action)
            if (state === undefined) return {resolvedLetters: []};
            if (isGuessed(action)) {
                let {letter} = action;
                return ({resolvedLetters: [...state.resolvedLetters || [], letter]});
            }
            return state;
        };
    };

export default reducers
