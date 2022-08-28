import React from 'react';
import Image from 'next/image';
import uberEatsPic from '../../temp/Uber-Freight.jpg';
import uberEatsPic2 from '../../temp/Uber-for-Business.jpg';
import { motion } from 'framer-motion';

const HelpingBusiness = () => {
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
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
					>
						<Image src={uberEatsPic} width={550} height={350} alt="ubereats" />
					</motion.div>
					<div className="text-2xl mt-3 mb-3 sm:text-center md:text-left">
						Uber Freight
					</div>
					<div className="sm:text-base sm:w-full sm:text-center md:w-550 md:text-left sm:mx-2 md:mx-0">
						Uber Freight is a free app that matches carriers with shippers.
						Shippers tap a button to instantly book the loads they want to haul.
						And thanks to upfront pricing, carriers always know how much they’ll
						get paid.
					</div>
				</div>
				<div className="sm:flex sm:items-center sm:justify-center sm:flex-col md:grid md:items-start md:justify-start sm:mt-5 md:mt-0">
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
					<div className="text-2xl mt-3 mb-3 sm:text-center md:text-left">
						Uber for Business
					</div>
					<div className="sm:text-base sm:w-full sm:text-center md:w-550 md:text-left sm:mx-2 md:mx-0">
						Whether it’s employee travel or customer rides, Uber for Business
						gives you an easy way to manage your ground transportation needs.
						Built for work, it offers a clear view into employee trip activity
						with automated billing, expensing, and reporting.
					</div>
				</div>
			</div>
		</div>
	);
};

export default HelpingBusiness;
