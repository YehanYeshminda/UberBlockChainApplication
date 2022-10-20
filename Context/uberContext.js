import { createContext, useState, useEffect } from 'react';

export const UberContext = createContext();

export const UberProvider = ({ children }) => {
	const [pickup, setPickup] = useState('');
	const [dropoff, setDropoff] = useState('');
	const [pickupCoordinates, setPickupCoordinates] = useState();
	const [dropoffCoordinates, setDropoffCoordinates] = useState();

	console.log(pickup);
	console.log(dropoff);

	const createLocationCoordinatesPromise = (locationName, locationType) => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch('api/db/getLocationCoordinates', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						location: locationName,
					}),
				});

				const data = await response.json();

				console.log(data);

				if (data.message === 'success') {
					switch (locationType) {
						case 'pickup':
							setPickupCoordinates(data.data);
							break;
						case 'dropoff':
							setDropoffCoordinates(data.data);
							break;
					}
					resolve();
				} else {
					reject();
				}
			} catch (error) {
				console.error(error);
				reject();
			}
		});
	};

	useEffect(() => {
		if (pickup && dropoff) {
			(async () => {
				await Promise.all([
					createLocationCoordinatesPromise(pickup, 'pickup'),
					createLocationCoordinatesPromise(dropoff, 'dropoff'),
				]);
			})();
		} else return;
	}, [pickup, dropoff]);

	return (
		<UberContext.Provider
			value={{
				pickup,
				setPickup,
				dropoff,
				setDropoff,
				pickupCoordinates,
				setPickupCoordinates,
				dropoffCoordinates,
				setDropoffCoordinates,
			}}
		>
			{children}
		</UberContext.Provider>
	);
};
