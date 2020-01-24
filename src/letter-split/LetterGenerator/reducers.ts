import {Reducer} from "react";
import {LendingActions} from "../actions";

let reducer: Reducer<string, LendingActions> = (prevState, action) => {

    //todo add blink on success/fail
    return action.nextLetter || ""
}

export default reducer;