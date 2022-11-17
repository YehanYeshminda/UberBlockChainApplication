import React from 'react';
import AndersonImg from '../../temp/AndersonImg.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SafectyGridSectionInfo = ({ data }) => {
	return (
		<div className="max-w-7xl" data-testid="safetyGridSec-1">
			{data.left ? (
				<div className="grid sm:grid-cols-1 md:grid-cols-2 md:pt-[100px m-auto">
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
						<div className="sm:w-full md:w-full">
							<Image src={data.img} width={550} height={350} />
						</div>
					</motion.div>
					<div className="max-w-xl">
						<div className="text-left text-2xl w-full sm:ml-0 md:ml-8 md:mt-12 sm:mt-6">
							<h1 className="sm:text-base md:text-4xl sm:font-bold md:font-medium sm:text-center md:text-left pb-5 leading-tight">
								{data.header}
							</h1>

							<div>
								<p className="sm:text-base md:text-lg md:text-left sm:text-center">
									{data.decription}
								</p>

								<p className="sm:text-base md:text-lg md:text-left sm:text-center">
									{data.decription2 ? data.decription2 : ''}
									<span className="block mg-[10px]"> </span>
								</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="grid sm:grid-cols-1 md:grid-cols-2 md:pt-[100px m-auto my-14	">
					<div className="max-w-xl">
						<div className="text-left text-2xl w-full sm:ml-0 md:ml-8 md:mt-12 sm:mt-6">
							<h1 className="sm:text-base md:text-4xl sm:font-bold md:font-medium sm:text-center md:text-left pb-5 leading-tight">
								{data.header}
							</h1>

							<div className="w-full">
								<p className="sm:text-base md:text-lg md:text-left sm:text-center">
									{data.decription}
								</p>

								<p className="sm:text-base md:text-lg md:text-left sm:text-center">
									{data.decription2 ? data.decription2 : ''}
									<span className="block mg-[10px]"> </span>
								</p>
							</div>
						</div>
					</div>
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
						<div className="sm:w-full md:w-full sm:mt-4">
							<Image src={data.img} />
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default SafectyGridSectionInfo;
