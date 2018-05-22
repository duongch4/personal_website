import * as React from 'react';

import bioinformatics from '../images/bioinformatics.png';
import multipleClassifiers from '../images/multipleClassifiers.png';
import objectDetection from '../images/objectDetection.jpg';

import '../stylesheets/Projects.css';

class Projects extends React.Component {
    public render() {
        return (
            <div className="projects container">

                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <h5>Object Detection <i className="fas fa-search" /></h5>
                        <div className="item col-md-12">
                            <img src={objectDetection} className="thumb-img" alt="ObjectDetectionImage" />
                            <div className="overlay">
                                <div className="text">
                                    <p><strong>Detect cars within images</strong></p>
                                    <p>Python, OpenCV, Scikit-learn</p>
                                    <p><a href="https://github.com/duongch4/objectDetection" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <h5>Multiple Classifiers <i className="fas fa-dna" /></h5>
                        <div className="item col-md-12">
                            <img src={multipleClassifiers} className="thumb-img" alt="MultipleClassifersImage" />
                            <div className="overlay">
                                <div className="text">
                                    <p><strong>Classify benign/malignant cancer</strong></p>
                                    <p>R, ggplot2</p>
                                    <p><a href="https://github.com/duongch4/mammographic-classification" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <h5>Bioinformatics <i className="fas fa-dna" /></h5>
                        <div className="item col-md-12">
                            <img src={bioinformatics} className="thumb-img" alt="BioinformaticsImage" />
                            <div className="overlay">
                                <div className="text">
                                    <p><strong>Analyse cancer genomics <br /> and proteomics </strong></p>
                                    <p>R, edgeR, ggplot2, MSqRob, GSEA</p>
                                    <p><a href="https://github.com/duongch4/genomics-proteomics-analysis.git" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;