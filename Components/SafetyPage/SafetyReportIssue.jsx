import React from 'react';
import reportIssue from '../../temp/report.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SafetyReportIssue = () => {
	const style = {
		gridSectionSet: `grid grid-cols-2 pt-[100px] max-w-[1250px] m-auto`,
		// boxOne: `m-[1rem]`,
		textInsideGrid: `mt-[5rem] ml-[2.6rem] text-[1.5rem]`,
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
					<Image src={reportIssue} />
				</div>
			</motion.div>
			<div className={style.boxOne}>
				<div className={style.textInsideGrid}>
					<h1 className={style.headerText}>
						You have our support, whenever you need it
						<span className={style.insideBr}></span>
					</h1>

					<div>
						<p className={style.paraInsideGrid}>
							Uber support is available 24 hours a day, 7 days a week, and is
							handled by a team of trained safety agents. If you’re in immediate
							danger, you should always contact authorities first.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SafetyReportIssue;
