import Navbar from '../Components/Navbar';
import Homepage from '../Components/Homepage';
import Footer from '../Components/Footer';

const style = {
	wrapper: `h-full w-full flex flex-col bg-white`,
	main: `h-full w-screen flex-1 z-10`,
	mapContainer: `flex-1 w-full h-full`,
	// rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
	// rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
};

export default function Home() {
	return (
		<div className={style.wrapper}>
			<Navbar />
			<div className={style.main}>
				<Homepage />
				<Footer />
			</div>
		</div>
	);
}
