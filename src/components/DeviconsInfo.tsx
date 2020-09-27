import bootstrapImg from "../assets/svg/devicon-bootstrap.svg";
import cImg from "../assets/svg/devicon-c.svg";
import cplusplusImg from "../assets/svg/devicon-cpp.svg";
import css3Img from "../assets/svg/devicon-css.svg";
import gitImg from "../assets/svg/devicon-git.svg";
import html5Img from "../assets/svg/devicon-html.svg";
import javaImg from "../assets/svg/devicon-java.svg";
import javascriptImg from "../assets/svg/devicon-js.svg";
import pythonImg from "../assets/svg/devicon-python.svg";
import reactImg from "../assets/svg/devicon-react.svg";
import typescriptImg from "../assets/svg/devicon-ts.svg";
import webpackImg from "../assets/svg/devicon-webpack.svg";

export type Devicon = {
    image: any;
    alt: string;
};

type Devicons = {
    [iconName: string]: Devicon;
};

export const deviconsInfo: Devicons = {
    python: {
        image: pythonImg,
        alt: "Python Icon"
    },
    cplusplus: {
        image: cplusplusImg,
        alt: "C++ Icon"
    },
    java: {
        image: javaImg,
        alt: "Java Icon"
    },
    c: {
        image: cImg,
        alt: "C Icon"
    },
    webpack: {
        image: webpackImg,
        alt: "Webpack Icon"
    },
    react: {
        image: reactImg,
        alt: "React Icon"
    },
    html: {
        image: html5Img,
        alt: "HTML5 Icon"
    },
    css: {
        image: css3Img,
        alt: "CSS3 Icon"
    },
    js: {
        image: javascriptImg,
        alt: "JS Icon"
    },
    ts: {
        image: typescriptImg,
        alt: "TS Icon"
    },
    bootstrap: {
        image: bootstrapImg,
        alt: "Bootstrap Icon"
    },
    git: {
        image: gitImg,
        alt: "Git Icon"
    }
};
