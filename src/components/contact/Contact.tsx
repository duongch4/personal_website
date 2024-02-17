import React from "react";
import contactImg from "../../assets/png/contactImg.png";
import contactImgWebp from "../../assets/webp/contactImg.webp";
import resume from "../../assets/pdf/bangchiduong_resume.pdf";

export const Contact = () => (
    <div id="contact" className="container-fluid">

        <div className="text-left"><h2>Contact</h2></div>

        <div className="row">
            <picture className="col-sm-6 img-fluid">
                <source srcSet={contactImgWebp} type="image/webp" className="contact-img" />
                <img loading="lazy" src={contactImg} className="contact-img" alt="ContactImage" />
            </picture>

            <div className="col-sm-6 text-center">
                <h3>Let's Talk</h3>
                <p>I'm open to new opportunities and projects.</p>

                <hr />

                <p><a href={resume} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-light">
                        Resume <i className="fas fa-file-pdf pdf-icon" aria-hidden="true" />
                    </button>
                </a></p>

                <p><a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top">
                    <button type="button" className="btn btn-light">
                        Send Email <i className="fas fa-envelope-square social-icons" aria-hidden="true" />
                    </button>
                </a></p>
            </div>

        </div>
    </div>
);
