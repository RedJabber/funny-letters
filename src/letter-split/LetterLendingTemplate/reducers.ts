import {isGuessed, LendingActions, StateProps} from "./types"
import {Actions, LetterTypes} from "./constants";
import {Reducer} from "redux";


let reducers: (targetType: LetterTypes) => Reducer<StateProps, LendingActions> =
    targetType => (state: StateProps = {resolvedLetters:[]}, action?) => {
        if (isGuessed(action)) {
            let {letterType: receivedLetterType, letter} = action;
            return receivedLetterType === targetType ? ({resolvedLetters: [...state?.resolvedLetters || [], letter]}) : state;
        }
        return state;
    };

export default reducers
