import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
	const { id } = useRouter().query;
	return (
		<div>
			<h1>{id}</h1>
		</div>
	);
};

export default ProductItem;
