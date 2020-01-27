import React, {FunctionComponent, useEffect, useRef} from "react";
import styles from "./index.module.scss"
import {gsap} from "gsap";

interface ScoresDiffProps {diff: number}

let ScoresDiff: FunctionComponent<ScoresDiffProps> = ({diff}) => {
    let el = useRef(null)
    useEffect(() => {
        if (diff === 0) return () => {}
        let timeline = gsap.timeline()
            .fromTo(el.current, {opacity: 0, color: "#080"}, {
                opacity: 1,
                ease: "expo.out",
                duration: .2
            })
            .to(el.current, .4, {opacity:.3, ease: "expo.in",});
        return ()=>{timeline.kill()}
    })
    return (
        diff > 0 ? <div ref={el} className={styles.diffCounter}>+{diff}</div> : <span/>)
}
export default ScoresDiff