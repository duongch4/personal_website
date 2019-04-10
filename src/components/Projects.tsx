import * as React from "react";

import * as bioinformatics from "../assets/png/bioinformatics.png";
import * as imageCompression from "../assets/png/imageCompression.png";
import * as mazePath from "../assets/png/mazePath.png";
import * as movieApp from "../assets/png/movieApp.png";
import * as multipleClassifiers from "../assets/png/multipleClassifiers.png";
import * as objectDetection from "../assets/jpg/objectDetection.jpg";

export class Projects extends React.Component<any, any> {

    public render() {
        return (
            <div id="projects" className="container-fluid">
                <div className="row header"><h2>Projects</h2></div>
                {
                    this.renderOneRow(
                        this.renderProject(
                            objectDetection, "ObjectDetectionImage", "Object Detection",
                            "Detect cars within images", "Python, OpenCV, Scikit-learnPython",
                            "https://github.com/duongch4/objectDetection/", "fas fa-search", null
                        ),
                        this.renderProject(
                            multipleClassifiers, "MultipleClassifersImage", "Multiple Classifiers",
                            "Classify benign/malignant cancer", "R, ggplot2",
                            "https://github.com/duongch4/mammographic-classification/", "fas fa-dna", null
                        ),
                        this.renderProject(
                            bioinformatics, "BioinformaticsImage", "Bioinformatics",
                            "Analyse cancer genomics", "R, edgeR, ggplot2, MSqRob, GSEA",
                            "https://github.com/duongch4/genomics-proteomics-analysis/", "fas fa-dna", null
                        ),
                    )
                }
                {
                    this.renderOneRow(
                        this.renderProject(
                            imageCompression, "LossyImageCompressionImage", "Lossy Image Compression",
                            "Compress images", "C++",
                            "https://github.com/duongch4/lossy-image-compression/", "far fa-image fa-lg", null
                        ),
                        this.renderProject(
                            mazePath, "MazePathImage", "Shortest Path",
                            "Find shortest path", "C++",
                            "https://github.com/duongch4/shortest-path-bfs/", "fas fa-search", null
                        ),
                        this.renderProject(
                            movieApp, "MovieAppImage", "Browse/Review Movies",
                            "Browse/Review Movies", "MongoDB, Express, React, NodeJS, Passport",
                            "https://github.com/duongch4/mern-passport-dev/", "fas fa-search",
                            "https://cs490-project-movie.herokuapp.com/"
                        )
                    )
                }
            </div>
        );
    }

    private renderProject = (
        imgSrc: any, altSring: string, title: string, description: string,
        languages: string, repoLink: string, icon: string, webAppLink: string
    ): JSX.Element => {
        return (
            <div className="col-lg-4 mb-4">
                <div className="item col-md-12">
                    <img src={imgSrc} className="thumb-img" alt={altSring} />
                    <div className="overlay">
                        <div className="text">
                            {
                                webAppLink ?
                                <p><strong><a href={webAppLink} target="blank" rel="noopener noreferer">{description}</a></strong></p> :
                                <p><strong>{description}</strong></p>
                            }
                            <p>{languages}</p>
                            <p><a href={repoLink} target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                        </div>
                    </div>
                </div>
                <h5><strong>{title}</strong> <i className={icon} /></h5>
            </div>
        );
    }

    private renderOneRow = (proj1: JSX.Element, proj2: JSX.Element, proj3: JSX.Element): JSX.Element => {
        return (<div className="row">{proj1}{proj2}{proj3}</div>);
    }
}
