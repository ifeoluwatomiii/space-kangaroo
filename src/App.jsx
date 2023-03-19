import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Team from "./pages/Team";
import Navbar from "./components/Navbar";


const App = () => {
	return (
		<div className="font-quicksand ">
		<Navbar />
			
			
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/team" element={<Team />}/>
			</Routes>
			
			
     
		</div>
	);
};

export default App;
