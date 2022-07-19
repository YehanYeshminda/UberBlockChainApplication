import React from 'react';
import Image from 'next/image';
import globalImage from '../../temp/globe_background-01.png';

const AboutusContainerLastSectionImageSet = () => {
	const style = {
		containerLastSection: `grid grid-cols-2 bg-[#f6f6f6] max-h-[600px]`,
		textBoxSection: `ml-[200px] mt-[50px] text-[50px]`,
		imageBoxSection: ``,
		imageSetter: `h-[600px]`,
		imageSet: `bg-cover`,
		insideBr: 'block mg-[10px]',
	};

	return (
		<div className={style.containerLastSection}>
			<div className={style.textBoxSection}>
				<h2>
					Come reimagine <span className={style.insideBr}> with us </span>
				</h2>
			</div>
			<div className={style.imageSet}>
				<Image src={globalImage} alt="last section image" />
			</div>
		</div>
	);
};

export default AboutusContainerLastSectionImageSet;
