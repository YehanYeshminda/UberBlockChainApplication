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

const Safety = () => {
	const style = {
		wrapper: 'max-w-[1300px] m-auto',
	};

	return (
		<div>
			<Navbar />
			<div className={style.wrapper}>
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
		</div>
	);
};

export default Safety;
