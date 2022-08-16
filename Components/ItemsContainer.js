import React from 'react';
import Item from './Item';
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from './Menus';

const ItemsContainer = () => {
	return (
		<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 sm:px-8 px-5 py-16 text-center">
			<Item Links={PRODUCTS} title="PRODUCTS" />
			<Item Links={RESOURCES} title="RESOURCES" />
			<Item Links={COMPANY} title="COMPANY" />
			<Item Links={SUPPORT} title="SUPPORT" />
		</div>
	);
};

export default ItemsContainer;
