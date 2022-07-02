import React from 'react';
import Image from 'next/image';
import imgGirlPhone from '../temp/womanWithPhone_03.png';

const TravelArounfTheWorldSection = () => {
	const style = {
		container: `max-h-[300px] mt-[5rem] mb-[3rem]`,
		gridLayout: `grid grid-cols-2`,
		box1SideWays: `h-[350px] m-auto`,
		box2SideWays: `m-auto`,
		imgInsideContainer: `h-auto w-auto`,
		insideHeaderV2: `text-[40px]`,
		insideBr: 'block mg-[10px]',
	};

	return (
		<div className={style.container}>
			<div className={style.gridLayout}>
				<div className={style.box1SideWays}>
					<Image src={imgGirlPhone} width={270} height={270} />
				</div>
				<div className={style.box2SideWays}>
					<h2 className={style.insideHeaderV2}>
						Ways People Move Around{' '}
						<span className={style.insideBr}>the World</span>
					</h2>
					<p>
						The Uber app gives you the power to get where you want to go with
						access to different types of rides across more than 10,000 cities.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TravelArounfTheWorldSection;
