import disneyImg from "../../../assets/png/disney.png";
import disneyImgWebp from "../../../assets/webp/disney.webp";
import disneyIcon from "../../../assets/svg/mickey.svg";

export const disney = {
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
};
