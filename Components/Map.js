import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
// import { UberContext } from '../context/uberContext';

const style = {
	wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
	// const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/yehannnn/cl35elovv000514qn850arl7g',
			center: [81.434, 7.724],
			zoom: 6,
		});
	}, []);

	return <div className={style.wrapper} id="map" />;
};

export default Map;
