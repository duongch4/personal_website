import * as React from 'react';
import contactImg from '../images/contactImg.jpg';

class Contact extends React.Component {
	public render() {
		return (
			<div className="contact container">
				<div className="row">

					<img src={contactImg} className="col-sm-4 img-fluid rounded" alt="ContactImage" />

					<div className="col-sm-8 text-left">
						<p>
							<a href="https://www.linkedin.com/in/bang-chi-duong-6857969a/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true" /> LinkedIn</a>
						</p>
						<p>
							<a href="https://github.com/duongch4" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true" /> Github</a>
						</p>
						<p>
							<a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true" /> bangchi.duong.20193@outlook.com</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;