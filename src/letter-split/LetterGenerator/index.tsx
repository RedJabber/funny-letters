import React, {Component} from "react";
// import styles from "../LetterLending/index.module.scss";
import Letter from "./Letter"
class LetterGenerator extends Component<{letter?: string}, {}> {

    // private isMine(letter: string) {
    //     return !!~this.props.lettersSet.indexOf(letter.toLowerCase());
    // }

    render() {
        return (
            <div className="fl__creation-area" style={{transform: "translate3d(0, 0, 0)"}}>
                <div className="fl__letter-widget-shadow">{this.props.letter}</div>
                <Letter letter={this.props.letter || "!"}/>
            </div>
            )
    }

}

export default LetterGenerator;