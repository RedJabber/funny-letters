import React, {Component} from "react";
import "./counter-diff.scss"
const ANIMATION_TIME = 400;
interface ScoresDiffProps { diff: number }

class ScoresDiff extends Component<ScoresDiffProps, {blink: boolean}> {
    constructor(props: ScoresDiffProps) {
        super(props);
        let {diff} = props;
        this.state = {blink: diff > 0};
    }

    render(){
        if (this.state.blink) {
            setTimeout(() => this.setState({blink: false}), ANIMATION_TIME);
        }
        return (
            this.state.blink ? <div className="fl__score-counter-diff inc-animate">{this.props.diff}</div>
                : <div className="fl__score-counter-diff"/>
        );
    }


}
export default ScoresDiff