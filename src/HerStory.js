import React, { useContext, useState } from 'react';
import DataContext from './context/DataContext';
import { Link } from 'react-router-dom';
import WomenList from './WomenList';

const HerStory = () => {
	const women = useContext(DataContext);
	const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	const categories = ["All", "Activistas", "Arquitectas", "Arte", "Astronautas", "Astrónomas", "Bibliotecarias", "Filólogas", "Filósofas", "Historiadoras", "Informáticas", "Ingenieras"]
	const [date, setDate] = useState(new Date());

  const date1 = date;
  const [month1, setMonth1] = useState(date1.getMonth());
  const day1 = date1.getDate()
  console.log(month1)

const changeDate = (value) => {
	console.log(value)
	setMonth1(value);
}

	return (
		<div>
			<div className="herstory-main">
				<div className="herstory-main-div">
				{months.map((item, i) => (
					<h5 name={i} key={item} className="monthsList" onClick={(e) => changeDate(e.target.attributes.getNamedItem("name").value)}>{item}</h5>
				))}
				</div>
				<div className="herstory-main-div">
					{categories.map((item, i) => (
					<h5 key={i} className="categoriesList">{item}</h5>
				))}
				</div>
			</div>
			<div>
				<ul className="herstory-data-list">
			    {women.map((item, i) => {
			    	if ((item.MesNace == month1+1) || (item.MesF == month1+1)) {
			    		return (
			         	<Link to={`/hercal/:name`} key={i}>
				          <div className="herstory-card-container">
				          	<article className="herstory-article">
					          	<div className="herstory-fecha-div">
						          	<p className="herstory-nace">{item.Nace}</p>
						          	<p className="herstory-fecha-separate"> - </p>
						          	<p className="herstory-fallece">{item.Fallece}</p>
						          </div>
					            <img src={item.Imagen} className="herstory-img" alt={item.Nombre} />
				            	<p className="herstory-img-bio">
				            		<span className="herstory-heighlight-yellow">{item.Nombre},</span>
				            		<span className="herstory-heighlight-white"> {item.BioCorta}</span>
				            	</p>
				            </article>
				            <div>
				            <div className="herstory-card-category-div">
				             	<span className="herstory-card-category">{item.Categoría}</span>
				             	</div>
				             <p>{item.BioCorta}</p>
						        </div>
				          </div>
				         </Link>
			        )
			      } else {
			          return null
			      }
	        })}
			  </ul>
			</div>
		</div>
	);
};

export default HerStory;