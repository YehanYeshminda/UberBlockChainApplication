import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const TabbedComponent = () => {
	const style = {
		container: ``,
		blockTabs: `flex`,
		tabs: `p-4 text-center w-6/12 cursor-pointer box-content relative bg-red`,
		innerGridSet: ``,
		colInnerSet: ``,
		innerHeaderStyles: ``,
		pTagReset: ``,
	};

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div
			className="flex flex-col relative max-w-7xl break-all mt-[1rem] mb-[3rem] md:h-[60vh] md:mt-0"
			data-testid="tabbed-1"
		>
			<div className="flex">
				<button
					className={
						toggleState === 1
							? 'tabs active-tabs font-semibold sm:text-base'
							: 'tabs font-semibold sm:text-base'
					}
					onClick={() => toggleTab(1)}
				>
					Popular
				</button>
				<button
					className={
						toggleState === 2
							? 'tabs active-tabs font-semibold sm:text-base'
							: 'tabs font-semibold sm:text-base'
					}
					onClick={() => toggleTab(2)}
				>
					Economy
				</button>
			</div>

			<div className="content-tabs">
				<div
					className={toggleState === 1 ? 'content active-content' : 'content'}
				>
					<div className="grid grid-cols-1 md:grid-cols-3">
						<div className="hover:bg-slate-200 md:p-3 sm:p-3 hover:transition hover:duration-500 hover:ease-in-out text-center">
							<div className="ml-10">
								<motion.img
									whileHover={{ scale: 1.2 }}
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_437,h_246/f_auto,q_auto/products/carousel/UberX.png"
								/>
							</div>
							<div className="flex justify-center items-center font-semibold md:text-base sm:text-sm">
								Zip
							</div>
							<p className="h-3 sm:text-xs md:text-base">
								Affordable, compact rides
							</p>
						</div>
						<div className="hover:bg-slate-200 md:p-3 sm:p-3 hover:transition hover:duration-500 hover:ease-in-out text-center">
							<div className="ml-10">
								<motion.img
									whileHover={{ scale: 1.2 }}
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_429,h_241/f_auto,q_auto/products/carousel/Moto.png"
									alt=""
								/>
							</div>
							<div className="flex justify-center items-center font-semibold md:text-base sm:text-sm">
								Moto
							</div>
							<p className="h-3 sm:text-xs md:text-base">
								Affordable motorcycle rides
							</p>
						</div>
						<div className="hover:bg-slate-200 md:p-3 sm:p-3 hover:transition hover:duration-500 hover:ease-in-out text-center">
							<div className="ml-10">
								<motion.img
									whileHover={{ scale: 1.2 }}
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_437,h_246/f_auto,q_auto/products/carousel/UberX.png"
									alt=""
								/>
							</div>
							<div className="flex justify-center items-center font-semibold md:text-base sm:text-sm">
								Premier
							</div>
							<p className="h-3 sm:text-xs md:text-base">
								Select sedans, top-rated drivers
							</p>
						</div>
					</div>
				</div>

				<div
					className={toggleState === 2 ? 'content active-content' : 'content'}
				>
					<div className="grid grid-cols-1 md:grid-cols-3">
						<div className="hover:bg-slate-200 md:p-3 sm:p-3 hover:transition hover:duration-500 hover:ease-in-out text-center">
							<div className="ml-10">
								<motion.img
									whileHover={{ scale: 1.2 }}
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_429,h_241/f_auto,q_auto/products/carousel/Moto.png"
								/>
							</div>
							<div className="flex justify-center items-center font-semibold md:text-base sm:text-sm">
								XL Intercity
							</div>
							<p className="h-3 sm:text-xs md:text-base">
								Outstation rides in spacious SUVs
							</p>
						</div>
						<div className="hover:bg-slate-200 md:p-3 sm:p-3 hover:transition hover:duration-500 hover:ease-in-out text-center">
							<div className="ml-10">
								<motion.img
									whileHover={{ scale: 1.2 }}
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_437,h_246/f_auto,q_auto/products/carousel/UberX.png"
									alt=""
								/>
							</div>
							<div className="flex justify-center items-center font-semibold md:text-base sm:text-sm">
								ZIP Intercity
							</div>
							<p className="h-3 sm:text-xs md:text-base">
								Affordable outstation rides in compact cars
							</p>
						</div>
						<div className="hover:bg-slate-200 md:p-3 sm:p-3 hover:transition hover:duration-500 hover:ease-in-out text-center">
							<div className="ml-10">
								<motion.img
									whileHover={{ scale: 1.2 }}
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_437,h_246/f_auto,q_auto/products/carousel/UberX.png"
									alt=""
								/>
							</div>
							<div className="flex justify-center items-center font-semibold md:text-base sm:text-sm">
								Sedan Intercity
							</div>
							<p className="h-3 sm:text-xs md:text-base">
								Outstation rides in comfortable sedans
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TabbedComponent;
