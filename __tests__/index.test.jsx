import { render, screen } from '@testing-library/react';
import React from 'react';
import TabbedComponent from '../Components/TabbedComponent';
import Footer from '../Components/Footer';
import BlogsTopText from '../Components/BlogPage/BlogsTopText';
import AboutusReimagineOurLifeComponent from '../Components/AboutusPage/AboutusReimagineOurLifeComponent';
import EverywhereTravelSection from '../Components/Homepage/EverywhereTravelSection';
import GridSectionSetPartTwo from '../Components/Homepage/GridSectionSetPartTwo';
import TopHeader from '../Components/Homepage/TopHeader';
import AppsSections from '../Components/OfferingsPage/AppsSections';
import Header from '../Components/OfferingsPage/Header';
import RideOptionUber from '../Components/OfferingsPage/RideOptionUber';
import SafectyGridSectionInfo from '../Components/SafetyPage/SafectyGridSectionInfo';
import SafetyGridSectionTwo from '../Components/SafetyPage/SafetyGridSectionTwo';
import SafetyTextBelowSetSafety from '../Components/SafetyPage/SafetyTextBelowSetSafety';

describe('Should render components', () => {
	test('should check tabbed component', () => {
		render(<TabbedComponent />);
		const tabbedComp = screen.getByTestId('tabbed-1');
		expect(tabbedComp).toBeInTheDocument(); // veriying whether the component is being shown
		expect(tabbedComp).toHaveTextContent('Popular'); // verifying whether text is being shown
		expect(tabbedComp).toHaveClass('flex-col');
	});

	test('should check footer component', () => {
		render(<Footer />);
		const footerComp = screen.getByTestId('footer-1');
		expect(footerComp).toBeInTheDocument();
		expect(footerComp).toHaveTextContent('Terms · Privacy Policy'); // verifying whether text is being shown
		expect(footerComp).toHaveClass('w-full');
	});

	test('should check blogs top text component', () => {
		render(<BlogsTopText />);
		const blogTop = screen.getByTestId('blogsText-1');
		expect(blogTop).toBeInTheDocument();
		expect(blogTop).toHaveTextContent(' Things to do and ways to get there');
	});

	test('should check about us reimagine component', () => {
		render(<AboutusReimagineOurLifeComponent />);
		const aboutusReimageSection = screen.getByTestId('aboutuslife-1');
		expect(aboutusReimageSection).toBeInTheDocument();
		expect(aboutusReimageSection).toHaveTextContent('the better');
		expect(aboutusReimageSection).toHaveClass('w-full');
	});

	test('should every where travel component', () => {
		render(<EverywhereTravelSection />);
		const aboutUsTravel = screen.getByTestId('everywhere-travel-1');
		expect(aboutUsTravel).toBeInTheDocument();
		expect(aboutUsTravel).toHaveTextContent('Everywhere that you travel');
		expect(aboutUsTravel).toHaveClass('max-w-7xl');
	});

	test('should check grid section part 2 component', () => {
		render(<GridSectionSetPartTwo />);
		const gridSectionPart2 = screen.getByTestId('gridsection-2');
		expect(gridSectionPart2).toBeInTheDocument();
		expect(gridSectionPart2).toHaveTextContent('Your Safety Matters');
		expect(gridSectionPart2).toHaveClass('max-w-7xl');
	});

	test('should check top header component', () => {
		render(<TopHeader />);
		const topHeaderComp = screen.getByTestId('top-header-1');
		expect(topHeaderComp).toBeInTheDocument();
		expect(topHeaderComp).toHaveTextContent('Always the Ride You');
		expect(topHeaderComp).toHaveClass('flex');
	});

	test('should check the appsection component', () => {
		render(<AppsSections />);
		const appSection = screen.getByTestId('appsection-1');
		expect(appSection).toBeInTheDocument();
		expect(appSection).toHaveTextContent(
			'Uber apps, products, and other offerings'
		);
		expect(appSection).toHaveClass('md:h-[45vh]');
	});

	test('should check header component', () => {
		render(<Header />);
		const headerTest = screen.getByTestId('headerTest-1');
		expect(headerTest).toBeInTheDocument();
		expect(headerTest).toHaveTextContent('Uber’s technology offerings');
		expect(headerTest).toHaveClass('md:mb-20');
	});

	test('should ride option uber section component', () => {
		render(<RideOptionUber />);
		const rideOptionTest = screen.getByTestId('rideOptionTest-1');
		expect(rideOptionTest).toBeInTheDocument();
		expect(rideOptionTest).toHaveTextContent('Ubers most popular ride options');
		expect(rideOptionTest).toHaveClass('md:h-[80vh]');
	});

	test('should ride option uber section component', () => {
		const data = {
			left: true,
			img: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
			header: 'headertext',
			decription: 'heyyy',
			decription2: 'heyyyy',
		};

		render(<SafectyGridSectionInfo data={data} />);
		const safetyGridSec = screen.getByTestId('safetyGridSec-1');
		expect(safetyGridSec).toBeInTheDocument();
	});

	test('should ride option uber section component', () => {
		render(<SafetyGridSectionTwo />);
		const rideOptionTest = screen.getByTestId('safetyGridSection-1');
		expect(rideOptionTest).toBeInTheDocument();
		expect(rideOptionTest).toHaveTextContent('Masks are no longer required');
		expect(rideOptionTest).toHaveClass('sm:text-center');
	});

	test('should ride option uber section component', () => {
		render(<SafetyTextBelowSetSafety />);
		const safetyTextBelow = screen.getByTestId('safetyBelow-1');
		expect(safetyTextBelow).toBeInTheDocument();
		expect(safetyTextBelow).toHaveTextContent(
			'Masks may still be required by law in some areas. Please check your local requirements regarding COVID-19 safety protocols. Everyone using the Uber platform is required to comply with applicable laws and regulations while doing so.'
		);
		expect(safetyTextBelow).toHaveClass('max-w-7xl');
	});
});
