import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Team } from "./screens/Team";
import { Services } from "./screens/Services";
import { Developing } from "./screens/Developing";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () =>{
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/equipe" element={<Team/>}/>
				<Route path="/services" element={<Services/>}/>
				<Route path="/developing" element={<Developing/>}/>
			</Routes>
		</BrowserRouter>
	);
};