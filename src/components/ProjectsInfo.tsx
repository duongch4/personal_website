import * as bioinformaticsImg from "../assets/png/bioinformatics.png";
import * as imageCompressionImg from "../assets/png/imageCompression.png";
import * as deepClothImg from "../assets/png/deepCloth.png";
import * as movieAppImg from "../assets/png/movieApp.png";
import * as multipleClassifiersImg from "../assets/png/multipleClassifiers.png";
import * as objectDetectionImg from "../assets/jpg/objectDetection.jpg";
import * as gameImg from "../assets/png/CaptureTheCastle.png";

import * as deepClothPdf from "../assets/pdf/DeepClothSCA.pdf";
import * as deepClothVid from "../assets/mp4/DeepClothSCA.mp4";

import * as gameZip_x64 from "../assets/7z/CaptureTheCastle-v1-x64.7z";
import * as gameZip_x86 from "../assets/7z/CaptureTheCastle-v1-x86.7z";
import * as gameVideo from "../assets/mp4/CaptureTheCastle.mp4";

export type LinkName = {
    id: string,
    link: string
};

export type ProjectLinks = {
    description?: string,
    repo?: LinkName,
    pdf?: LinkName,
    video?: LinkName,
    zip_x64?: LinkName,
    zip_x86?: LinkName
};

export type ProjectInfo = {
    image: string,
    altStr: string,
    title: string,
    description: string[],
    languages: string[],
    icon: string,
    links: ProjectLinks
};

export type ProjectsInfo = {
    [id: string]: ProjectInfo
};

export const projectsInfo: ProjectsInfo = {
    game: {
        image: gameImg,
        altStr: "Capture The Castle Image",
        title: "Capture The Castle",
        description: ["2D Game"],
        languages: ["C++, OpenGL"],
        icon: "fas fa-gamepad",
        links: {
            zip_x64: { id: "Executable Zip (x64)", link: gameZip_x64 },
            zip_x86: { id: "Executable Zip (x86)", link: gameZip_x86 },
            video: { id: "Gameplay", link: gameVideo }
        }
    },
    research: {
        image: deepClothImg,
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
        image: movieAppImg,
        altStr: "Movie App Image",
        title: "Browse/Review Movies",
        description: ["Browse/Review Movies"],
        languages: ["MongoDB, Express", "React, NodeJS"],
        icon: "fas fa-search",
        links: {
            description: "https://cs490-project-movie.herokuapp.com/",
            repo: { id: "Repo", link: "https://github.com/duongch4/mern-passport-dev/" }
        }
    },
    objectDetection: {
        image: objectDetectionImg,
        altStr: "Object Detection Image",
        title: "Object Detection",
        description: ["Detect cars within images"],
        languages: ["Python, OpenCV"],
        icon: "fas fa-search",
        links: { repo: { id: "Repo", link: "https://github.com/duongch4/objectDetection/" } }
    },
    imageCompression: {
        image: imageCompressionImg,
        altStr: "Lossy Image Compression Image",
        title: "Lossy Image Compression",
        description: ["Compress images"],
        languages: ["C++"],
        icon: "far fa-image fa-lg",
        links: { repo: { id: "Repo", link: "https://github.com/duongch4/lossy-image-compression/" } }
    },
    bioinformatics: {
        image: bioinformaticsImg,
        altStr: "Bioinformatics Image",
        title: "Bioinformatics",
        description: ["Analyse cancer genomics"],
        languages: ["R, edgeR", "ggplot2, MSqRob, GSEA"],
        icon: "fas fa-dna",
        links: { repo: { id: "Repo", link: "https://github.com/duongch4/genomics-proteomics-analysis/" } }
    },
    multipleClassifiers: {
        image: multipleClassifiersImg,
        altStr: "Multiple Classifers Image",
        title: "Multiple Classifiers",
        description: ["Classify cancer", "benign/malignant"],
        languages: ["R, ggplot2"],
        icon: "fas fa-dna",
        links: { repo: { id: "Repo", link: "https://github.com/duongch4/mammographic-classification/" } }
    },
};