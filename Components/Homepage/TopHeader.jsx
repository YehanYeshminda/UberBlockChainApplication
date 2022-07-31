import React from 'react';

const TopHeader = () => {
	const style = {
		headerMain: `grid grid-cols-2 mt-[80px] sm:mx-auto w-[1200px] h-[100vh]`,
		boxOne: `h-500 w-500`,
		textInside: `mt-[300px] text-start text-[56px] pl-[100px]`,
		insideBr: 'block mg-[10px]',
		textInsidePara: `text-start pl-[100px]`,
		imgHeader: `h-[650px]`,
	};

	return (
		<div>
			<div className={style.headerMain}>
				<div className={style.boxOne}>
					<div className={style.textInside}>
						Always the Ride <span className={style.insideBr}>You want</span>
					</div>
					<p className={style.textInsidePara}>
						We are here to give you transportation!
					</p>
				</div>
				<div>
					<img
						className={style.imgHeader}
						src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_620,h_740/v1536723733/assets/72/aa6395-adde-496f-8e11-0a58a1a1ffb3/original/Ride---Bahrain-Jordan-Lebanon-Qatar-and-UAE.jpg"
						alt="header"
					/>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
