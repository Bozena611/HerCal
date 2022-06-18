import React, { useContext } from 'react';
import  DataContext from './context/DataContext';

const WomenList = ({day1, month1}) => {
	const women = useContext(DataContext);
	/*const name = useContext(DataContext);*/

	console.log("WOMEN2", women);
	/*console.log("NAME", name);*/


	if (women) {
		return (
			<div>

				<ul className="data-list">
			    {women.map((item, i) => (
	       	(item.MesNace == month1+1 && item.DiaNace == day1) || (item.MesF == month1+1 && item.DiaF == day1) ? (
	          <div key={i} className="card-container">
	            <img src={item.Imagen} className="card-img" alt={item.Nombre} />
	            <div>
			         <p> {item.Nombre} - Nace: {item.Nace}</p>
	             <p>{item.BioCorta}</p>
			        </div>
	          </div>
	          )
	          :
	          null
			    ))}
			  </ul>
			</div>
		);
	} else {
		return null
	}
};

export default WomenList;