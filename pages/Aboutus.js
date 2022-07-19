import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutusHeaderWomen from '../Components/AboutusPage/AboutusHeaderWomen';
import AboutusReimagineOurLifeComponent from '../Components/AboutusPage/AboutusReimagineOurLifeComponent';
import AboutusGridCompDouble from '../Components/AboutusPage/AboutusGridCompDouble';
import AboutusContainerLastSectionImageSet from '../Components/AboutusPage/AboutusContainerLastSectionImageSet';

const style = {
	wrapper: `h-screen w-screen flex flex-col`,
	main: `h-full w-screen flex-1 z-10`,
	setWrapperSize: `max-w-[1150px] m-auto mt-[100px]`,
};

const Aboutus = () => {
	return (
		<div>
			<div className={style.wrapper}>
				<Navbar />
				<div className={style.main}>
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
			</div>
		</div>
	);
};

export default Aboutus;
