import * as React from "react";

import * as bioinformatics from "../assets/png/bioinformatics.png";
import * as imageCompression from "../assets/png/imageCompression.png";
import * as deepCloth from "../assets/png/deepCloth.png";
import * as movieApp from "../assets/png/movieApp.png";
import * as multipleClassifiers from "../assets/png/multipleClassifiers.png";
import * as objectDetection from "../assets/jpg/objectDetection.jpg";
import * as game from "../assets/png/CaptureTheCastle.png";

import * as deepClothPdf from "../assets/pdf/DeepClothSCA.pdf";
import * as deepClothVid from "../assets/mp4/DeepClothSCA.mp4";

import * as gameExe from "../assets/7z/Capture-The-Castle-x64-Release.7z";

export class Projects extends React.Component<any, any> {

    public render() {
        const projects: React.ReactElement[] = this.getProjects();
        return (
            <div id="projects" className="container-fluid">
                <div className="row header"><h2>Projects</h2></div>
                {
                    this.renderProjects(projects)
                }
            </div>
        );
    }

    private renderProjects = (projects: React.ReactElement[]): React.ReactElement[] => {
        const result = [];
        for (let i = 0; i < projects.length; i += 3) {
            result.push(this.renderOneRow(projects[i], projects[i + 1], projects[i + 2]));
        }
        return result;
    }

    private renderProject = (
        imgSrc: any, altSring: string, title: string, description: string[],
        languages: string[], repoLink: string, icon: string, webAppLink: string
    ): React.ReactElement => {
        return (
            <div className="col-lg-4 mb-4">
                <div className="item col-md-12">
                    <img src={imgSrc} className="thumb-img" alt={altSring} />
                    <div className="overlay">
                        <div className="text">
                            {
                                webAppLink ?
                                    <p><a href={webAppLink} target="blank" rel="noopener noreferer">
                                        {this.renderSpanList(description)}
                                    </a></p>
                                    :
                                    <p>{this.renderSpanList(description)}</p>
                            }
                            <p>{this.renderSpanList(languages)}</p>
                            <p><a href={repoLink} target="_blank" rel="noopener noreferrer">
                                Repo <i className="fab fa-github" aria-hidden="true" />
                            </a></p>
                        </div>
                    </div>
                </div>
                <h5><strong>{title}</strong> <i className={icon} /></h5>
            </div>
        );
    }

    private renderResearch = (
        imgSrc: any, altSring: string, title: string, description: string[],
        languages: string[], icon: string, acmLink: string, pdfLink: any, videoLink: any
    ): React.ReactElement => {
        return (
            <div className="col-lg-4 mb-4">
                <div className="item col-md-12">
                    <img src={imgSrc} className="thumb-img" alt={altSring} />
                    <div className="overlay">
                        <div className="text">
                            <p><a href={acmLink} target="blank" rel="noopener noreferer">
                                {this.renderSpanList(description)}
                            </a></p>
                            <p>{this.renderSpanList(languages)}</p>
                            <p><a href={pdfLink} target="_blank" rel="noopener noreferrer">
                                Paper <i className="fas fa-file-pdf" aria-hidden="true" />
                            </a></p>
                            <p><a href={videoLink} target="_blank" rel="noopener noreferrer">
                                Video <i className="fas fa-video" aria-hidden="true" />
                            </a></p>
                        </div>
                    </div>
                </div>
                <h5><strong>{title}</strong> <i className={icon} /></h5>
            </div>
        );
    }

    private renderSpanList = (spanList: string[]): React.ReactElement[] => {
        return (
            spanList.map((value) => {
                return (
                    <span className="span-desc"><strong>{value}</strong></span>
                );
            })
        );
    }

    private renderOneRow = (
        proj1: React.ReactElement, proj2: React.ReactElement, proj3: React.ReactElement
    ): React.ReactElement => {
        return (<div className="row">{proj1}{proj2}{proj3}</div>);
    }

    private getProjects(): React.ReactElement[] {
        return [
            this.renderProject(
                game, "CaptureTheCastle", "Capture The Castle",
                ["2D Game"], ["C++, OpenGL"],
                gameExe, "fas fa-gamepad", undefined
            ),
            this.renderResearch(
                deepCloth, "DeepClothImage", "Subspace Neural Physics",
                ["Fast Data-Driven", "Interactive Simulation"], ["Python, C++"],
                "fas fa-gamepad", "https://dl.acm.org/citation.cfm?id=3340245", deepClothPdf, deepClothVid
            ),
            this.renderProject(
                movieApp, "MovieAppImage", "Browse/Review Movies",
                ["Browse/Review Movies"], ["MongoDB, Express", "React, NodeJS"],
                "https://github.com/duongch4/mern-passport-dev/", "fas fa-search",
                "https://cs490-project-movie.herokuapp.com/"
            ),
            this.renderProject(
                objectDetection, "ObjectDetectionImage", "Object Detection",
                ["Detect cars within images"], ["Python, OpenCV"],
                "https://github.com/duongch4/objectDetection/", "fas fa-search", undefined
            ),
            this.renderProject(
                imageCompression, "LossyImageCompressionImage", "Lossy Image Compression",
                ["Compress images"], ["C++"],
                "https://github.com/duongch4/lossy-image-compression/", "far fa-image fa-lg", undefined
            ),
            this.renderProject(
                bioinformatics, "BioinformaticsImage", "Bioinformatics",
                ["Analyse cancer genomics"], ["R, edgeR", "ggplot2, MSqRob, GSEA"],
                "https://github.com/duongch4/genomics-proteomics-analysis/", "fas fa-dna", undefined
            ),
            this.renderProject(
                multipleClassifiers, "MultipleClassifersImage", "Multiple Classifiers",
                ["Classify cancer", "benign/malignant"], ["R, ggplot2"],
                "https://github.com/duongch4/mammographic-classification/", "fas fa-dna", undefined
            )
        ];
    }
}
