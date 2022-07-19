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

const AboutusGridCompDouble = () => {
	const style = {
		gridContentDoubleContent: `grid grid-cols-2 mt-[150px] mb-[100px]`,
		headerH2: 'text-[35px] ml-[50px] mt-[60px] mb-[15px]',
		paraH2Set: `ml-[50px]`,
		paraInsideDoubleGrid: `w-[90%]`,
		headerInsideDoubleGrid: `start text-[35px] mt-[75px] mb-[15px]`,
		subHeaderSet: `text-[35px] mb-[50px]`,
		companyGridSection: `grid grid-cols-3 max-w-[1100px] gap-x-[30px] mb-[150px]`,
		boxSetH2: `mt-[10px] mb-[10px] text-[25px]`,
		boxSetP: `start leading-6 text-[17px]`,
		imgContainer: `w-[350px]`,
		iconContainer: `text-[25px]`,
	};

	return (
		<div>
			<div className={style.gridContentDoubleContent}>
				<Image src={SustainabilityPicture} alt="Uber images" />
				<div>
					<div className={style.headerH2}>
						<h2>Sustainability</h2>
					</div>
					<div className={style.paraH2Set}>
						<p>
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
			</div>

			<div className={style.gridContentDoubleContent}>
				<Image src={roadPicture} alt="Uber images" />
				<div>
					<div className={style.headerH2}>
						<h2>Rides and beyond</h2>
					</div>
					<div className={style.paraH2Set}>
						<p>
							In addition to helping riders find a way to go from point A to
							point B, we are helping people order food quickly and affordably,
							removing barriers to healthcare, creating new freight-booking
							solutions, and helping companies provide a seamless employee
							travel experience. And always helping drivers and couriers earn.
						</p>
					</div>
				</div>
			</div>

			<div className={style.gridContentDoubleContent}>
				<div>
					<div className={style.headerInsideDoubleGrid}>
						<h2>Your safety drives us</h2>
					</div>
					<div className={style.paraInsideDoubleGrid}>
						<p>
							Whether you’re in the back seat or behind the wheel, your safety
							is essential. We are committed to doing our part, and technology
							is at the heart of our approach. We partner with safety advocates
							and develop new technologies and systems to help improve safety
							and help make it easier for everyone to get around.
						</p>
					</div>
				</div>
				<Image src={backgroundShield} alt="Uber images" />
			</div>

			<h1 className={style.subHeaderSet}>Company info</h1>

			<div className={style.companyGridSection}>
				<div>
					<div className={style.imgContainer}>
						<Image src={girlAndBoy} alt="" />
					</div>
					<h2 className={style.boxSetH2}>Whos driving Uber</h2>
					<p className={style.boxSetP}>
						We’re building a culture within Uber that emphasizes doing the right
						thing, period, for riders, drivers, and employees. Find out more
						about the team that’s leading the way.
					</p>
				</div>
				<div>
					<div className={style.imgContainer}>
						<Image src={threePeople} alt="" />
					</div>
					<h2 className={style.boxSetH2}>Getting diversity right</h2>
					<p className={style.boxSetP}>
						It’s our goal to create a workplace that is inclusive and reflects
						the diversity of the cities we serve—where everyone can be their
						authentic self, and where that authenticity is celebrated as a
						strength. By creating an environment where people from every
						background can thrive, we’ll make Uber a better company—for our
						employees and our customers.
					</p>
				</div>
				<div>
					<div className={style.imgContainer}>
						<Image src={personClass} alt="" />
					</div>
					<h2 className={style.boxSetH2}>Acting with integrity</h2>
					<p className={style.boxSetP}>
						Ubers Ethics & Compliance Program Charter outlines our commitment to
						integrity at the highest levels within the company. Transparency is
						critical to an ethical culture; we achieve this through our
						Integrity Helpline and suite of scalable and effective compliance
						initiatives.
					</p>
				</div>
			</div>

			<h1 className={style.subHeaderSet}>Keep Up with the Lastest</h1>

			<div className={style.companyGridSection}>
				<div>
					<div className={style.iconContainer}>
						<BsFillPeopleFill />
					</div>
					<h2 className={style.boxSetH2}>Newsroom</h2>
					<p className={style.boxSetP}>
						Get announcements about partnerships, app updates, initiatives, and
						more near you and around the world.
					</p>
				</div>
				<div>
					<div className={style.iconContainer}>
						<FaBullhorn />
					</div>
					<h2 className={style.boxSetH2}>Blog</h2>
					<p className={style.boxSetP}>
						Find new places to explore and learn about Uber products,
						partnerships, and more.
					</p>
				</div>
				<div>
					<div className={style.iconContainer}>
						<BiShapeCircle />
					</div>
					<h2 className={style.boxSetH2}>Investor relations</h2>
					<p className={style.boxSetP}>
						Download financial reports, see next-quarter plans, and read about
						our corporate responsibility initiatives.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutusGridCompDouble;
