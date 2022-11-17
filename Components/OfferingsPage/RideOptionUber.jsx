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
		<div className="md:h-[80vh]" data-testid="rideOptionTest-1">
			<div className="sm:text-3xl sm:text-center md:text-left sm:font-medium sm:mb-4 md:text-5xl md:mb-7 md:font-medium">
				Ubers most popular ride options
			</div>
			<div className="md:text-1xl sm:mb-4 md:mb-4 sm:text-center md:text-left">
				Request a ride, hop in, and go.
			</div>
			<div>
				<div>
					<TabbedComponent />
				</div>
			</div>
		</div>
	);
};

export default RideOptionUber;
