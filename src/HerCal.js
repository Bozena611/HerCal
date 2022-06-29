import { useState } from 'react';
import Calendar from "react-calendar";
/*import 'react-calendar/dist/Calendar.css';*/


import WomenList from './WomenList';

const HerCal = () => {

  const [date, setDate] = useState(new Date());

  const options = { month: 'numeric', day: 'numeric' };

  const date1 = date;
  const month1 = date1.getMonth();
  const day1 = date1.getDate()

  return (
    <div className="main-container">
      <div>
			  <Calendar
			  	onChange={setDate}
			  	value={date}
			  	locale="es-ES"
          showNeighboringMonth={false}
			  />
			</div>
			<div className="date-container">
				 {date.toLocaleDateString('es-ES', options )}
			</div>
      <WomenList
        month1={month1}
        day1={day1}
      />
      <div className="bottom-part">
        <h1><span className="suscribir">¡Quiero suscribirme!</span></h1>
      </div>
      <div className="img-container">
        <img src="img1.png" alt="quote"></img>
        <img src="img2.png" alt="herstory"></img>
      </div>
      <div className="bottom-part tienda">
        <h1><span className="suscribir">Visita nuestra tienda</span></h1>
      </div>
    </div>
	);
};

export default HerCal;