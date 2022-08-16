import React from 'react';
import Image from 'next/image';
import imgGirlPhone from '../../temp/womanWithPhone_03.png';

const TravelArounfTheWorldSection = () => {
	return (
		<div className="sm:h-[65vh] md:h-[35vh] sm:mt-24 md:mt-10 md:mb-12 max-w-7xl">
			<div className="grid sm:grid-cols-1 md:grid-cols-2">
				<div className="m-auto sm:h-52 md:h-72 md:w-64 flex justify-center items-center">
					<Image src={imgGirlPhone} objectFit={'cover'} />
				</div>
				<div className="m-auto sm:text-center md:text-left">
					<h2 className="sm:text-2xl sm:mt-6 md:text-5xl leading-snug ">
						Ways People Move Around{' '}
						<span className="block md:mt-3">the World</span>
					</h2>
					<p className="md:mt-5 sm:mt-2">
						The Uber app gives you the power to get where you want to go with
						access to different types of rides across more than 10,000 cities.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TravelArounfTheWorldSection;
