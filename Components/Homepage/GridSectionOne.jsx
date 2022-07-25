import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgPara from '../../temp/whyRideWithUs_desktop.png';
import Image from 'next/image';
import {
	faClock,
	faMoneyBill1,
	faMap,
} from '@fortawesome/free-solid-svg-icons';

const GridSectionOne = () => {
	const style = {
		gridOptionsSet: `grid grid-cols-3 grid-flow-row auto-rows-max`,
		imgInside: `col-span-3`,
		boxHeightOptions: `mb-10 p-10`,
		fontAwesomeIconTemplateColor: `text-[30px] pb-[10px]`,
		fontAwesomeIconTemplateColorSet: `text-[30px] pb-[10px] text-blue-600`,
		textInsideSuggestions: `text-[25px]`,
		textInsideSuggestionsPara: `text-[17px]`,
	};

	return (
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
				<p className={style.textInsideSuggestions}>Budget-friendly options</p>
				<p className={style.textInsideSuggestionsPara}>
					Compare prices on every kind of ride, from daily commutes to special
					evenings out.
				</p>
			</div>
			<div className={style.boxHeightOptions}>
				<div className={style.fontAwesomeIconTemplateColor}>
					<FontAwesomeIcon icon={faMap} />
				</div>
				<p className={style.textInsideSuggestions}>An easy way to get around</p>
				<p className={style.textInsideSuggestionsPara}>
					Tap and let your driver take you where you want to go.
				</p>
			</div>
		</div>
	);
};

export default GridSectionOne;
