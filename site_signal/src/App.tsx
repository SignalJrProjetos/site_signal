import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Team } from "./screens/Team";
import { Developing } from "./screens/Developing";
import { Services } from "./screens/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import { ServiceInfo } from "./components/ServiceInfoPage/ServiceInfo";

export const App = () =>{
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Home/>}/>
				{/* <Route path="/" element={<Home/>}/> */}
				<Route path="/equipe" element={<Team/>}/>
				<Route path="/servicos" element={<Services/>}/>
				<Route path="/servicos/projetos/:slug" element={<ServiceInfo/>}/>
				<Route path="/developing" element={<Developing/>}/>
			</Routes>
		</BrowserRouter>
	);
};