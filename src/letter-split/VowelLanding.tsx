import {connect} from "react-redux";
import {DispatchProps, OwnProps, StateProps} from "./LetterLendingTemplate/types";
import {letterDidNotGuess, letterGuessed} from "./actions";
import LetterLandingTemplate from "./LetterLendingTemplate";
import {LetterTypes} from "./LetterLendingTemplate/constants";
import {RootState} from "./reducers";

export default connect<StateProps, DispatchProps, OwnProps, RootState>(state =>
        ({resolvedLetters: state.vowels?.resolvedLetters || []}),
    {
        guessed: (letter: string) => letterGuessed(letter, LetterTypes.VOWEL),
        failed: (letter: string) => letterDidNotGuess(letter)
    }
)(LetterLandingTemplate);