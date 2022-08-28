import React from 'react';
import Image from 'next/image';
import uberEatsPic from '../../temp/UberIM_009879-large-1-3_2.jpg';
import uberEatsPic2 from '../../temp/Uber-Transit.jpg';
import { motion } from 'framer-motion';

const MovingCitysForward = () => {
	return (
		<div className="md:h-[90vh] sm:mt-8 md:mt-0">
			<div className="sm:text-2xl sm:mb-4 sm:text-center md:text-5xl md:mb-10 md:text-left">
				Moving cities forward, together
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-y-5 md:gap-y-0">
				<div className="sm:flex sm:items-center sm:justify-center sm:flex-col md:grid md:items-start md:justify-start">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
					>
						<Image src={uberEatsPic} width={550} height={350} alt="ubereats" />
					</motion.div>
					<div className="text-2xl mt-3 mb-3 sm:text-center md:text-left">
						Providing access to care for those in need
					</div>
					<div className="sm:text-base sm:w-full sm:text-center md:w-550 md:text-left sm:mx-2 md:mx-0">
						We’ve partnered with healthcare organizations to provide their
						members and patients with access to care by offering them flexible
						ride-scheduling options. Healthcare professionals can schedule rides
						for patients and caregivers going to and from the care they need,
						all from a single dashboard.
					</div>
				</div>
				<div className="sm:flex sm:items-center sm:justify-center sm:flex-col md:grid md:items-start md:justify-start sm:mt-5 md:mt-0">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
					>
						<Image src={uberEatsPic2} width={550} height={350} alt="ubereats" />
					</motion.div>
					<div className="text-2xl md:mb-1 sm:text-center md:text-left">
						Helping to improve public transportation for all
					</div>
					<div className="sm:text-base sm:w-full sm:text-center md:w-550 md:text-left sm:mx-2 md:mx-0">
						Uber is committed to helping cities around the world make public
						transportation more accessible, equitable, and efficient.
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovingCitysForward;
