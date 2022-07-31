import React from 'react';
import Image from 'next/image';
import uberEatsPic from '../../temp/Uber-Freight.jpg';
import uberEatsPic2 from '../../temp/Uber-for-Business.jpg';
import { motion } from 'framer-motion';

const HelpingBusiness = () => {
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
					<div className="text-2xl mt-3 mb-3">Uber Freight</div>
					<div className="text-1xl w-[550px]">
						Uber Freight is a free app that matches carriers with shippers.
						Shippers tap a button to instantly book the loads they want to haul.
						And thanks to upfront pricing, carriers always know how much they’ll
						get paid.
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
					<div className="text-2xl mt-3 mb-3">Uber for Business</div>
					<div className="text-1xl w-[550px]">
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
