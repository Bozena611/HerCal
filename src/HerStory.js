import React, { useContext } from 'react';
import DataContext from './context/DataContext';

const HerStory = () => {
	const women = useContext(DataContext);


	return (
		<div className="herstory-main-div">
			<h1>Test</h1>
		</div>
	);
};

export default HerStory;