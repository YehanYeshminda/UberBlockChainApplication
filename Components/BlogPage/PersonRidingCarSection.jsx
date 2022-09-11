import React from 'react';
import PersonRidingCar from '../../temp/personRidingCar.jpg';
import Image from 'next/image';

const PersonRidingCarSection = () => {
	return (
		<div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-9 mt-4 md:mt-12">
				<div className="md:w-[1000px] md:h-[400px]">
					<Image
						src={PersonRidingCar}
						layout={'responsive'}
						alt="person riding car"
					/>
				</div>
				<div className="flex justify-center items-center flex-col md:inline md:pl-72 md:pt-[50px] bg-gray-100 sm:h-44 mt-8 md:mt-0 md:h-[500px]">
					<p className="text-xl md:text-3xl text-black-900 underline underline-offset-1 tracking-wide sm:text-center md:text-left">
						In-app Support - Help at{' '}
						<span className="sm:inline md:block">the tap of a button!</span>
					</p>
					<p className="md:pt-[40px] text-center md:text-left pt-6 tracking-wide">
						Blog detailing contents of safety toolkit, how{' '}
						<span className="block"> to access them</span>
					</p>

					<p className="md:pt-[240px] sm:pt-20 text-black-200 text-sm">
						{new Date().toLocaleString() + ''} / Sri Lanka
					</p>
				</div>
			</div>
		</div>
	);
};

export default PersonRidingCarSection;
