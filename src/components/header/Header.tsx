import React from "react";

export const Header = () => (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="/">BCD<span className="sr-only">(current)</span></a>

            <div className="navbar__burger">
                <button
                    className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbar__support-content" aria-controls="navbar__support-content"
                    aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="fas fa-bars navbar__burger-icon" />
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbar__support-content">
                <ul className="navbar-nav ml-auto text-upper">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
);
