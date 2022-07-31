import React from 'react';
import Image from 'next/image';
import uberEatsPic from '../../temp/UberIM_008570-large.jpg';
import uberEatsPic2 from '../../temp/UberIM_20079-large-1-3_2.jpg';
import { motion } from 'framer-motion';

const EarnMoneySection = () => {
	return (
		<div className="h-[90vh]">
			<div className="text-5xl mb-10">Earn money with Uber</div>
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
					<div className="text-2xl mt-3 mb-3">Deliver with Uber</div>
					<div className="text-1xl w-[550px]">
						Make money by delivering food orders that people crave, and other
						items using the Uber Eats app—all while exploring your city.
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
					<div className="text-2xl mt-3 mb-3">Drive with Uber</div>
					<div className="text-1xl w-[550px]">
						Make the most of your time on the road on the platform with the
						largest network of active riders.
					</div>
				</div>
			</div>
		</div>
	);
};

export default EarnMoneySection;
