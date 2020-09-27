import React from "react";

export const Footer = () => (
    <div className="footer bg-dark">
        <div className="social-icons">
            <a className="social-icon" href="https://www.linkedin.com/in/bang-chi-duong/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Link">
                <i className="fab fa-linkedin social-icons" aria-hidden="true" />
            </a>
            <a className="social-icon" href="https://github.com/duongch4/" target="_blank" rel="noopener noreferrer" aria-label="Github Link">
                <i className="fab fa-github-square social-icons" aria-hidden="true" />
            </a>
            <a className="social-icon" href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top" aria-label="Open Email">
                <i className="fas fa-envelope-square social-icons" aria-hidden="true" />
            </a>
        </div>

        <div className="footer__navbar-text">
            Bang Chi Duong © {new Date().getFullYear()}. All Right Reserved
        </div>
    </div>
);
