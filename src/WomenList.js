import React, { useContext } from 'react';
import  DataContext from './context/DataContext';
import { Link } from 'react-router-dom';


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
	         	<Link to={`/hercal/:name`} key={i.toString()} >
		          <div className="card-container">
		           <img src={item.Imagen} className="card-img" alt={item.Nombre} />
		           <div className="card-details">
				        <span className="card-yellow-title"> <span className="card-name">{item.Nombre}</span> - <span className="nace-fallece">{item.Nace} / {item.Fallece}</span></span>
		            <p className="bio-corta">{item.BioCorta}</p>
				       </div>
		          </div>
		         </Link>
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