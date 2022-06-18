import { useState } from 'react';
import Calendar from "react-calendar";

import WomenList from './WomenList';

const HerCal = () => {

  const [date, setDate] = useState(new Date());

  const options = { month: 'long', day: 'numeric' };

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
			  />
			</div>
			<div className="data-container">
				 Eventos para: {date.toLocaleDateString('es-ES', options )}
			</div>
      <WomenList
        month1={month1}
        day1={day1}
      />
    </div>
	);
};

export default HerCal;