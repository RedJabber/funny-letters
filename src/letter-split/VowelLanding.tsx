import {connect} from "react-redux";
import {DispatchProps, OwnProps, StateProps} from "./LetterLendingTemplate/types";
import {letterDidNotGuess, letterGuessed} from "./LetterLendingTemplate/actions";
import LetterLandingTemplate from "./LetterLendingTemplate";
import {LetterTypes} from "./LetterLendingTemplate/constants";

export default connect<StateProps, DispatchProps, OwnProps>((state: any) =>
        ({resolvedLetters: state.vowels?.resolvedLetters || []}),
    {
        guessed: (letter: string) => letterGuessed(letter, LetterTypes.VOWEL),
        failed: (letter: string) => letterDidNotGuess(letter)
    }
)(LetterLandingTemplate);