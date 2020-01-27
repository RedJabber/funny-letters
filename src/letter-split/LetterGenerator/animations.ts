import {gsap} from "gsap";

export const createFailAnimation = (el: React.MutableRefObject<null>) =>
    gsap.timeline()
        .to(el.current, .1, {color: "#900"})
        .to(el.current, .3, {
            color: "#660000",
            borderColor: "#CC0000",
            background: "#FF8080",
        })
        .to(el.current, .1, {
            color: "#900",
            borderColor: "#888",
            background: "#E6CCB3"
        })
        .to(el.current, .1, {color: "#916108"})

export const createSuperAnimation = (el: React.MutableRefObject<null>) =>
    gsap.timeline()
        .to(el.current, .1, {color: "#090"})
        .to(el.current, .3, {
            color: "#060",
            borderColor: "#0C0",
            background: "#6F6",
        })
        .to(el.current, .1, {
            color: "#090",
            borderColor: "#888",
            background: "#E6CCB3"
        })
        .to(el.current, .1, {color: "#916108"})

export const DO_NOTHING = () => {};