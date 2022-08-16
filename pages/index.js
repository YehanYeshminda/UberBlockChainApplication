import Navbar from '../Components/Navbar';
import Homepage from '../Components/Homepage';
import Footer from '../Components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from '../Components/Nav';

export default function Home() {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div className="h-full w-full bg-white">
			<Nav />

			<Homepage />
			<Footer />
		</div>
	);
}
