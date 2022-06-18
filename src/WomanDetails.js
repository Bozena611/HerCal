import React, { useContext } from 'react';
import  DataContext from './context/DataContext';
import { useParams, useLocation } from "react-router-dom";

const WomanDetails = () => {
	const women = useContext(DataContext);
	const { name } = useParams();
	const location = useLocation();
  /*const { movie } = location.state.movie;*/

	console.log("location", location)

	return (
		<h1>Test</h1>
		)
}
export default WomanDetails;