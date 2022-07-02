import React from 'react';
import ItemsContainer from './ItemsContainer';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#6d706e19] py-7"></div>
			<ItemsContainer />
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
			>
				<span>© 2020 Appy. All rights reserved.</span>
				<span>Terms · Privacy Policy</span>
			</div>
		</footer>
	);
};

export default Footer;
