import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () =>{
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
			</Routes>
		</BrowserRouter>
	);
};