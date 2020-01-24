import {Reducer} from "react";
import {GameActions} from "../actions";

let reducer: Reducer<string, GameActions> = (prevState, action) => {

    //todo add blink on success/fail
    // @ts-ignore
    return action?.nextLetter || ""
}

export default reducer;