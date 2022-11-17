import React from 'react';
import { motion } from 'framer-motion';

const EverywhereTravelSection = () => {
	return (
		<div
			className="m-7 max-w-7xl md:h-[65vh] sm:h-[110vh]"
			data-testid="everywhere-travel-1"
		>
			<h1 className="sm:text-2xl sm:pb-3 sm:text-center md:text-left md:text-5xl md:pb-5 md:mt-2">
				Everywhere that you travel
			</h1>

			<div className="grid sm:grid-cols-1 sm:h- md:grid-cols-2 gap-5 md:h-500 sm:text-center md:text-left">
				<div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						className=""
					>
						<img
							className="sm:object-cover sm:h-80 md:h-full"
							src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_620,h_349/v1536709509/assets/72/31aeed-285c-4298-9cab-83852962b60f/original/D_Ride_cities2x.png"
							alt=""
						/>
					</motion.div>
					<h3 className="text-base md:text-25 sm:mt-4 md:mt-4 md:mb-1 sm:font-semibold md:font-normal">
						1000+ Cities
					</h3>
					<p className="text-xs md:text-lg sm:mt-1 md:mt-2">
						The app is available in thousands of cities worldwide, so you can
						request a ride even when you’re far from home.
					</p>
				</div>
				<div>
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
						<img
							src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_620,h_349/v1535573711/assets/0d/d7a67e-34e5-4239-a952-7954c0c71951/original/D_Rider_Featured-22x.png"
							alt=""
						/>
					</motion.div>
					<h3 className="text-base md:text-25 sm:mt-4 md:mt-4 md:mb-1 sm:font-semibold md:font-normal">
						600+ airports
					</h3>
					<p className="text-xs md:text-lg sm:mt-1 md:mt-2">
						You can get a ride to and from most major airports. Schedule a ride
						to the airport for one less thing to worry about.
					</p>
				</div>
			</div>
		</div>
	);
};

export default EverywhereTravelSection;
