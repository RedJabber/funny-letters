import {createStore} from "redux"
import reducers, {RootState} from "./reducers"
import {LendingActions} from "./LetterLendingTemplate/types"

export default createStore<RootState, LendingActions, {}, {}>(reducers, {})
