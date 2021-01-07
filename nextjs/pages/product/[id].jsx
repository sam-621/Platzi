import React from 'react';
import { useRouter } from 'next/router';

import NavBar from '../../components/navbar/NavBar';

const ProductItem = () => {
	const { id } = useRouter().query;
	return (
		<>
			<NavBar />
			<div>
				<h1>{id}</h1>
			</div>
		</>
	);
};

export default ProductItem;
