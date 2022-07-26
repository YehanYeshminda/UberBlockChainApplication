import React from 'react';
import { motion } from 'framer-motion';

const EverywhereTravelSection = () => {
	const style = {
		everywhereTravelSectionContainer: `m-[30px]`,
		gridOptionSetEverywhereTravel: `grid grid-cols-2 gap-[20px]`,
		subheader: `text-[45px] pb-[20px] mt-[10px]`,
		subheaderV2Inside: `text-[25px] mt-[15px] mb-[1px]`,
		insideParaSubHeader: `text-[16px]`,
	};

	return (
		<div className={style.everywhereTravelSectionContainer}>
			<h1 className={style.subheader}>Everywhere that you travel</h1>

			<div className={style.gridOptionSetEverywhereTravel}>
				<div>
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
						<img
							src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_620,h_349/v1536709509/assets/72/31aeed-285c-4298-9cab-83852962b60f/original/D_Ride_cities2x.png"
							alt=""
						/>
					</motion.div>
					<h3 className={style.subheaderV2Inside}>1000+ Cities</h3>
					<p className={style.insideParaSubHeader}>
						The app is available in thousands of cities worldwide, so you can
						request a ride even when you’re far from home.
					</p>
				</div>
				<div>
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
						<img
							src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_620,h_349/v1535573711/assets/0d/d7a67e-34e5-4239-a952-7954c0c71951/original/D_Rider_Featured-22x.png"
							alt=""
						/>
					</motion.div>
					<h3 className={style.subheaderV2Inside}>600+ airports</h3>
					<p className={style.insideParaSubHeader}>
						You can get a ride to and from most major airports. Schedule a ride
						to the airport for one less thing to worry about.
					</p>
				</div>
			</div>
		</div>
	);
};

export default EverywhereTravelSection;
