import movieAppImg from "../../../assets/png/movieApp.png";
import movieAppImgWebp from "../../../assets/webp/movieApp.webp";

export const movieApp = {
    image: {
        webp: movieAppImgWebp,
        norm: movieAppImg
    },
    altStr: "Movie App Image",
    title: "Movies Review App",
    description: ["Browse/Review Movies"],
    languages: ["React, JavaScript", "Express, MongoDB"],
    icon: "fas fa-film",
    links: {
        description: "https://cs490-project-movie.herokuapp.com/",
        repo: { id: "Repo", link: "https://github.com/duongch4/mern-passport-dev/" }
    }
};
