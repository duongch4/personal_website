import objectDetectionImg from "../../../assets/jpg/objectDetection.jpg";
import objectDetectionImgWebp from "../../../assets/webp/objectDetection.webp";

export const objectDetection = {
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
};
