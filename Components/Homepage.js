import React from 'react';
import imgPara from '../temp/whyRideWithUs_desktop.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faMoneyBill1,
	faMap,
	faShield,
	faUsers,
	faComments,
} from '@fortawesome/free-solid-svg-icons';
import TabbedComponent from './TabbedComponent';
import EverywhereTravelSection from './EverywhereTravelSection';
import TravelArounfTheWorldSection from './TravelArounfTheWorldSection';

const style = {
	wrapper: `my-0 mx-auto max-w-[1200px]`,
	headerMain: `grid grid-cols-2 mt-[80px]`,
	imgHeader: `h-[650px]`,
	boxOne: `h-500 w-500`,
	textInside: `mt-[300px] text-start text-[56px] pl-[100px]`,
	insideBr: 'block mg-[10px]',
	textInsidePara: `text-start pl-[100px]`,
	subHeader: `text-[45px] pb-[50px]`,
	subHeaderV2: `text-[45px] mt-[50px]`,
	gridOptionsSet: `grid grid-cols-3 grid-flow-row auto-rows-max`,
	imgInside: `col-span-3`,
	boxHeightOptions: `mb-10 p-10`,
	fontAwesomeIconTemplateColor: `text-[30px] pb-[10px]`,
	fontAwesomeIconTemplateColorSet: `text-[30px] pb-[10px] text-blue-600`,
	textInsideSuggestions: `text-[25px]`,
	textInsideSuggestionsPara: `text-[17px]`,
};

const Homepage = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.headerMain}>
				<div className={style.boxOne}>
					<div className={style.textInside}>
						Always the Ride <span className={style.insideBr}>You want</span>
					</div>
					<p className={style.textInsidePara}>Lorem ipsum dolor sit amet.</p>
				</div>
				<div>
					<img
						className={style.imgHeader}
						src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_620,h_740/v1536723733/assets/72/aa6395-adde-496f-8e11-0a58a1a1ffb3/original/Ride---Bahrain-Jordan-Lebanon-Qatar-and-UAE.jpg"
						alt=""
					/>
				</div>
			</div>
			<div>
				<h1 className={style.subHeader}>Why Use the Uber App?</h1>
				<div className={style.gridOptionsSet}>
					<div className={style.imgInside}>
						<Image src={imgPara} />
					</div>
					<div className={style.boxHeightOptions}>
						<div className={style.fontAwesomeIconTemplateColor}>
							<FontAwesomeIcon icon={faClock} />
						</div>
						<p className={style.textInsideSuggestions}>Rides On Demand</p>
						<p className={style.textInsideSuggestionsPara}>
							{' '}
							Request a ride at any time and on any day of the year.
						</p>
					</div>
					<div className={style.boxHeightOptions}>
						<div className={style.fontAwesomeIconTemplateColor}>
							<FontAwesomeIcon icon={faMoneyBill1} />
						</div>
						<p className={style.textInsideSuggestions}>
							Budget-friendly options
						</p>
						<p className={style.textInsideSuggestionsPara}>
							Compare prices on every kind of ride, from daily commutes to
							special evenings out.
						</p>
					</div>
					<div className={style.boxHeightOptions}>
						<div className={style.fontAwesomeIconTemplateColor}>
							<FontAwesomeIcon icon={faMap} />
						</div>
						<p className={style.textInsideSuggestions}>
							An easy way to get around
						</p>
						<p className={style.textInsideSuggestionsPara}>
							Tap and let your driver take you where you want to go.
						</p>
					</div>
				</div>
				<h1 className={style.subHeaderV2}>Your Safety Matters</h1>
				<p className="safety-header-p">
					Peace of mind is designed into your experience.
				</p>
				<div className={style.gridOptionsSet}>
					<div className={style.boxHeightOptions}>
						<div className={style.fontAwesomeIconTemplateColorSet}>
							<FontAwesomeIcon icon={faShield} />
						</div>
						<p className={style.textInsideSuggestions}>Safety features</p>
						<p className={style.textInsideSuggestionsPara}>
							Tell your loved ones where you are. Get help with the tap of a
							button. Technology makes travel safer than ever before.
						</p>
					</div>
					<div className={style.boxHeightOptions}>
						<div className={style.fontAwesomeIconTemplateColorSet}>
							<FontAwesomeIcon icon={faUsers} />
						</div>
						<p className={style.textInsideSuggestions}>
							An inclusive community
						</p>
						<p className={style.textInsideSuggestionsPara}>
							We are millions of riders and drivers who share Community
							Guidelines and depend on one another to do the right thing.
						</p>
					</div>
					<div className={style.boxHeightOptions}>
						<div className={style.fontAwesomeIconTemplateColorSet}>
							<FontAwesomeIcon icon={faComments} />
						</div>
						<p className={style.textInsideSuggestions}>Help if you need it</p>
						<p className={style.textInsideSuggestionsPara}>
							Get 24/7 support in the app for any questions or safety concerns
							you might have.
						</p>
					</div>
				</div>
			</div>
			<TabbedComponent />
			<EverywhereTravelSection />
			<TravelArounfTheWorldSection />
		</div>
	);
};

export default Homepage;
