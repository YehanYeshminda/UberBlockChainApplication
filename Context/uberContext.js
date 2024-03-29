import { createContext, useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

export const UberContext = createContext();

export const UberProvider = ({ children }) => {
	const [pickup, setPickup] = useState('');
	const [dropoff, setDropoff] = useState('');
	const [pickupCoordinates, setPickupCoordinates] = useState();
	const [dropoffCoordinates, setDropoffCoordinates] = useState();
	const [currentAccount, setCurrentAccount] = useState();
	const [currentUser, setCurrentUser] = useState([]);
	const [selectedRide, setSelectedRide] = useState([]);
	const [price, setPrice] = useState();
	const [basePrice, setBasePrice] = useState();

	let metamask;

	if (typeof window !== 'undefined') {
		metamask = window.ethereum; // meta will equal to this
		console.log(metamask);
	}

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	useEffect(() => {
		if (!currentAccount) return;
		requestToGetCurrentUsersInfo(currentAccount);
	}, [currentAccount]);

	useEffect(() => {
		if (!pickupCoordinates || !dropoffCoordinates) return;
		(async () => {
			try {
				const response = await fetch('/api/db/getDuration', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						pickupCoordinates: `${pickupCoordinates[0]},${pickupCoordinates[1]}`,
						dropoffCoordinates: `${dropoffCoordinates[0]},${dropoffCoordinates[1]}`,
					}),
				});

				const data = await response.json();
				// console.log(data.data);
				setBasePrice(2);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [pickupCoordinates, dropoffCoordinates]);

	const checkIfWalletIsConnected = async () => {
		if (!window.ethereum) return;
		try {
			const addressArray = await window.ethereum.request({
				method: 'eth_accounts',
			});

			if (addressArray.length > 0) {
				setCurrentAccount(addressArray[0]);
				requestToCreateUserOnSanity(addressArray[0]);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const connectWallet = async () => {
		if (!window.ethereum) return;
		console.log('clicked');
		try {
			const addressArray = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});

			if (addressArray.length > 0) {
				setCurrentAccount(addressArray[0]);
				requestToCreateUserOnSanity(addressArray[0]);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const requestToCreateUserOnSanity = async (address) => {
		if (!window.ethereum) return;
		try {
			await fetch('/api/db/createUser', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userWalletAddress: address,
					name: faker.name.fullName(),
				}),
			});
		} catch (error) {
			console.error(error);
		}
	};

	const requestToGetCurrentUsersInfo = async (walletAddress) => {
		try {
			const response = await fetch(
				`/api/db/getUserInfo?walletAddress=${walletAddress}`
			);
			const data = await response.json();
			setCurrentUser(data.data);
		} catch (error) {
			console.error(error);
		}
	};

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

				// console.log(data);

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
				connectWallet,
				currentAccount,
				currentUser,
				price,
				metamask,
				setPrice,
				selectedRide,
				setSelectedRide,
				setBasePrice,
				basePrice,
			}}
		>
			{children}
		</UberContext.Provider>
	);
};
