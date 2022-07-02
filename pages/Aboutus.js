import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutusHeader from '../Components/AboutusHeader';
import ReimagineOurLifeComponent from '../Components/ReimagineOurLifeComponent';
import GridCompDouble from '../Components/GridCompDouble';
import ContainerLastSectionImageSet from '../Components/containerLastSectionImageSet';

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
					<AboutusHeader />
					<div className={style.setWrapperSize}>
						<ReimagineOurLifeComponent />
						<div>
							<GridCompDouble />
						</div>
					</div>
					<ContainerLastSectionImageSet />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
