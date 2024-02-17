import personalWebsiteImage from "../../../assets/png/personalWebsite.png";
import personalWebsiteImageWebp from "../../../assets/webp/personalWebsite.webp";

export const personalWebsite = {
    image: {
        webp: personalWebsiteImageWebp,
        norm: personalWebsiteImage
    },
    altStr: "Personal Website Image",
    title: "Personal Website",
    description: ["https://bangchiduong.com"],
    languages: ["React, TypeScript", "Webpack, Babel"],
    icon: "fas fa-briefcase",
    links: {
        description: "https://bangchiduong.com",
        repo: { id: "Repo", link: "https://github.com/duongch4/personal_website/" }
    }
};
