import Navbar from '../Components/Navbar';
import Homepage from '../Components/Homepage';
import Footer from '../Components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const style = {
	wrapper: `h-full w-full flex flex-col bg-white`,
	main: `h-full w-screen flex-1 z-10`,
	mapContainer: `flex-1 w-full h-full`,
	progressBar: `fixed left-0 right-0 h-2 bg-black origin-[0%] z-50 mt-20`,
	// rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
	// rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
};

export default function Home() {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div className={style.wrapper}>
			<Navbar />
			<motion.div className={style.progressBar} style={{ scaleX }} />
			<div className={style.main}>
				<Homepage />
				<Footer />
			</div>
		</div>
	);
}
