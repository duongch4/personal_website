import deepClothImg from "../../../assets/png/deepCloth.png";
import deepClothImgWebp from "../../../assets/webp/deepCloth.webp";
import deepClothPdf from "../../../assets/pdf/DeepCloth_SCA.pdf";
import deepClothVid from "../../../assets/mp4/DeepCloth_SCA.mp4";

export const deepCloth = {
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
};
