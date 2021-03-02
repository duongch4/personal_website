import imageCompressionImg from "../assets/png/imageCompression.png";
import imageCompressionImgWebp from "../assets/webp/imageCompression.webp";

import deepClothImg from "../assets/png/deepCloth.png";
import deepClothImgWebp from "../assets/webp/deepCloth.webp";

import movieAppImg from "../assets/png/movieApp.png";
import movieAppImgWebp from "../assets/webp/movieApp.webp";

import multipleClassifiersImg from "../assets/png/multipleClassifiers.png";
import multipleClassifiersImgWebp from "../assets/webp/multipleClassifiers.webp";

import objectDetectionImg from "../assets/jpg/objectDetection.jpg";
import objectDetectionImgWebp from "../assets/webp/objectDetection.webp";

import gameImg from "../assets/png/CaptureTheCastle.png";
import gameImgWebp from "../assets/webp/CaptureTheCastle.webp";

import disneyImg from "../assets/png/disney.png";
import disneyImgWebp from "../assets/webp/disney.webp";

import disneyIcon from "../assets/svg/mickey.svg";

import deepClothPdf from "../assets/pdf/DeepCloth_SCA.pdf";
import deepClothVid from "../assets/mp4/DeepCloth_SCA.mp4";

import gameZipX64 from "../assets/7z/CaptureTheCastle-v1-x64.7z";
import gameZipX86 from "../assets/7z/CaptureTheCastle-v1-x86.7z";
import gameVideo from "../assets/mp4/CaptureTheCastle.mp4";

import prmt5Img from "../assets/png/prmt5.png";
import prmt5ImgWebp from "../assets/webp/prmt5.webp";
import prmt5Pdf from "../assets/pdf/PRMT5_NatureCommun.pdf";

export type LinkName = {
    id: string;
    link: string;
};

export type ProjectLinks = {
    description?: string;
    repo?: LinkName;
    pdf?: LinkName;
    video?: LinkName;
    zipX64?: LinkName;
    zipX86?: LinkName;
};

export type ProjectInfo = {
    image: {
        webp: any;
        norm: any;
    };
    altStr: string;
    title: string;
    description: string[];
    languages: string[];
    icon: string;
    links: ProjectLinks;
};

export type ProjectsInfo = {
    [id: string]: ProjectInfo;
};

export const projectsInfo: ProjectsInfo = {
    prmt5: {
        image: {
            webp: prmt5ImgWebp,
            norm: prmt5Img
        },
        altStr: "PRMT5 Image",
        title: "Drug Discovery",
        description: ["PRMT5 inhibition", "disrupts splicing and", "stemness in glioblastoma"],
        languages: ["R, MSqRob, GSEA"],
        icon: "fas fa-dna",
        links: {
            description: "https://www.nature.com/articles/s41467-021-21204-5",
            pdf: { id: "Paper", link: prmt5Pdf },
            repo: { id: "My Contribution Repo", link: "https://github.com/duongch4/genomics-proteomics-analysis/" }
        }
    },
    disney: {
        image: {
            webp: disneyImgWebp,
            norm: disneyImg
        },
        altStr: "Disney Image",
        title: "The Disney Story",
        description: ["Disney Data Visualisation"],
        languages: ["JavaScript, D3"],
        icon: disneyIcon,
        links: {
            repo: { id: "Repo", link: "https://github.com/duongch4/cs436-disney/" },
            description: "https://duongch4.github.io/cs436-disney/"
        }
    },
    game: {
        image: {
            webp: gameImgWebp,
            norm: gameImg
        },
        altStr: "Capture The Castle Image",
        title: "Capture The Castle",
        description: ["2D 2-Player Game"],
        languages: ["C++, OpenGL"],
        icon: "fas fa-gamepad",
        links: {
            repo: { id: "Repo", link: "https://github.com/duongch4/capture_the_castle/" },
            zipX64: { id: "Executable Zip (x64)", link: gameZipX64 },
            zipX86: { id: "Executable Zip (x86)", link: gameZipX86 },
            video: { id: "Gameplay", link: gameVideo }
        }
    },
    deepCloth: {
        image: {
            webp: deepClothImgWebp,
            norm: deepClothImg
        },
        altStr: "Deep Cloth Image",
        title: "Subspace Neural Physics",
        description: ["Fast Data-Driven", "Interactive Simulation"],
        languages: ["Python, C++"],
        icon: "fas fa-gamepad",
        links: {
            description: "https://dl.acm.org/citation.cfm?id=3340245",
            pdf: { id: "Paper", link: deepClothPdf },
            video: { id: "Video", link: deepClothVid }
        }
    },
    movieApp: {
        image: {
            webp: movieAppImgWebp,
            norm: movieAppImg
        },
        altStr: "Movie App Image",
        title: "Movies Review App",
        description: ["Browse/Review Movies"],
        languages: ["MongoDB, Express", "React, NodeJS"],
        icon: "fas fa-search",
        links: {
            description: "https://cs490-project-movie.herokuapp.com/",
            repo: { id: "Repo", link: "https://github.com/duongch4/mern-passport-dev/" }
        }
    },
    objectDetection: {
        image: {
            webp: objectDetectionImgWebp,
            norm: objectDetectionImg
        },
        altStr: "Object Detection Image",
        title: "Object Detection",
        description: ["Cars Detection Model"],
        languages: ["Python, OpenCV"],
        icon: "fas fa-search",
        links: { repo: { id: "Repo", link: "https://github.com/duongch4/objectDetection/" } }
    },
    imageCompression: {
        image: {
            webp: imageCompressionImgWebp,
            norm: imageCompressionImg
        },
        altStr: "Lossy Image Compression Image",
        title: "Lossy Image Compression",
        description: ["Lossy Image Compressor"],
        languages: ["C++"],
        icon: "far fa-image fa-lg",
        links: { repo: { id: "Repo", link: "https://github.com/duongch4/lossy-image-compression/" } }
    },
    multipleClassifiers: {
        image: {
            webp: multipleClassifiersImgWebp,
            norm: multipleClassifiersImg
        },
        altStr: "Multiple Classifers Image",
        title: "Multiple Classifiers",
        description: ["Cancer Classifiers"],
        languages: ["R, ggplot2"],
        icon: "fas fa-dna",
        links: { repo: { id: "Repo", link: "https://github.com/duongch4/mammographic-classification/" } }
    },
};
