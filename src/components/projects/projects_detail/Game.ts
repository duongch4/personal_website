import gameImg from "../../../assets/png/CaptureTheCastle.png";
import gameImgWebp from "../../../assets/webp/CaptureTheCastle.webp";
import gameZipX64 from "../../../assets/7z/CaptureTheCastle-v1-x64.7z";
import gameZipX86 from "../../../assets/7z/CaptureTheCastle-v1-x86.7z";
import gameVideo from "../../../assets/mp4/CaptureTheCastle.mp4";

export const game = {
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
};
