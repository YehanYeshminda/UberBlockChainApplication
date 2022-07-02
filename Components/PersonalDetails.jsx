import React from 'react';
import privacyImg from '../temp/privacy.jpg';
import Image from 'next/image';

const PersonalDetails = () => {
	const style = {
		gridSectionSet: `grid grid-cols-2 pt-[100px] max-w-[1250px] m-auto`,
		// boxOne: `m-[1rem]`,
		textInsideGrid: `mt-[5rem] ml-[2.2rem] text-[1.5rem]`,
		headerText: `text-[2.5rem] pb-[20px] leading-[1.2]`,
		insideBr: 'block mg-[10px]',
		paraInsideGrid: `text-[1.1rem]`,
		ImageStylingSet: `w-[600px]`,
		insideBr: 'block mg-[10px]',
		boxTwo: `ml-[50px]`,
		boxOne: `max-w-[550px]`,
	};

	return (
		<div className={style.gridSectionSet}>
			<div className={style.boxOne}>
				<div className={style.textInsideGrid}>
					<h1 className={style.headerText}>
						Your personal details stay private
						<span className={style.insideBr}></span>
					</h1>

					<div>
						<p className={style.paraInsideGrid}>
							We use technology to help keep your phone number private, so
							neither drivers nor riders will see each other’s numbers when
							communicating through the Uber app. Once a trip is completed, the
							app also protects rider information by concealing specific pickup
							and dropoff addresses in a driver’s trip history.
						</p>
					</div>
				</div>
			</div>

			<div className={style.boxTwo}>
				<div className={style.ImageStylingSet}>
					<Image src={privacyImg} />
				</div>
			</div>
		</div>
	);
};

export default PersonalDetails;
