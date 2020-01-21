import {isGuessed, LendingActions} from "../actions"
import {StateProps} from "./types"
import {LetterTypes} from "./constants";
import {Reducer} from "redux";


let reducers: (targetType: LetterTypes) => Reducer<StateProps, LendingActions> =
    targetType =>
        (state:StateProps = {resolvedLetters:[] as string[]}, action) => {
            if (state === undefined) return {};
            if (isGuessed(action)) {
                let {letterType: receivedLetterType, letter} = action;
                return receivedLetterType === targetType ? ({resolvedLetters: [...state?.resolvedLetters || [], letter]}) : state;
            }
            return state;
        };

export default reducers
