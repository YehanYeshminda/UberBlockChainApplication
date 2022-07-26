import React from 'react';
import AndersonImg from '../../temp/AndersonImg.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SafectyGridSectionInfo = () => {
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
					<Image src={AndersonImg} />
				</div>
			</motion.div>
			<div className={style.boxOne}>
				<div className={style.textInsideGrid}>
					<h1 className={style.headerText}>
						All drivers are background checked before their first{' '}
						<span className={style.insideBr}>trip</span>
					</h1>

					<div>
						<p className={style.paraInsideGrid}>
							We want you to move freely, make the most of your time, and be
							connected to the people and places that matter most to you.
						</p>

						<p className={style.paraInsideGrid}>
							That’s why we’re committed to safety—from the creation of new
							standards to the development of technology with the aim of
							reducing incidents.
							<span className={style.insideBr}> </span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SafectyGridSectionInfo;
