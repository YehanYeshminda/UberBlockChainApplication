import React from 'react';
import Image from 'next/image';
import uberEatsPic from '../../temp/UberEats.jpg';
import ubserEatsPic2 from '../../temp/SCENARIO-4_RESTAURANT_FOOD-PICK-UP_0437-large-1-3_2.jpg';
import { motion } from 'framer-motion';

const FoodDeliveryOnDemand = () => {
	return (
		<div className="h-[90vh]">
			<div className="text-5xl mb-10">Food delivery on demand</div>
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
					<div className="text-2xl mt-3 mb-3">Uber Eats</div>
					<div className="text-1xl w-[550px]">
						Order from your favorite restaurants, online or with the Uber app.
						The restaurants will prepare your order, and a nearby delivery
						person will deliver it to your door.
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
						<Image
							src={ubserEatsPic2}
							width={550}
							height={350}
							alt="ubereats"
						/>
					</motion.div>
					<div className="text-2xl mt-3 mb-3">Restaurants</div>
					<div className="text-1xl w-[550px]">
						Uber Eats makes a real impact on your restaurant business. When your
						food is featured in the app, new customers can discover it and loyal
						customers can enjoy it more often. Delivery people using the Uber
						app deliver the food fast, maintaining the best possible food
						quality.
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodDeliveryOnDemand;
