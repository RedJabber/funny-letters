import {connect} from "react-redux";
import {OwnProps, StateProps} from "./LetterLendingTemplate/types";
import LetterLandingTemplate from "./LetterLendingTemplate";
import {RootState} from "./reducers";
import {LetterTypes} from "./LetterLendingTemplate/constants";

export default connect<StateProps, {}, OwnProps, RootState>(
    state => ({
        resolvedLetters: state.vowels.resolvedLetters,
        letterType: LetterTypes.VOWEL
    }))(LetterLandingTemplate);