import * as React from 'react';
import { FaEnvelopeSquare, FaFilePdfO, FaGithubSquare, FaLinkedinSquare } from 'react-icons/lib/fa';

import contactImg from '../images/contactImg.jpg';
import '../stylesheets/Contact.css';

class Contact extends React.Component {
	public render() {
		return (
			<div className="contact container">
				<div className="row">

					<img src={contactImg} className="contact-img col-sm-6 img-fluid" alt="ContactImage" />

					<div className="col-sm-6 text-left">
						<h3 className="contact-header">LET'S TALK</h3>
						<p><a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top">
							<button type="button" className="btn btn-light">Send Email <FaEnvelopeSquare className="social-icons" aria-hidden="true" /></button>
						</a></p>

						<p><a href="https://www.linkedin.com/in/bang-chi-duong-6857969a/" target="_blank" rel="noopener noreferrer">
							<button type="button" className="btn btn-light">LinkedIn <FaLinkedinSquare className="social-icons" aria-hidden="true" /></button>
						</a></p>

						<p><a href="https://github.com/duongch4" target="_blank" rel="noopener noreferrer">
							<button type="button" className="btn btn-light">Github <FaGithubSquare className="social-icons" aria-hidden="true" /></button>
						</a></p>

						<p><a href="https://1drv.ms/b/s!AlPEhSAAUWCmg-1M4fVovD2or56YPQ" target="_blank" rel="noopener noreferrer">
							<button type="button" className="btn btn-light">Resume <FaFilePdfO className="pdf-icon" aria-hidden="true" /></button>
						</a></p>
						
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;