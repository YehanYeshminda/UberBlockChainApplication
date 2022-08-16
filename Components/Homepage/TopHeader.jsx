import React from 'react';

const TopHeader = () => {
	return (
		<div className="sm:mt-10 flex items-center justify-between  md:grid md:grid-cols-2 md:mt-10 md:max-w-7xl md:h-screen">
			<div className="w-[500px] h-[250px] md:w-[500px] md:h-[500px]">
				<div className="mt-20 text-2xl text-center leading-tight md:text-left md:mt-72 md:text-6xl md:pl-[100px] md:leading-snug">
					Always the Ride You<span className="block mg-[10px]"> want</span>
				</div>
				<p className="text-xs sm:text-center md:text-lg md:text-left md:pl-[100px] ">
					We are here to give you <br /> transportation!
				</p>
			</div>
			<div className="max-w-lg mt-5 md:max-w-3xl md:mt-0">
				<img
					className="w-full object-cover"
					src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_620,h_740/v1536723733/assets/72/aa6395-adde-496f-8e11-0a58a1a1ffb3/original/Ride---Bahrain-Jordan-Lebanon-Qatar-and-UAE.jpg"
					alt="header"
				/>
			</div>
		</div>
	);
};

export default TopHeader;
