import React from 'react';
import { FaHeadSideMask } from 'react-icons/fa';
import { RiWheelchairFill } from 'react-icons/ri';
import { AiFillMail } from 'react-icons/ai';

const SafetyGridSectionTwo = () => {
	return (
		<div
			className="grid sm:grid-cols-1 sm:text-center md:text-left md:grid-cols-3 gap-x-5 md:h-[70vh] sm:h-[170vh]"
			data-testid="safetyGridSection-1"
		>
			<div className="">
				<div className="text-4xl md:text-5xl md:pb-5 sm:flex sm:items-center sm:justify-center md:items-start md:justify-start">
					<FaHeadSideMask className="motion-safe:animate-bounce" />
				</div>
				<h3 className="sm:text-base md:text-xl font-bold mb-2.5">
					Masks are no longer required
				</h3>
				<p className="sm:text-base md:text-lg mt-2.5">
					As of April 19, 2022, riders and drivers are not required to wear
					masks when using Uber.*
				</p>
				<p className="sm:text-base md:text-lg mt-2.5">
					However, the CDC still recommends wearing a mask if you have certain
					personal risk factors and/or high transmission levels in your area.
				</p>
				<p className="sm:text-base md:text-lg mt-2.5">
					Remember: many people still feel safer wearing a mask because of
					personal or family health situations, so please be respectful of their
					preferences. And if you ever feel uncomfortable, you can always cancel
					the trip.
				</p>
			</div>
			<div className="sm:mt-6 md:mt-0">
				<div className="text-4xl md:text-5xl md:pb-5 sm:flex sm:items-center sm:justify-center md:items-start md:justify-start">
					<RiWheelchairFill className="motion-safe:animate-bounce" />
				</div>
				<h3 className="sm:text-base md:text-xl font-bold mb-2.5">
					Updating our no-front-seat policy
				</h3>
				<p className="sm:text-base md:text-lg mt-2.5">
					Riders are no longer required to sit in the back seat. However, to
					give drivers space, we ask that riders only use the front seat if it’s
					required because of the size of their group.
				</p>
			</div>
			<div className="sm:mt-6 md:mt-0">
				<div className="text-4xl md:text-5xl md:pb-5 sm:flex sm:items-center sm:justify-center md:items-start md:justify-start">
					<AiFillMail className="motion-safe:animate-bounce" />
				</div>
				<h3 className="sm:text-base md:text-xl font-bold mb-2.5">
					Thank you for helping take care of one another
				</h3>
				<p className="sm:text-base md:text-lg mt-2.5">
					We know the pandemic has been difficult. But you’ve continued to go
					the extra mile to help protect our communities—whether it’s wearing a
					mask, making space for one another, or giving drivers the respect they
					deserve. Thank you for that.
				</p>
				<p className="sm:text-base md:text-lg mt-2.5">
					HIt’s still important to take safety precautions while riding,
					driving, and delivering. So make sure to roll down the windows for
					extra airflow, sanitize your hands before and after trips or
					deliveries, and always cover your cough or sneeze.
				</p>
			</div>
		</div>
	);
};

export default SafetyGridSectionTwo;
