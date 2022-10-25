import { useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import { UberContext } from '../Context/uberContext';
import 'mapbox-gl/dist/mapbox-gl.css';

const style = {
	wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
	const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);

	// console.log(pickupCoordinates, dropoffCoordinates);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/yehannnn/cl35elovv000514qn850arl7g',
			// center: [81.434, 7.724],
			// zoom: 3,
			center: [-99.29011, 39.39172],
			zoom: 6, // starting zoom
		});

		if (pickupCoordinates) {
			addToMap(map, pickupCoordinates);
		}

		if (dropoffCoordinates) {
			addToMap(map, dropoffCoordinates);
		}

		if (pickupCoordinates && dropoffCoordinates) {
			map.fitBounds([dropoffCoordinates, pickupCoordinates], {
				padding: 60,
			});
		}
	}, [pickupCoordinates, dropoffCoordinates]);

	const addToMap = (map, coordinates) => {
		const marker1 = new mapboxgl.Marker({
			draggable: true,
		})
			.setLngLat(coordinates)
			.addTo(map);
	};

	return <div className={style.wrapper} id="map" />;
};

export default Map;
