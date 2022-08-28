import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TabbedComponent from './TabbedComponent';
import EverywhereTravelSection from './Homepage/EverywhereTravelSection';
import TravelArounfTheWorldSection from './Homepage/TravelArounfTheWorldSection';
import TopHeader from './Homepage/TopHeader';
import GridSectionOne from './Homepage/GridSectionOne';
import GridSectionSetPartTwo from './Homepage/GridSectionSetPartTwo';
import { motion } from 'framer-motion';

const Homepage = () => {
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
							<div className="my-0 mx-auto max-w-7xl">
								<TopHeader />
								<div>
									<motion.div
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										transition={{ duration: 1 }}
										variants={{
											visible: { opacity: 1 },
											hidden: { opacity: 0 },
										}}
									>
										<GridSectionOne />
									</motion.div>
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
