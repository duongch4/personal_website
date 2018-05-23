import * as React from 'react';

import contactImg from '../images/contactImg.jpg';
import '../stylesheets/Contact.css';

class Contact extends React.Component {
	public render() {
		return (
			<div className="contact container">
				<div className="row">

					<img src={contactImg} className="contact-img col-sm-6 img-fluid" alt="ContactImage" />

					<div className="col-sm-6 text-center">
						<h3 className="contact-header">LET'S TALK</h3>
						<p>I always look forwards to new opportunities.</p>

						<p><a href="https://1drv.ms/b/s!AlPEhSAAUWCmg-1M4fVovD2or56YPQ" target="_blank" rel="noopener noreferrer">
							<button type="button" className="btn btn-light">Resume <i className="fas fa-file-pdf pdf-icon" aria-hidden="true" /></button>
						</a></p>

						<p><a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top">
							<button type="button" className="btn btn-light">Send Email <i className="fas fa-envelope-square social-icons" aria-hidden="true" /></button>
						</a></p>
	
					</div>
				</div>	
			</div>
		);
	}
}

export default Contact;
