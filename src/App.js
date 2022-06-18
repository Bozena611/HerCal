import { Routes, Route } from "react-router-dom"
import { DataProvider } from './context/DataContext';
import Nav from './Nav';
import HerCal from './HerCal';
import HerStory from './HerStory';
import WomanDetails from './WomanDetails';


function App() {
	return (
    <div className="App">
    	<DataProvider>
        <Nav />
      	<Routes>
       	 <Route exact path="/" element={<HerCal />} />
       	 <Route path="/herstory" element={<HerStory />} />
         <Route path="/hercal/:name" element={<WomanDetails />} />
    	  </Routes>
   		</DataProvider>
    </div>
  )
}

  export default App;