import React from 'react';
import Image from 'next/image';
import uberEatsPic from '../../temp/UberIM_008570-large.jpg';
import uberEatsPic2 from '../../temp/UberIM_20079-large-1-3_2.jpg';
import { motion } from 'framer-motion';

const EarnMoneySection = () => {
	return (
		<div className="md:h-[90vh] sm:mt-8 md:mt-0">
			<div className="sm:text-2xl sm:mb-4 sm:text-center md:text-5xl md:mb-10 md:text-left">
				Earn money with Uber
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-y-5 md:gap-y-0">
				<div className="sm:flex sm:items-center sm:justify-center sm:flex-col md:grid md:items-start md:justify-start">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
					>
						<Image src={uberEatsPic} width={550} height={350} alt="ubereats" />
					</motion.div>
					<div className="text-2xl mt-3 mb-3">Deliver with Uber</div>
					<div className="sm:text-base sm:w-full sm:text-center md:w-550 md:text-left sm:mx-2 md:mx-0">
						Make money by delivering food orders that people crave, and other
						items using the Uber Eats app—all while exploring your city.
					</div>
				</div>
				<div className="sm:flex sm:items-center sm:justify-center sm:flex-col md:grid md:items-start md:justify-start">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
					>
						<Image src={uberEatsPic2} width={550} height={350} alt="ubereats" />
					</motion.div>
					<div className="text-2xl mt-3 mb-3">Drive with Uber</div>
					<div className="sm:text-base sm:w-full sm:text-center md:w-550 md:text-left sm:mx-2 md:mx-0">
						Make the most of your time on the road on the platform with the
						largest network of active riders.
					</div>
				</div>
			</div>
		</div>
	);
};

export default EarnMoneySection;
