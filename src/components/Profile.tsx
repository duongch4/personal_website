import React from "react";
import { Devicon, deviconsInfo } from "./DeviconsInfo";

const setDevicon = (devicon: Devicon, id: string) => (
    <img key={id} loading="lazy" src={devicon.image} className="devicon" alt={devicon.alt} />
);

const setDevicons = () => {
    const devicons: React.ReactElement[] = [];
    for (const iconName in deviconsInfo) {
        devicons.push(setDevicon(deviconsInfo[iconName], iconName));
    }
    return devicons;
};

export const Profile = () => (
    <div className="container-fluid section profile">
        <div className="row header text-left"><h2>Profile</h2></div>
        <div className="row">
            <div className="col-sm-4 technical-skills">
                <div className="mid-highlight">Technical Skills</div>
                <div className="col-sm-12 icons-sect">
                    {setDevicons()}
                </div>
            </div>

            <div className="col-sm-8 profile-text">
                <p>
                    I am originally from Vietnam,{" "}
                    but I earned <strong>2 Bachelor's and a Master's degrees</strong> in multiple disciplines{" "}
                    ranging from <strong>Physics, Statistics, Bioinformatics, and Computer Science</strong> from the{" "}
                    <a className="a--university" href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer">
                        University of Toronto
                    </a>,{" "}
                    <a className="a--university" href="https://www.uoguelph.ca" target="_blank" rel="noopener noreferrer">
                        University of Guelph
                    </a>,{" "}
                    and{" "}
                    <a className="a--university" href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer">
                        University of British Columbia
                    </a>.
                </p>
                <p>
                    I love visualising and analysing all kinds of data{" "}
                    <i className="fas fa-chart-pie" /> <i className="fas fa-chart-line" />{" "}
                    <i className="fas fa-chart-bar" /> <i className="fas fa-chart-area" />.{" "}
                    I have ventured into different areas including physics simulation and cancer genomics,{" "}
                    applying machine learning techniques to help resolve problems.{" "}
                    {/* I am open to working as a software machine-learning/web developer. */}
                </p>
                <p>
                    <strong>Interested?</strong>{" "}
                    <a className="a--let-me-know" href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top">
                        Let me know <i className="far fa-paper-plane" />
                    </a>.
                </p>
            </div>
        </div>
    </div>
);
