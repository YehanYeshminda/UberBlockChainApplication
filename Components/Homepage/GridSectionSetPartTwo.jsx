import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShield,
	faUsers,
	faComments,
} from '@fortawesome/free-solid-svg-icons';

const GridSectionSetPartTwo = () => {
	return (
		<div className="max-w-7xl h-[60vh]">
			<h1 className="sm:text-center md:text-left md:ml-0 text-2xl mt-2.5 mb-2 sm md:text-5xl md:pb-5 md:mt-2.5">
				Your Safety Matters
			</h1>
			<p className="sm:text-center md:text-left md:ml-0 md:text-xl sm:text-base">
				Peace of mind is designed into your experience.
			</p>

			<div className="grid grid-cols-1 sm:text-center md:grid-cols-3 grid-flow-row auto-rows-max ">
				<div className="p-4 md:mb-10 md:p-10">
					<div className="text-2xl md:text-5xl md:pb-2.5 text-blue-600">
						<FontAwesomeIcon icon={faShield} />
					</div>
					<p className="text-base md:text-25">Safety features</p>
					<p className="text-xs md:text-lg sm:mt-1 md:mt-2">
						Tell your loved ones where you are. Get help with the tap of a
						button. Technology makes travel safer than ever before.
					</p>
				</div>
				<div className="sm:mb-7 sm:p-5 md:mb-10 md:p-10">
					<div className="text-2xl md:text-5xl md:pb-2.5 text-blue-600">
						<FontAwesomeIcon icon={faUsers} />
					</div>
					<p className="text-base md:text-25">An inclusive community</p>
					<p className="text-xs md:text-lg sm:mt-1 md:mt-2">
						We are millions of riders and drivers who share Community Guidelines
						and depend on one another to do the right thing.
					</p>
				</div>
				<div className="sm:mb-7 sm:p-5 md:mb-10 md:p-10">
					<div className="text-2xl md:text-5xl md:pb-2.5 text-blue-600">
						<FontAwesomeIcon icon={faComments} />
					</div>
					<p className="text-base md:text-25">Help if you need it</p>
					<p className="text-xs md:text-lg sm:mt-1 md:mt-2">
						Get 24/7 support in the app for any questions or safety concerns you
						might have.
					</p>
				</div>
			</div>
		</div>
	);
};

export default GridSectionSetPartTwo;
