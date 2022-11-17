import React from 'react';
import Image from 'next/image';
import globalImage from '../../temp/globe_background-01.png';

const AboutusContainerLastSectionImageSet = () => {
	return (
		<div
			className="grid md:grid-cols-2 sm:grid-cols-1 bg-[#f6f6f6] max-h-[600px] m-auto md:max-w-full w-full sm:mt-14 md:mt-0"
			data-testid="aboutus-1"
		>
			<div className="flex justify-center items-center sm:text-center md:text-left md:text-6xl sm:text-3xl">
				<h2>
					Come reimagine <span className="block"> with us </span>
				</h2>
			</div>
			<div className="bg-cover">
				<Image src={globalImage} alt="last section image" />
			</div>
		</div>
	);
};

export default AboutusContainerLastSectionImageSet;
