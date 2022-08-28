import React from 'react';
import { GrMapLocation } from 'react-icons/gr';
import { SiUbereats } from 'react-icons/si';
import { BiMoney } from 'react-icons/bi';
import { FaCity } from 'react-icons/fa';
import { GrDeliver, GrBusinessService } from 'react-icons/gr';

const IconSectionGrid = () => {
	return (
		<div className="md:h-[80vh] mb-10">
			<div className="grid sm:grid-cols-1 sm:text-center md:text-left md:grid-cols-3">
				<div className="px-10 py-10">
					<div className="flex sm:justify-center sm:items-center sm:py-2 md:justify-start md:items-start md:py-5">
						<GrMapLocation className="sm:text-5xl sm:text-center md:text-7xl motion-safe:animate-bounce md:text-left" />
					</div>
					<div className="py-1 sm:font-semibold md:font-semibold">
						Ride Options
					</div>
					<div className="tracking-wide">Access to rides on demand.</div>
				</div>
				<div className="px-10 py-10">
					<div className="flex sm:justify-center sm:items-center sm:py-2 md:justify-start md:items-start md:py-5">
						<SiUbereats className="sm:text-5xl sm:text-center md:text-7xl motion-safe:animate-bounce md:text-left" />
					</div>
					<div className="py-1 sm:font-semibold md:font-semibold">
						Uber Eats
					</div>
					<div className="tracking-wide">Food delivery on demand.</div>
				</div>
				<div className="px-10 py-10">
					<div className="flex sm:justify-center sm:items-center sm:py-2 md:justify-start md:items-start md:py-5">
						<BiMoney className="sm:text-5xl sm:text-center md:text-7xl motion-safe:animate-bounce md:text-left" />
					</div>
					<div className="py-1 sm:font-semibold md:font-semibold">
						Earning with Uber
					</div>
					<div className="tracking-wide">Opportunity is everywhere.</div>
				</div>
			</div>

			<div className="grid sm:grid-cols-1 sm:text-center md:text-left md:grid-cols-3">
				<div className="px-10 py-10">
					<div className="flex sm:justify-center sm:items-center sm:py-2 md:justify-start md:items-start md:py-5">
						<FaCity className="sm:text-5xl sm:text-center md:text-7xl motion-safe:animate-bounce md:text-left" />
					</div>
					<div className="py-1 sm:font-semibold md:font-semibold">
						Moving cities forward
					</div>
					<div className="tracking-wide">
						Helping to improve public transportation and access to care for
						those in need.
					</div>
				</div>
				<div className="px-10 py-10">
					<div className="flex sm:justify-center sm:items-center sm:py-2 md:justify-start md:items-start md:py-5">
						<GrBusinessService className="sm:text-5xl sm:text-center md:text-7xl motion-safe:animate-bounce md:text-left" />
					</div>
					<div className="py-1 sm:font-semibold md:font-semibold">
						Helping businesses move ahead
					</div>
					<div className="tracking-wide">
						See how Uber Freight and Uber for Business help organizations across
						the world.
					</div>
				</div>
				<div className="px-10 py-10">
					<div className="flex sm:justify-center sm:items-center sm:py-2 md:justify-start md:items-start md:py-5">
						<GrDeliver className="sm:text-5xl sm:text-center md:text-7xl motion-safe:animate-bounce md:text-left" />
					</div>
					<div className="py-1 sm:font-semibold md:font-semibold">
						Same-day delivery
					</div>
					<div className="tracking-wide">
						An easy delivery solution that allows people to send items the same
						day.
					</div>
				</div>
			</div>
		</div>
	);
};

export default IconSectionGrid;
