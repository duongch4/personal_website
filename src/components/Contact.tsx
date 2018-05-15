import * as React from 'react';
import contactImg from '../images/contactImg.jpg';

class Contact extends React.Component {
	public render() {
		return (
			<div className="contact container">
				<div className="row">
					<div className="col-sm-4">
						<img src={contactImg} alt="ContactImage" width="50px" />
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;