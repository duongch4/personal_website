import * as React from 'react';

import multipleClassifiers from '../images/multipleClassifiers.png';
import objectDetection from '../images/objectDetection.jpg';

import '../stylesheets/Projects.css';

class Projects extends React.Component {
    public render() {
        return (
            <div className="projects container">
                <div className="row">
                    <div className="col-md-6 item">
                        <img src={objectDetection} className="thumb" alt="ObjectDetectionImage" />
                        <div className="overlay container">
                            <div className="text">
                                <h3>Object Detection <i className="fas fa-search" /></h3>
                                <p><strong>Detect cars within images</strong></p>
                                <p>Python, OpenCV, Scikit-learn</p>
                                <p><a href="https://github.com/duongch4/objectDetection" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 item">
                        <img src={multipleClassifiers} className="thumb" alt="MultipleClassifersImage" />
                        <div className="overlay">
                            <div className="text">
                                <h3>Multiple Classifiers<i className="fas fa-search" /></h3>
                                <p><strong>Classify benign/malignant cancer</strong></p>
                                <p>R</p>
                                <p><a href="https://github.com/duongch4/mammographic-classification" target="_blank" rel="noopener noreferrer">Repo <i className="fab fa-github" aria-hidden="true" /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;