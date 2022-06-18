import React, { useContext } from 'react';
import DataContext from './context/DataContext';

const Test = () => {
	const name = useContext(DataContext);


	return (
		<div>
			<h1>{name}</h1>
		</div>
	);
};

export default Test;