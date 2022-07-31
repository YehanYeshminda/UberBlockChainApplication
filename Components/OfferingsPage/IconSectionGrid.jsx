import React from 'react';
import { GrMapLocation } from 'react-icons/gr';
import { SiUbereats } from 'react-icons/si';
import { BiMoney } from 'react-icons/bi';
import { FaCity } from 'react-icons/fa';
import { GrDeliver, GrBusinessService } from 'react-icons/gr';

const IconSectionGrid = () => {
	return (
		<div className="h-[80vh] mb-10">
			<div className="grid grid-cols-3">
				<div className="px-10 py-10">
					<div className="py-5">
						<GrMapLocation className="text-7xl motion-safe:animate-bounce" />
					</div>
					<div className="py-1">Ride Options</div>
					<div className="tracking-wide">Access to rides on demand.</div>
				</div>
				<div className="px-10 py-10">
					<div className="py-5">
						<SiUbereats className="text-7xl motion-safe:animate-bounce" />
					</div>
					<div className="py-1">Uber Eats</div>
					<div className="tracking-wide">Food delivery on demand.</div>
				</div>
				<div className="px-10 py-10">
					<div className="py-5">
						<BiMoney className="text-7xl motion-safe:animate-bounce" />
					</div>
					<div className="py-1">Earning with Uber</div>
					<div className="tracking-wide">Opportunity is everywhere.</div>
				</div>
			</div>

			<div className="grid grid-cols-3">
				<div className="px-10 py-10">
					<div className="py-5">
						<FaCity className="text-7xl motion-safe:animate-bounce" />
					</div>
					<div className="py-1">Moving cities forward</div>
					<div className="tracking-wide">
						Helping to improve public transportation and access to care for
						those in need.
					</div>
				</div>
				<div className="px-10 py-10">
					<div className="py-5">
						<GrBusinessService className="text-7xl motion-safe:animate-bounce" />
					</div>
					<div className="py-1">Helping businesses move ahead</div>
					<div className="tracking-wide">
						See how Uber Freight and Uber for Business help organizations across
						the world.
					</div>
				</div>
				<div className="px-10 py-10">
					<div className="py-5">
						<GrDeliver className="text-7xl motion-safe:animate-bounce" />
					</div>
					<div className="py-1">Same-day delivery</div>
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
