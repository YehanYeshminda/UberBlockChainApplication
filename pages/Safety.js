import React from 'react';
import SafetyGridSection from '../Components/SafetyPage/SafetyGridSection';
import SafetyGridSectionTwo from '../Components/SafetyPage/SafetyGridSectionTwo';
import Navbar from '../Components/Nav';
import SafectyGridSectionInfo from '../Components/SafetyPage/SafectyGridSectionInfo';
import SafetyTextBelowSetSafety from '../Components/SafetyPage/SafetyTextBelowSetSafety';
import Footer from '../Components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { safetyDataLeft, safetyDataRight } from '../data/safetyData';

const Safety = () => {
	const style = {
		wrapper: 'max-w-7xl mx-auto',
		progressBar: `fixed left-0 right-0 h-2 bg-black origin-[0%] z-50 mt-20`,
	};

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

	console.log(safetyDataLeft, safetyDataRight);

	return (
		<div>
			<Navbar />
			<motion.section
				exit={{ opacity: 0 }}
				class="text-gray-700 body-font relative"
			>
				<motion.div variants={content} animate="animate" initial="initial">
					<motion.div variants={title}>
						<motion.div variants={inputs}>
							<div className={style.wrapper}>
								<SafetyGridSection />
								<SafetyGridSectionTwo />

								{safetyDataLeft &&
									safetyDataLeft.map((ele) => (
										<SafectyGridSectionInfo data={ele} key={ele.id} />
									))}
								<SafetyTextBelowSetSafety />
							</div>
							<Footer />
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	);
};

export default Safety;
