import {connect} from "react-redux";
import {DispatchProps} from "./LetterLendingTemplate/types";
import {OwnProps, StateProps} from "./LetterLendingTemplate/types";
import {letterDidNotGuess, letterGuessed} from "./actions";
import LetterLandingTemplate from "./LetterLendingTemplate";
import {LetterTypes} from "./LetterLendingTemplate/constants";
import {RootState} from "./reducers";

export default connect<StateProps, DispatchProps, OwnProps, RootState>(state =>
        ({
            resolvedLetters: state.consonants.resolvedLetters,
            colorSchema: LetterTypes.CONSONANT
        }),
    {
        guessed: (letter: string) => letterGuessed(letter, LetterTypes.CONSONANT),
        failed: (letter: string) => letterDidNotGuess(letter)
    }
)(LetterLandingTemplate);