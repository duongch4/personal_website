import React from "react";
import homeImg from "../assets/jpg/homeImg.jpg";
import homeImgWebp from "../assets/webp/homeImg.webp";
import resume from "../assets/pdf/BangChiDuong_Resume.pdf";

export const Intro = () => (
    <div className="container-fluid section intro">
        <div className="row">
            <div className="col-lg-4 d-none d-lg-block">
                <picture>
                    <source srcSet={homeImgWebp} type="image/webp" className="home-img img-fluid" />
                    <img loading="lazy" src={homeImg} className="home-img img-fluid" alt="HomeImage" />
                </picture>
            </div>
            <div className="col-lg-8">
                <h1>Hi, I'm Bang Chi Duong!</h1>

                <hr />

                <p>
                    I'm a <strong>Data Scientist</strong> based in Vancouver.
                    <br />
                    I'm keen on building <strong>scalable</strong> products through <strong>cloud and web</strong> services.
                </p>

                <div className="mid-highlight mid-highlight--connect-with-me">Connect with me</div>

                <div className="social-icons-sect">
                    <a href="https://github.com/duongch4/" target="_blank" rel="noopener noreferrer" aria-label="Github Link">
                        <i className="fab fa-github-square social-icons" aria-hidden="true" />
                    </a>
                    <a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top" aria-label="Open Email">
                        <i className="fas fa-envelope-square social-icons" aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/bang-chi-duong/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Link">
                        <i className="fab fa-linkedin social-icons" aria-hidden="true" />
                    </a>
                </div>

                <div>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <button className="resume-button">
                            Resume <i className="far fa-file-pdf pdf-icon" aria-hidden="true" />
                        </button>
                    </a>
                </div>
            </div>

        </div>
    </div>
);
