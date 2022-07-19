import React from 'react';
import { FaHeadSideMask } from 'react-icons/fa';
import { RiWheelchairFill } from 'react-icons/ri';
import { AiFillMail } from 'react-icons/ai';

const SafetyGridSectionTwo = () => {
	const style = {
		gridSectionSet: `grid grid-cols-3 mt-[10rem] gap-x-[20px]`,
		fontIconSet: `text-[2.7rem] pb-[1.3rem]`,
		headerInsideGrid: `text-[1.1rem] font-bold mb-[10px]`,
		textInsideGrid: `mt-[10px]`,
	};

	return (
		<div className={style.gridSectionSet}>
			<div className={style.boxOneSection}>
				<div className={style.fontIconSet}>
					<FaHeadSideMask />
				</div>
				<h3 className={style.headerInsideGrid}>Masks are no longer required</h3>
				<p>
					As of April 19, 2022, riders and drivers are not required to wear
					masks when using Uber.*
				</p>
				<p className={style.textInsideGrid}>
					However, the CDC still recommends wearing a mask if you have certain
					personal risk factors and/or high transmission levels in your area.
				</p>
				<p className={style.textInsideGrid}>
					Remember: many people still feel safer wearing a mask because of
					personal or family health situations, so please be respectful of their
					preferences. And if you ever feel uncomfortable, you can always cancel
					the trip.
				</p>
			</div>
			<div className={style.boxTwoSection}>
				<div className={style.fontIconSet}>
					<RiWheelchairFill />
				</div>
				<h3 className={style.headerInsideGrid}>
					Updating our no-front-seat policy
				</h3>
				<p>
					Riders are no longer required to sit in the back seat. However, to
					give drivers space, we ask that riders only use the front seat if it’s
					required because of the size of their group.
				</p>
			</div>
			<div className={style.boxThreeSection}>
				<div className={style.fontIconSet}>
					<AiFillMail />
				</div>
				<h3 className={style.headerInsideGrid}>
					Thank you for helping take care of one another
				</h3>
				<p>
					We know the pandemic has been difficult. But you’ve continued to go
					the extra mile to help protect our communities—whether it’s wearing a
					mask, making space for one another, or giving drivers the respect they
					deserve. Thank you for that.
				</p>
				<p className={style.textInsideGrid}>
					HIt’s still important to take safety precautions while riding,
					driving, and delivering. So make sure to roll down the windows for
					extra airflow, sanitize your hands before and after trips or
					deliveries, and always cover your cough or sneeze.
				</p>
			</div>
		</div>
	);
};

export default SafetyGridSectionTwo;
