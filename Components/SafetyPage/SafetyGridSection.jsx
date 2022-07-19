import React from 'react';
import SafetyWomen from '../../temp/headerSafety.jpg';
import Image from 'next/image';

const SafetyGridSection = () => {
	const style = {
		gridSectionSet: `grid grid-cols-2 pt-[100px] gap-x-[30px]`,
		// boxOne: `m-[1rem]`,
		textInsideGrid: `mt-[2.2rem] text-[1.5rem]`,
		headerText: `text-[3.5rem]`,
		insideBr: 'block mg-[10px]',
		paraInsideGrid: `leading-6 text-[1.1rem] pt-[20px]`,
	};

	return (
		<div className={style.gridSectionSet}>
			<div className={style.boxOne}>
				<div className={style.textInsideGrid}>
					<h1 className={style.headerText}>Our commitment to safety</h1>
				</div>

				<div>
					<p className={style.paraInsideGrid}>
						We want you to move freely, make the most of your time, and be
						connected to the people and places that matter most to you.
					</p>

					<p className={style.paraInsideGrid}>
						That’s why we’re committed to safety—from the creation of new
						standards to the development of technology with the aim of reducing
						<span className={style.insideBr}> incidents.</span>
					</p>
				</div>
			</div>
			<div className={style.boxTwo}>
				<Image src={SafetyWomen} alt="Safety image " />
			</div>
		</div>
	);
};

export default SafetyGridSection;
