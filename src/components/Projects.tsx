import * as React from 'react';

import bioinformatics from '../images/bioinformatics.png';
import multipleClassifiers from '../images/multipleClassifiers.png';
import objectDetection from '../images/objectDetection.jpg';

import '../stylesheets/Projects.css';

class Projects extends React.Component {
    public render() {
        return (
            <div id="projects" className="container-fluid">
                <div className="row header"><h2>Projects</h2></div>
                <div className="row">
                    <div className="col-lg-4 mb-4">   
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
                        <h5><strong>Object Detection</strong> <i className="fas fa-search" /></h5>
                    </div>
                    <div className="col-lg-4 mb-4">
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
                        <h5><strong>Multiple Classifiers</strong> <i className="fas fa-dna" /></h5>
                    </div>
                    <div className="col-lg-4 mb-4">
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
                        <h5><strong>Bioinformatics</strong> <i className="fas fa-dna" /></h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;