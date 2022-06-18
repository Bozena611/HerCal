import React, { createContext, useState, useEffect } from "react";
import Papa from "papaparse";

const DataContext = createContext({});

export const DataProvider =  ({ children })  => {
  const [women, setWomen] = useState();

  /*const [name, setName] = useState("Peter Pan")*/
  /*const [date, setDate] = useState(new Date());

   const date1 = date;
   const month1 = date1.getMonth();
   const day1 = date1.getDate()*/

  useEffect(()=>{
    Papa.parse("https://docs.google.com/spreadsheets/d/1sixLnoreA42rwo3A3J_vnaL0a5F7QAEx/pub?output=csv",{
      header:true,
      download: true,
      skipEmptyLines: true,
      complete: (results) => {
      setWomen(results.data);
    },
    })
  },[])

  console.log("DATA", women)

  return (
    <DataContext.Provider value={women}>
        {children}
    </DataContext.Provider>
  );
};


export default DataContext;