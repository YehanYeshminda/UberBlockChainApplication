import React from 'react';
import SustainabilityPicture from '../../temp/Sustainability.jpg';
import roadPicture from '../../temp/Road.jpg';
import backgroundShield from '../../temp/backgroundShield.png';
import girlAndBoy from '../../temp/girlandboy.jpg';
import threePeople from '../../temp/People3.jpg';
import personClass from '../../temp/personClass.jpg';
import globalImage from '../../temp/globe_background-01.png';
import Image from 'next/image';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiShapeCircle } from 'react-icons/bi';
import { FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutusGridCompDouble = () => {
	return (
		<div>
			{/* photos grid section */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 },
				}}
				className="grid sm:grid-cols-1 sm:mt-16 sm:mb-16 md:grid-cols-2 md:mt-36 md:mb-24 md:m-auto max-w-7xl w-full"
			>
				<Image
					src={SustainabilityPicture}
					alt="Uber images"
					className="object-cover"
				/>
				<div className="flex flex-col sm:justify-center sm:items-center md:justify-start md:items-start sm:ml-0 sm:mt-6 md:ml-20 md:mt-24 gap-y-3 sm:mx-4 md:mx-0">
					<div className="sm:text-2xl md:text-4xl">
						<h2 className="font-medium">Sustainability</h2>
					</div>
					<div className="flex sm:justify-center sm:items-center sm:text-center md:text-left">
						<p className="sm:text-sm md:text-base">
							Uber is committing to becoming a fully electric, zero-emission
							platform by 2040, with 100% of rides taking place in zero-emission
							vehicles, on public transit, or with micromobility. It is our
							responsibility as the largest mobility platform in the world to
							more aggressively tackle the challenge of climate change. We will
							do this by offering riders more ways to ride green, helping
							drivers go electric, making transparency a priority and partnering
							with NGOs and the private sector to help expedite a clean and just
							energy transition.
						</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 },
				}}
				className="grid sm:grid-cols-1 sm:mt-16 sm:mb-16 md:grid-cols-2 md:mt-36 md:mb-24 md:m-auto max-w-7xl w-full"
			>
				<Image src={roadPicture} alt="Uber images" className="object-cover" />
				<div className="flex flex-col sm:justify-center sm:items-center md:justify-start md:items-start sm:ml-0 sm:mt-6 md:ml-20 md:mt-24 gap-y-3 sm:mx-4 md:mx-0">
					<div className="sm:text-2xl md:text-4xl">
						<h2 className="font-medium">Rides and beyond</h2>
					</div>
					<div className="flex sm:justify-center sm:items-center sm:text-center md:text-left">
						<p className="sm:text-sm md:text-base">
							In addition to helping riders find a way to go from point A to
							point B, we are helping people order food quickly and affordably,
							removing barriers to healthcare, creating new freight-booking
							solutions, and helping companies provide a seamless employee
							travel experience. And always helping drivers and couriers earn.
						</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 },
				}}
				className="grid sm:grid-cols-1 sm:mt-16 sm:mb-16 md:grid-cols-2 md:mt-36 md:mb-24 md:m-auto max-w-7xl w-full"
			>
				<div className="flex flex-col sm:justify-center sm:items-center md:justify-start md:items-start sm:ml-0 sm:mt-6 md:mt-24 gap-y-3 md:max-w-xl sm:max-w-lg sm:mx-4 md:mx-0 sm:mb-4 md:mb-0">
					<div className="sm:text-2xl md:text-4xl">
						<h2 className="font-medium">Your safety drives us</h2>
					</div>
					<div className="flex sm:justify-center sm:items-center sm:text-center md:text-left">
						<p className="sm:text-sm md:text-base">
							Whether you’re in the back seat or behind the wheel, your safety
							is essential. We are committed to doing our part, and technology
							is at the heart of our approach. We partner with safety advocates
							and develop new technologies and systems to help improve safety
							and help make it easier for everyone to get around.
						</p>
					</div>
				</div>
				<Image
					src={backgroundShield}
					alt="Uber images"
					className="object-cover"
				/>
			</motion.div>

			{/* company info section */}
			<h1 className="sm:text-3xl sm:mb-6 sm:text-center md:text-left md:text-4xl md:mb-12">
				Company info
			</h1>

			<div className="grid sm:grid-cols-1 md:grid-cols-3 max-w-7xl gap-x-7 sm:mb-8 md:mb-36 m-auto md:max-w-7xl w-full">
				<div className="w-full sm:mb-16 md:mb-0 sm:text-center md:text-left">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						className="w-full"
					>
						<Image src={girlAndBoy} alt="" />
					</motion.div>
					<div className="flex flex-col gap-y-2">
						<h2 className="text-2xl font-medium">Whos driving Uber</h2>
						<p className="leading-6 md:text-base sm:text-sm">
							We’re building a culture within Uber that emphasizes doing the
							right thing, period, for riders, drivers, and employees. Find out
							more about the team that’s leading the way.
						</p>
					</div>
				</div>

				<div className="w-full sm:mb-16 md:mb-0 sm:text-center md:text-left">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						className="w-full"
					>
						<Image src={threePeople} alt="" />
					</motion.div>
					<div className="flex flex-col gap-y-2">
						<h2 className="text-2xl font-medium">Getting diversity right</h2>
						<p className="leading-6 md:text-base sm:text-sm">
							It’s our goal to create a workplace that is inclusive and reflects
							the diversity of the cities we serve—where everyone can be their
							authentic self, and where that authenticity is celebrated as a
							strength. By creating an environment where people from every
							background can thrive, we’ll make Uber a better company—for our
							employees and our customers.
						</p>
					</div>
				</div>
				<div className="w-full sm:mb-16 md:mb-0 sm:text-center md:text-left">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						className="w-full"
					>
						<Image src={personClass} alt="" />
					</motion.div>
					<div className="flex flex-col gap-y-2">
						<h2 className="text-2xl font-medium">Acting with integrity</h2>
						<p className="leading-6 md:text-base sm:text-sm">
							Ubers Ethics & Compliance Program Charter outlines our commitment
							to integrity at the highest levels within the company.
							Transparency is critical to an ethical culture; we achieve this
							through our Integrity Helpline and suite of scalable and effective
							compliance initiatives.
						</p>
					</div>
				</div>
			</div>

			<h1 className="sm:text-3xl sm:mb-10 md:text-4xl md:mb-12 sm:text-center md:text-left">
				Keep Up with the Lastest
			</h1>

			<div className="grid sm:grid-cols-1 md:grid-cols-3 max-w-7xl gap-x-7 sm:mb-8 md:mb-36 m-auto md:max-w-7xl w-full sm:gap-y-10 md:gap-y-0">
				<div className="flex sm:justify-center sm:items-center flex-col sm:text-center md:justify-start md:items-start md:text-left sm:gap-y-1 md:gap-y-3">
					<div className="text-3xl">
						<BsFillPeopleFill />
					</div>
					<h2 className="sm:text-xl md:text-2xl">Newsroom</h2>
					<p className="start leading-6 md:text-base sm:text-sm">
						Get announcements about partnerships, app updates, initiatives, and
						more near you and around the world.
					</p>
				</div>
				<div className="flex sm:justify-center sm:items-center flex-col sm:text-center md:justify-start md:items-start md:text-left sm:gap-y-1 md:gap-y-3">
					<div className="text-3xl">
						<FaBullhorn />
					</div>
					<h2 className="sm:text-xl md:text-2xl">Blog</h2>
					<p className="start leading-6 md:text-base sm:text-sm">
						Find new places to explore and learn about Uber products,
						partnerships, and more.
					</p>
				</div>
				<div className="flex sm:justify-center sm:items-center flex-col sm:text-center md:justify-start md:items-start md:text-left sm:gap-y-1 md:gap-y-3">
					<div className="text-3xl">
						<BiShapeCircle className="motion-safe:animate-spin" />
					</div>
					<h2 className="sm:text-xl md:text-2xl">Investor relations</h2>
					<p className="start leading-6 md:text-base sm:text-sm">
						Download financial reports, see next-quarter plans, and read about
						our corporate responsibility initiatives.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutusGridCompDouble;
