import React from 'react';
import PersonRidingCar from '../../temp/personRidingCar.jpg';
import Image from 'next/image';

const PersonRidingCarSection = () => {
	const styles = {
		gridSection: `grid grid-cols-2 gap-9 mt-[100px]`,
		insideBr: 'block mg-[10px]',
		oneGridBox: `w-[1000px] h-[400px]`,
		secondGridBox: `pl-[300px] pt-[50px] bg-gray-100 h-[500px]`,
		appSupportText: `text-3xl text-black-900 underline underline-offset-1 tracking-wide`,
		appSupportTextSecondary: `pt-[40px] tracking-wide`,
		getCurrrentDateText: `pt-[240px] text-black-200 text-sm`,
	};

	return (
		<div>
			<div className={styles.gridSection}>
				<div className={styles.oneGridBox}>
					<Image
						src={PersonRidingCar}
						width={1200}
						height={600}
						alt="person riding car"
					/>
				</div>
				<div className={styles.secondGridBox}>
					<p className={styles.appSupportText}>
						In-app Support - Help at{' '}
						<span className={styles.insideBr}>the tap of a button!</span>
					</p>
					<p className={styles.appSupportTextSecondary}>
						Blog detailing contents of safety toolkit, how{' '}
						<span className={styles.insideBr}> to access them</span>
					</p>

					<p className={styles.getCurrrentDateText}>
						{new Date().toLocaleString() + ''} / Sri Lanka
					</p>
				</div>
			</div>
		</div>
	);
};

export default PersonRidingCarSection;
