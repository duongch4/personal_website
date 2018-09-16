import * as React from 'react';

import contactImg from '../images/contactImg.png';
import '../stylesheets/Contact.css';

class Contact extends React.Component {
	public render() {
		return (
			<div id="contact" className="container-fluid">

				<div className="row header"><h2>Contact</h2></div>

				<div className="row">

					<img src={contactImg} className="contact-img col-sm-6 img-fluid" alt="ContactImage" />

					<div className="col-sm-6 text-center">
						<h3>Let's Talk</h3>
						<p>I'm open to new opportunities and projects.</p>

						<hr />

						<p><a href="https://1drv.ms/b/s!AlPEhSAAUWCmhd5wSLA_HvivQNhaxw/" target="_blank" rel="noopener noreferrer">
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
