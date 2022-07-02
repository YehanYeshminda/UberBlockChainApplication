import React from 'react';
import GridSectionOne from '../Components/GridSectionOne';
import GridSectionTwoSafety from '../Components/GridSectionTwoSafety';
import Navbar from '../Components/Navbar';
import GridSectionAnderson from '../Components/GridSectionAnderson';
import EmergencyHelpSafety from '../Components/EmergencyHelpSafety';
import TechnologySafety from '../Components/TechnologySafety';
import InsuranceSafety from '../Components/InsuranceSafety';
import ReportIssue from '../Components/ReportIssue';
import PersonalDetails from '../Components/PersonalDetails';
import TextBelowSetSafety from '../Components/TextBelowSetSafety';
import Footer from '../Components/Footer';

const Safety = () => {
	const style = {
		wrapper: 'max-w-[1300px] m-auto',
	};

	return (
		<div>
			<Navbar />
			<div className={style.wrapper}>
				<GridSectionOne />
				<GridSectionTwoSafety />
				<GridSectionAnderson />
				<EmergencyHelpSafety />
				<TechnologySafety />
				<InsuranceSafety />
				<ReportIssue />
				<PersonalDetails />
				<TextBelowSetSafety />
			</div>
			<Footer />
		</div>
	);
};

export default Safety;
