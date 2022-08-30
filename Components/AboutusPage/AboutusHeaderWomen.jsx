import React from 'react';
import Image from 'next/image';
import AboutusHeaderImg from '../../temp/AboutusHeader.jpeg';

const AboutusHeaderWomen = () => {
	return (
		<div className="sm:mt-10 md:mt-0 relative text-white sm:w-full md:w-7xl">
			<Image
				src={AboutusHeaderImg}
				priority={true}
				className="object-cover"
				alt="Header Image"
			/>
			<h1 className="absolute sm:bottom-7 sm:left-8 sm:text-4xl md:bottom-12 md:left-64 md:text-6xl">
				About us
			</h1>
		</div>
	);
};

export default AboutusHeaderWomen;
