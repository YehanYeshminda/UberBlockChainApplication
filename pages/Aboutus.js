import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutusHeaderWomen from '../Components/AboutusPage/AboutusHeaderWomen';
import AboutusReimagineOurLifeComponent from '../Components/AboutusPage/AboutusReimagineOurLifeComponent';
import AboutusGridCompDouble from '../Components/AboutusPage/AboutusGridCompDouble';
import AboutusContainerLastSectionImageSet from '../Components/AboutusPage/AboutusContainerLastSectionImageSet';
import { motion, useScroll, useSpring } from 'framer-motion';

const style = {
	wrapper: `h-screen w-[1200px] flex flex-col`,
	main: `h-full w-screen flex-1 z-10`,
	setWrapperSize: `max-w-[1200px] m-auto mt-[100px]`,
	progressBar: `fixed left-0 right-0 h-2 bg-black origin-[0%] z-50 mt-[80px]`,
};

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
		<div className={style.wrapper}>
			<Navbar />
			<motion.section
				exit={{ opacity: 0 }}
				class="text-gray-700 body-font relative"
			>
				<motion.div variants={content} animate="animate" initial="initial">
					<motion.div variants={title}>
						<motion.div variants={inputs}>
							<div className={style.main}>
								<motion.div className={style.progressBar} style={{ scaleX }} />
								<AboutusHeaderWomen />
								<div className={style.setWrapperSize}>
									<AboutusReimagineOurLifeComponent />
									<div>
										<AboutusGridCompDouble />
									</div>
								</div>
								<AboutusContainerLastSectionImageSet />
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
