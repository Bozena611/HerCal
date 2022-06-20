import React, { useContext, useState } from 'react';
import DataContext from './context/DataContext';
import { Link } from 'react-router-dom';

const HerStory = () => {
	const women = useContext(DataContext);
	const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	const categories = ["All", "Activistas", "Arquitectas", "Arte", "Astronautas", "Astrónomas", "Bibliotecarias", "Científicas", "Filólogas", "Filósofas", "Historiadoras", "Informáticas", "Ingenieras"]
	const [date, setDate] = useState(new Date());
	/*const [womenMonth, setWomenMonth] = useState(null);*/
	const [category, setCategory] = useState();

  const date1 = date;
  const [month1, setMonth1] = useState(date1.getMonth());
  /*const [month2, setMonth2] = useState(parseInt(month1+1))*/
  const day1 = date1.getDate()
  /*console.log(month1)
 /* const month2 = parseInt(month1+1);*/

  /*console.log ("month1", parseInt(month1+1));*/

  const changeDate = (value) => {
  	/*console.log(typeof(value));*/
 		const month2 = parseInt(value);
 		/*console.log("month2", month2)*/
		setMonth1(month2);
		/*setWomenMonth(women);*/
	}

	const changeCategory = (e) => {
		const text = e.currentTarget.innerHTML;
		console.log("category1", text)
  	/*console.log(typeof(value));*/
 		/*const month2 = parseInt(value);*/
 		/*console.log("month2", month2)*/
		setCategory(text);

		/*setWomenMonth(women);*/
	}
console.log("category", category)

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
					<h5 key={i} className="categoriesList" onClick={changeCategory}>{item}</h5>
				))}
				</div>
			</div>
			<div>
				<ul className="herstory-data-list">
			    {women?.map((item, i) => {
			    	if ((parseInt(item.MesNace) === parseInt(month1+1)) || (parseInt(item.MesF) === parseInt(month1+1)) || (item.Categoría.includes(category))) {
			    		console.log("category", category);
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
				             	<p className="">Nace: {item.Nace}</p>
				             		<p className="">Fallece: {item.Fallece}</p>
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
}
;

export default HerStory;