import React from 'react';

const AppsSections = () => {
	return (
		<div className="md:h-[45vh]">
			<div className="sm:text-3xl sm:text-center sm:font-medium md:text-left md:text-5xl md:font-medium md:mb-7">
				Uber apps, products, and other offerings
			</div>
			<div className="grid sm:grid-cols-1 sm:text-base sm:text-center sm:mt-3 md:mt-0 md:text-left md:grid-cols-2 md:gap-8 md:text-xl">
				<div className="sm:mx-2 md:mx-0">
					Uber is a technology company whose mission is to reimagine the way the
					world moves for the better. Our technology helps us develop and
					maintain multisided platforms that match consumers looking for rides
					and independent providers of ride services, as well as with other
					forms of transportation, including public transit, bikes, and
					scooters.
				</div>
				<div className="sm:mx-2 md:mx-0">
					We also connect consumers and restaurants, grocers, and other
					merchants so they can buy and sell meals, groceries, and other items,
					then we match them with independent delivery service providers. Plus,
					Uber connects shippers and carriers in the freight industry.
					<div className="sm:mx-2 md:mx-0 sm:mt-4 md:mt-5">
						Our technology helps people connect and move in over 70 countries
						and 10,000 cities around the world.
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppsSections;
