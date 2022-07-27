import React from 'react';
import Image from 'next/image';
import uberBlack from '../assets/Rides/uberblack.png';
import uberBlackSuv from '../assets/Rides/uberblacksuv.png';
import uberX from '../assets/Rides/uberx.png';
import uberXl from '../assets/Rides/uberxl.png';
import uberXSelect from '../assets/Rides/uberxSelect.png';
import ethLogo from '../assets/Logos/eth-logo.png';
import { useEffect, useState } from 'react';

// const carList = [
// 	{
// 		service: 'UberX',
// 		imgUrl: uberX,
// 		multiplier: 1,
// 	},
// 	{
// 		service: 'UberXL',
// 		imgUrl: uberXl,
// 		multiplier: 1.5,
// 	},
// 	{
// 		service: 'Black',
// 		imgUrl: uberBlack,
// 		multiplier: 2,
// 	},
// 	{
// 		service: 'Comfort',
// 		imgUrl: uberXSelect,
// 		multiplier: 1.2,
// 	},
// 	{
// 		service: 'Black SUV',
// 		imgUrl: uberBlackSuv,
// 		multiplier: 2.8,
// 	},
// ];

const basePrice = 1542;

const style = {
	wrapper: `h-full flex flex-col`,
	title: `text-gray-500 text-center text-xs py-2 border-b`,
	carList: `flex flex-col flex-1 overflow-scroll`,
	car: `flex p-3 m-2 items-center border-2 border-white`,
	selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
	carImage: `h-14`,
	carDetails: `ml-2 flex-1`,
	service: `font-medium`,
	time: `text-xs text-blue-500`,
	priceContainer: `flex items-center`,
	price: `mr-[-0.8rem]`,
};

const RideSelector = () => {
	const [carList, setCarList] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/db/getRideTypes');

				const data = await response.json();
				setCarList(data.data);
				setSelectedRide(data.data[0]);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// console.log(carList);

	return (
		<div className={style.wrapper}>
			<div className={style.title}>Choose a ride or Swipe up for more!</div>
			<div className={style.carList}>
				{carList.map((car, index) => (
					<div key={index} className={style.car}>
						<Image
							src={car.iconUrl}
							className={style.carImage}
							height={50}
							width={50}
						/>
						<div className={style.carDetails}>
							<div className={style.service}>{car.service}</div>
							<div className={style.time}>5 min away</div>
						</div>
						<div className={style.priceContainer}>
							<div className={style.price}>
								{((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
							</div>
						</div>
						<Image src={ethLogo} height={25} width={40} />
					</div>
				))}
			</div>
		</div>
	);
};

export default RideSelector;
