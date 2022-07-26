import React from 'react';
import EmergenyHelpImg from '../../temp/safetyImg.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SafetyEmergencyHelpInfo = () => {
	const style = {
		gridSectionSet: `grid grid-cols-2 pt-[100px] max-w-[1250px] m-auto`,
		// boxOne: `m-[1rem]`,
		textInsideGrid: `mt-[3.5rem] ml-[2.2rem] text-[1.5rem]`,
		headerText: `text-[2.5rem] pb-[20px] leading-[1.2]`,
		insideBr: 'block mg-[10px]',
		paraInsideGrid: `text-[1.1rem]`,
		ImageStylingSet: `w-[600px]`,
		insideBr: 'block mg-[10px]',
		boxTwo: `ml-[50px]`,
		boxOne: `max-w-[550px]`,
	};

	return (
		<div className={style.gridSectionSet}>
			<div className={style.boxOne}>
				<div className={style.textInsideGrid}>
					<h1 className={style.headerText}>
						There’s emergency help
						<span className={style.insideBr}>if you need it</span>
					</h1>

					<div>
						<p className={style.paraInsideGrid}>
							In an emergency, speed and accuracy are critical. If you call 911
							from the Uber app, the app displays your live location and trip
							details, so you can share them with the emergency dispatcher. And
							in a growing number of US cities, this information is
							automatically provided to the authorities.
						</p>
					</div>
				</div>
			</div>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 },
				}}
				className={style.boxTwo}
			>
				<div className={style.ImageStylingSet}>
					<Image src={EmergenyHelpImg} />
				</div>
			</motion.div>
		</div>
	);
};

export default SafetyEmergencyHelpInfo;
