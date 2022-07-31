import React from 'react';

const AppsSections = () => {
	return (
		<div className="h-[45vh]">
			<div className="text-5xl font-medium mb-7">
				Uber apps, products, and other offerings
			</div>
			<div className="grid grid-cols-2 gap-8 text-1xl">
				<div className="">
					Uber is a technology company whose mission is to reimagine the way the
					world moves for the better. Our technology helps us develop and
					maintain multisided platforms that match consumers looking for rides
					and independent providers of ride services, as well as with other
					forms of transportation, including public transit, bikes, and
					scooters.
				</div>
				<div className="">
					We also connect consumers and restaurants, grocers, and other
					merchants so they can buy and sell meals, groceries, and other items,
					then we match them with independent delivery service providers. Plus,
					Uber connects shippers and carriers in the freight industry.
					<div className="mt-5">
						Our technology helps people connect and move in over 70 countries
						and 10,000 cities around the world.
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppsSections;
