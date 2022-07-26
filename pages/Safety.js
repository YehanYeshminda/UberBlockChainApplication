import React from 'react';
import SafetyGridSection from '../Components/SafetyPage/SafetyGridSection';
import SafetyGridSectionTwo from '../Components/SafetyPage/SafetyGridSectionTwo';
import Navbar from '../Components/Navbar';
import SafectyGridSectionInfo from '../Components/SafetyPage/SafectyGridSectionInfo';
import SafetyEmergencyHelpInfo from '../Components/SafetyPage/SafetyEmergencyHelpInfo';
import SafetyTechnologySafety from '../Components/SafetyPage/SafetyTechnologySafety';
import SafetyInsuranceHelpInfo from '../Components/SafetyPage/SafetyInsuranceHelpInfo';
import SafetyReportIssue from '../Components/SafetyPage/SafetyReportIssue';
import SafetyPersonalDetails from '../Components/SafetyPage/SafetyPersonalDetails';
import SafetyTextBelowSetSafety from '../Components/SafetyPage/SafetyTextBelowSetSafety';
import Footer from '../Components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const Safety = () => {
	const style = {
		wrapper: 'max-w-[1200px] m-auto w-[1200px]',
		progressBar: `fixed left-0 right-0 h-2 bg-black origin-[0%] z-50 mt-[80px]`,
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
								<motion.div className={style.progressBar} style={{ scaleX }} />
								<SafetyGridSection />
								<SafetyGridSectionTwo />
								<SafectyGridSectionInfo />
								<SafetyEmergencyHelpInfo />
								<SafetyTechnologySafety />
								<SafetyInsuranceHelpInfo />
								<SafetyReportIssue />
								<SafetyPersonalDetails />
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
