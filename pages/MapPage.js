import React from 'react';
import Footer from '../Components/Footer';
import Map from '../Components/Map';
import Navbar from '../Components/Nav';
import LocationSelector from '../Components/LocationSelector';
import Confirm from '../Components/Confirm';

const style = {
	wrapper: `h-screen w-screen flex flex-col`,
	main: `h-full w-screen flex-1 z-10`,
	mapContainer: `flex-1 w-full h-full`,
	rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20 mt-[35px]`,
	rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
};

const mapPage = () => {
	return (
		<div className={style.wrapper}>
			<Navbar />
			<div className={style.main}>
				<Map />
				{/* <Footer /> */}
			</div>
			<div className={style.rideRequestContainer}>
				<div className={style.rideRequest}>
					<LocationSelector />
					{/* <Footer /> */}
					<Confirm />
				</div>
			</div>
		</div>
	);
};

export default mapPage;
