import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TabbedComponent from './TabbedComponent';
import EverywhereTravelSection from './Homepage/EverywhereTravelSection';
import TravelArounfTheWorldSection from './Homepage/TravelArounfTheWorldSection';
import TopHeader from './Homepage/TopHeader';
import GridSectionOne from './Homepage/GridSectionOne';
import GridSectionSetPartTwo from './Homepage/GridSectionSetPartTwo';
import { motion, useScroll, useSpring } from 'framer-motion';

const style = {
	wrapper: `my-0 mx-auto max-w-[1200px]`,
	subHeader: `text-[45px] pb-[20px] mt-[10px]`,
	subHeaderV2: `text-[45px] pb-[20px] mt-[10px]`,
	safetyHeaderPara: 'ml-[10px]',
	progressBar: `fixed left-0 right-0 h-2 bg-black origin-[0%] z-50`,
};

const Homepage = () => {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const content = {
		animate: {
			transition: { staggerChildren: 0.1 },
		},
	};

	const title = {
		initial: { y: -20, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.7,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	const inputs = {
		initial: { y: -20, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.7,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	return (
		<>
			<motion.section
				exit={{ opacity: 0 }}
				class="text-gray-700 body-font relative"
			>
				<motion.div variants={content} animate="animate" initial="initial">
					<motion.div variants={title}>
						<motion.div variants={inputs}>
							<div className={style.wrapper}>
								<motion.div className={style.progressBar} style={{ scaleX }} />
								<TopHeader />
								<div>
									<div>
										<h1 className={style.subHeader}>Why Use the Uber App?</h1>

										<GridSectionOne />
									</div>

									<h1 className={style.subHeaderV2}>Your Safety Matters</h1>
									<p className={style.safetyHeaderPara}>
										Peace of mind is designed into your experience.
									</p>
									<GridSectionSetPartTwo />
								</div>
								<TabbedComponent />
								<EverywhereTravelSection />
								<TravelArounfTheWorldSection />
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>
		</>
	);
};

export default Homepage;
