import React from 'react';
import framersImg from '../../temp/framers.jpg';
import Image from 'next/image';

const SafetyInsuranceHelpInfo = () => {
	const style = {
		gridSectionSet: `grid grid-cols-2 pt-[100px] max-w-[1250px] m-auto`,
		// boxOne: `m-[1rem]`,
		textInsideGrid: `mt-[3.8rem] ml-[2.2rem] text-[1.5rem]`,
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
						There’s auto insurance to help protect you
						<span className={style.insideBr}></span>
					</h1>

					<div>
						<p className={style.paraInsideGrid}>
							Leading auto insurance providers help protect riders and drivers
							on the Uber app. Uber maintains commercial auto insurance in case
							of a covered accident, including at least $1 million in liability
							insurance on behalf of drivers and delivery people once a ride is
							accepted.
						</p>
					</div>
				</div>
			</div>

			<div className={style.boxTwo}>
				<div className={style.ImageStylingSet}>
					<Image src={framersImg} />
				</div>
			</div>
		</div>
	);
};

export default SafetyInsuranceHelpInfo;
