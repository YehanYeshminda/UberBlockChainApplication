import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TabbedComponent from './TabbedComponent';
import EverywhereTravelSection from './Homepage/EverywhereTravelSection';
import TravelArounfTheWorldSection from './Homepage/TravelArounfTheWorldSection';
import TopHeader from './Homepage/TopHeader';
import GridSectionOne from './Homepage/GridSectionOne';
import GridSectionSetPartTwo from './Homepage/GridSectionSetPartTwo';

const style = {
	wrapper: `my-0 mx-auto max-w-[1200px]`,
	subHeader: `text-[45px] pb-[20px] mt-[10px]`,
	subHeaderV2: `text-[45px] pb-[20px] mt-[10px]`,
	safetyHeaderPara: 'ml-[10px]',
};

const Homepage = () => {
	return (
		<div className={style.wrapper}>
			<TopHeader />
			<div>
				<h1 className={style.subHeader}>Why Use the Uber App?</h1>

				<GridSectionOne />
				<h1 className={style.subHeaderV2}>Your Safety Matters</h1>
				<p className={style.safetyHeaderPara}>
					Peace of mind is designed into your experience.
				</p>
				<GridSectionSetPartTwo />
			</div>
			<TabbedComponent />
			<EverywhereTravelSection />
			<TravelArounfTheWorldSection />
		</div>
	);
};

export default Homepage;
