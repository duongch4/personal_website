import GoogleMapReact from 'google-map-react';
import * as React from 'react';
import '../stylesheets/GoogleMapContainer.css';
import { APIkey } from './Secrets';

const GoogleMapConfig = {
	key: APIkey,
};

interface IMapProps {
	lat?: number; // set '?' so we dont have to input values when importing the function in Home.tsx
	lng?: number;
	zoom?: number;
}

const GoogleMapContainer: React.StatelessComponent<IMapProps> = ({ lat = 49.255, lng = -123.138, zoom = 11, children }) => {
	const center = { lat, lng };
	return (
		<div className="map">
			<GoogleMapReact
				bootstrapURLKeys={GoogleMapConfig}
				defaultCenter={center}
				defaultZoom={zoom}
			/>
		</div>
	);
}

export default GoogleMapContainer;