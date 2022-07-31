import React from 'react';
import Image from 'next/image';
import uberEatsPic from '../../temp/UberIM_009879-large-1-3_2.jpg';
import uberEatsPic2 from '../../temp/Uber-Transit.jpg';
import { motion } from 'framer-motion';

const MovingCitysForward = () => {
	return (
		<div className="h-[90vh]">
			<div className="text-5xl mb-10">Moving cities forward, together</div>
			<div className="grid grid-cols-2">
				<div className="">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
					>
						<Image src={uberEatsPic} width={550} height={350} alt="ubereats" />
					</motion.div>
					<div className="text-2xl mt-3 mb-3">
						Providing access to care for those in need
					</div>
					<div className="text-1xl w-[550px]">
						We’ve partnered with healthcare organizations to provide their
						members and patients with access to care by offering them flexible
						ride-scheduling options. Healthcare professionals can schedule rides
						for patients and caregivers going to and from the care they need,
						all from a single dashboard.
					</div>
				</div>
				<div className="">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
					>
						<Image src={uberEatsPic2} width={550} height={350} alt="ubereats" />
					</motion.div>
					<div className="text-2xl mt-3 mb-3">
						Helping to improve public transportation for all
					</div>
					<div className="text-1xl w-[550px]">
						Uber is committed to helping cities around the world make public
						transportation more accessible, equitable, and efficient.
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovingCitysForward;
