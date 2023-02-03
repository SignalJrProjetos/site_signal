import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Team } from "./screens/Team";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () =>{
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				{/* <Route path="/" element={<Home/>}/> */}
				<Route path="/" element={<Team/>}/>
			</Routes>
		</BrowserRouter>
	);
};