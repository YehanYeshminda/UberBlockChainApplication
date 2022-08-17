import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgPara from '../../temp/whyRideWithUs_desktop.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
	faClock,
	faMoneyBill1,
	faMap,
} from '@fortawesome/free-solid-svg-icons';

const GridSectionOne = () => {
	return (
		<div className="max-w-7xl sm:h-[80vh] md:h-[80vh]">
			<h1 className="sm:text-center md:text-left md:ml-0 text-2xl mt-2.5 mb-2 sm md:text-5xl md:pb-5 md:mt-2.5">
				Why Use the Uber App?
			</h1>
			<div className="grid grid-cols-3 md:grid-cols-3 grid-flow-row auto-rows-max">
				<div className="col-span-3 bounce-short">
					<Image src={imgPara} />
				</div>
			</div>
			<div className="grid sm:grid-cols-1 md:grid md:grid-cols-3 sm:text-center">
				<div className="p-4 md:mb-10 md:p-10">
					<div className="text-2xl md:text-3xl md:pb-2.5">
						<FontAwesomeIcon
							icon={faClock}
							className="motion-safe:animate-spin"
						/>
					</div>
					<p className="text-base md:text-25">Rides On Demand</p>
					<p className="text-xs md:text-lg">
						Request a ride at any time and on any day of the year.
					</p>
				</div>
				<div className="p-4 md:mb-10 md:p-10">
					<div className="text-2xl md:text-3xl md:pb-2.5">
						<FontAwesomeIcon icon={faMoneyBill1} />
					</div>
					<p className="text-base md:text-25">Budget-friendly options</p>
					<p className="text-xs md:text-lg">
						Compare prices on every kind of ride, from daily commutes to special
						evenings out.
					</p>
				</div>
				<div className="p-4 md:mb-10 md:p-10">
					<div className="text-2xl md:text-3xl md:pb-2.5">
						<FontAwesomeIcon icon={faMap} />
					</div>
					<p className="text-base md:text-25">An easy way to get around</p>
					<p className="text-xs md:text-lg">
						Tap and let your driver take you where you want to go.
					</p>
				</div>
			</div>
		</div>
	);
};

export default GridSectionOne;
