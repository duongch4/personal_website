import prmt5Img from "../../../assets/png/prmt5.png";
import prmt5ImgWebp from "../../../assets/webp/prmt5.webp";
import prmt5Pdf from "../../../assets/pdf/PRMT5_NatureCommun.pdf";

export const prmt5 = {
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
};
