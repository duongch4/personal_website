import * as React from 'react';

import bioinformatics from '../images/bioinformatics.png';
// import busMap from '../images/busMap.png';
import imageCompression from '../images/imageCompression.png';
import mazePath from '../images/mazePath.png';
import movieApp from '../images/movieApp.png';
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
                                    <p><a href="https://github.com/duongch4/objectDetection/" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
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
                                    <p><a href="https://github.com/duongch4/mammographic-classification/" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
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
                                    <p><a href="https://github.com/duongch4/genomics-proteomics-analysis/" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                                </div>
                            </div>
                        </div>
                        <h5><strong>Bioinformatics</strong> <i className="fas fa-dna" /></h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="item col-md-12">
                            <img src={imageCompression} className="thumb-img" alt="LossyImageCompressionImage" />
                            <div className="overlay">
                                <div className="text">
                                    <p><strong>Compress images</strong></p>
                                    <p>C++</p>
                                    <p><a href="https://github.com/duongch4/lossy-image-compression/" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                                </div>
                            </div>
                        </div>
                        <h5><strong>Lossy Image Compression</strong> <i className="far fa-image fa-lg" /></h5>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="item col-md-12">
                            <img src={mazePath} className="thumb-img" alt="MazePathImage" />
                            <div className="overlay">
                                <div className="text">
                                    <p><strong>Find shortest path</strong></p>
                                    <p>C++</p>
                                    <p><a href="https://github.com/duongch4/shortest-path-bfs/" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                                </div>
                            </div>
                        </div>
                        <h5><strong>Shortest Path</strong> <i className="fas fa-search" /></h5>
                    </div>
                    {/* <div className="col-lg-4 mb-4">
                        <div className="item col-md-12">
                            <img src={busMap} className="thumb-img" alt="BusMapImage" />
                            <div className="overlay">
                                <div className="text">
                                    <p><strong>Implement features bus-map</strong></p>
                                    <p>JAVA, Android</p>
                                    <p><a href="https://github.com/duongch4/bus-map-phase1/" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                                </div>
                            </div>
                        </div>
                        <h5><strong>Bus Map Android</strong> <i className="fas fa-bus" /></h5>
                    </div> */}
                    <div className="col-lg-4 mb-4">
                        <div className="item col-md-12">
                            <img src={movieApp} className="thumb-img" alt="MovieAppImage" />
                            <div className="overlay">
                                <div className="text">
                                    <p><strong>Browse/Review Movies</strong></p>
                                    <p><a href="https://cs490-project-movie.herokuapp.com/" target="blank" rel="noopener noreferer">Link</a></p>
                                    <p>MongoDB, Express, React, NodeJS, Passport</p>
                                    <p><a href="https://github.com/duongch4/mern-passport-dev/" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                                </div>
                            </div>
                        </div>
                        <h5><strong>Moview Review Web App</strong> <i className="fas fa-film fa-lg" /></h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;