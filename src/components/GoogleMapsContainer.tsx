
import GoogleMapReact from 'google-map-react';
import * as React from 'react';
import { Secrets } from '../secrets/Secrets';

const mySecrets = new Secrets();
const GoogleMapConfig = {
	key: mySecrets.getAPIkey()
};

interface IMyProps {
	lat: number;
	lng: number;
	zoom: number;
}

class GoogleMapsContainer extends React.Component<IMyProps, {}> {
	public render() {
		const center = { lat: this.props.lat, lng: this.props.lng };
		return (
			<div style={{ height: '40vh', width: '30vw' }}>
				<GoogleMapReact
					bootstrapURLKeys={GoogleMapConfig}
					defaultCenter={center}
					defaultZoom={this.props.zoom}
				/>
			</div>
		);
	}
}

export default GoogleMapsContainer;