import React from 'react';
import PhonecallImg from '../../temp/phonecall.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SafetyTechnologySafety = () => {
	const style = {
		gridSectionSet: `grid grid-cols-2 pt-[100px] max-w-[1250px] m-auto`,
		// boxOne: `m-[1rem]`,
		textInsideGrid: `mt-[2.2rem] ml-[2.6rem] text-[1.5rem]`,
		headerText: `text-[2.5rem] pb-[20px] leading-[1.2]`,
		insideBr: 'block mg-[10px]',
		paraInsideGrid: `text-[1.1rem]`,
		ImageStylingSet: `w-[600px]`,
		insideBr: 'block mg-[10px]',
		boxOne: `max-w-[550px]`,
	};

	return (
		<div className={style.gridSectionSet}>
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
					<Image src={PhonecallImg} />
				</div>
			</motion.div>
			<div className={style.boxOne}>
				<div className={style.textInsideGrid}>
					<h1 className={style.headerText}>
						We’ve built technology to look out for you
						<span className={style.insideBr}></span>
					</h1>

					<div>
						<p className={style.paraInsideGrid}>
							We hope every trip is a smooth one, but things dont always go as
							planned—which is why we built RideCheck. By using sensors and GPS
							data, RideCheck can help detect if a trip goes unusually
							off-course or if a possible crash has occurred. If the app alerts
							us to anything out of the ordinary, we’ll reach out to provide you
							with the resources you need to get help.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SafetyTechnologySafety;
