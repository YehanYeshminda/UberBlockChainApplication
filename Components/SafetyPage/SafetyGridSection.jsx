import React from 'react';
import SafetyWomen from '../../temp/headerSafety.jpg';
import Image from 'next/image';

const SafetyGridSection = () => {
	return (
		<div className="grid sm:mt-20 md:grid-cols-2 md:mt-40 md:gap-x-7 h-[90vh] md:h-[70vh]">
			<div className="sm:text-center md:text-left">
				<div className="md:mt-9 md:text-2xl">
					<h1 className="text-2xl md:text-5xl">
						Our commitment to <span className="block">safety</span>
					</h1>
				</div>

				<div>
					<p className="text-base sm:mt-3 md:mt-0 leading-6 md:text-lg md:pt-5">
						We want you to move freely, make the most of your time, and be
						connected to the people and places that matter most to you.
					</p>

					<p className="text-base leading-6 md:text-lg md:pt-5 sm:mt-5 md:mt-0">
						That’s why we’re committed to safety—from the creation of new
						standards to the development of technology with the aim of reducing
						<span className="block"> incidents.</span>
					</p>
				</div>
			</div>
			<div className="">
				<Image src={SafetyWomen} alt="Safety image " />
			</div>
		</div>
	);
};

export default SafetyGridSection;
