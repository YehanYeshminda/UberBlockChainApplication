import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShield,
	faUsers,
	faComments,
} from '@fortawesome/free-solid-svg-icons';

const GridSectionSetPartTwo = () => {
	const style = {
		gridOptionsSet: `grid grid-cols-3 grid-flow-row auto-rows-max w-[1200px] h-[50vh]`,
		boxHeightOptions: `mb-10 p-10`,
		fontAwesomeIconTemplateColorSet: `text-[30px] pb-[10px] text-blue-600`,
		textInsideSuggestions: `text-[25px]`,
		textInsideSuggestionsPara: `text-[17px]`,
	};

	return (
		<div className={style.gridOptionsSet}>
			<div className={style.boxHeightOptions}>
				<div className={style.fontAwesomeIconTemplateColorSet}>
					<FontAwesomeIcon icon={faShield} />
				</div>
				<p className={style.textInsideSuggestions}>Safety features</p>
				<p className={style.textInsideSuggestionsPara}>
					Tell your loved ones where you are. Get help with the tap of a button.
					Technology makes travel safer than ever before.
				</p>
			</div>
			<div className={style.boxHeightOptions}>
				<div className={style.fontAwesomeIconTemplateColorSet}>
					<FontAwesomeIcon icon={faUsers} />
				</div>
				<p className={style.textInsideSuggestions}>An inclusive community</p>
				<p className={style.textInsideSuggestionsPara}>
					We are millions of riders and drivers who share Community Guidelines
					and depend on one another to do the right thing.
				</p>
			</div>
			<div className={style.boxHeightOptions}>
				<div className={style.fontAwesomeIconTemplateColorSet}>
					<FontAwesomeIcon icon={faComments} />
				</div>
				<p className={style.textInsideSuggestions}>Help if you need it</p>
				<p className={style.textInsideSuggestionsPara}>
					Get 24/7 support in the app for any questions or safety concerns you
					might have.
				</p>
			</div>
		</div>
	);
};

export default GridSectionSetPartTwo;
