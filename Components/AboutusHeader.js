import React from 'react';
import Image from 'next/image';
import AboutusHeaderImg from '../temp/AboutusHeader.jpeg';

const AboutusHeader = () => {
	const style = {
		imgHeaderWrapper: `relative center text-white`,
		containerImg: 'h-[600px]',
		letterBottomLeft: `absolute bottom-[50px] left-[260px] text-[55px]`,
	};

	return (
		<div className={style.imgHeaderWrapper}>
			<Image
				src={AboutusHeaderImg}
				priority={true}
				className={style.containerImg}
				alt="Header Image"
				height={1100}
			/>
			<h1 className={style.letterBottomLeft}>About us</h1>
		</div>
	);
};

export default AboutusHeader;
