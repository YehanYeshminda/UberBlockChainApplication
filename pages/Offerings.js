import React from 'react';
import GridSectionSetPartTwo from '../Components/Homepage/GridSectionSetPartTwo';
import Navbar from '../Components/Nav';
import AppsSections from '../Components/OfferingsPage/AppsSections';
import EarnMoneySection from '../Components/OfferingsPage/EarnMoneySection';
import FoodDeliveryOnDemand from '../Components/OfferingsPage/FoodDeliveryOnDemand';
import Header from '../Components/OfferingsPage/Header';
import HelpingBusiness from '../Components/OfferingsPage/HelpingBusiness';
import IconSectionGrid from '../Components/OfferingsPage/IconSectionGrid';
import MovingCitysForward from '../Components/OfferingsPage/MovingCitysForward';
import RideOptionUber from '../Components/OfferingsPage/RideOptionUber';
import Footer from '../Components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const Offerings = () => {
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

	const style = {
		progressBar: `fixed left-0 right-0 h-2 bg-black origin-[0%] z-50 mt-20`,
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
							<div className="max-w-7xl mx-auto">
								<Header />
								<AppsSections />
								<IconSectionGrid />
								<RideOptionUber />
								<GridSectionSetPartTwo />
								<FoodDeliveryOnDemand />
								<EarnMoneySection />
								<MovingCitysForward />
								<HelpingBusiness />
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>
			<Footer />
		</div>
	);
};

export default Offerings;
