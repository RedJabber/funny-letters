import {connect} from "react-redux";
import {OwnProps, StateProps} from "./LetterLendingTemplate/types";
import LetterLandingTemplate from "./LetterLendingTemplate";
import {RootState} from "./reducers";
import {LetterTypes} from "./LetterLendingTemplate/constants";

export default connect<StateProps, {}, OwnProps, RootState>(
    state => ({
        resolvedLetters: state.consonants.resolvedLetters,
        letterType: LetterTypes.CONSONANT
    }))(LetterLandingTemplate);