import React from 'react';
import Navbar from '../Components/Nav';
import Footer from '../Components/Footer';
import AboutusHeaderWomen from '../Components/AboutusPage/AboutusHeaderWomen';
import AboutusReimagineOurLifeComponent from '../Components/AboutusPage/AboutusReimagineOurLifeComponent';
import AboutusGridCompDouble from '../Components/AboutusPage/AboutusGridCompDouble';
import AboutusContainerLastSectionImageSet from '../Components/AboutusPage/AboutusContainerLastSectionImageSet';
import { motion, useScroll, useSpring } from 'framer-motion';

const Aboutus = () => {
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
		<div className="h-screen sm:max-w-7xl md:max-w-7xl flex flex-col">
			<Navbar />
			<motion.section
				exit={{ opacity: 0 }}
				class="text-gray-700 body-font relative"
			>
				<motion.div variants={content} animate="animate" initial="initial">
					<motion.div variants={title}>
						<motion.div variants={inputs}>
							<div className="h-full sm:w-full md:w-screen flex-1 z-10">
								<AboutusHeaderWomen />
								<div className="max-w-7xl m-auto sm:mt-12 md:mt-[100px]">
									<AboutusReimagineOurLifeComponent />
									<div>
										<AboutusGridCompDouble />
									</div>
								</div>
								{/* <AboutusContainerLastSectionImageSet /> */}
								<Footer />
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	);
};

export default Aboutus;
