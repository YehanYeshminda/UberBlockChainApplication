import React from 'react';
import uberBlack from '../../assets/Rides/uberblack.png';
import uberBlackSUV from '../../assets/Rides/uberblacksuv.png';
import uberX from '../../assets/Rides/uberx.png';
import uberXl from '../../assets/Rides/uberxl.png';
import uberXSelect from '../../assets/Rides/uberxSelect.png';
import Image from 'next/image';
import TabbedComponent from '../TabbedComponent';

const RideOptionUber = () => {
	return (
		<div className="h-[80vh]">
			<div className="text-5xl font-medium mb-7">
				Ubers most popular ride options
			</div>
			<div className="text-1xl">Request a ride, hop in, and go.</div>
			<div className="">
				<div>
					<TabbedComponent />
				</div>
			</div>
		</div>
	);
};

export default RideOptionUber;
