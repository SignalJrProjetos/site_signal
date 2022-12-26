import React from "react";
import "../screens/css/team.css";
import { Status } from "../components/Status/Status";
import { AboutMEJ } from "../components/AboutMEJ/AboutMEJ";
import { Footer } from "../components/Footer/Footer";

export const Team = () =>{
	return (
		<div className="team">
			<h1>Página time</h1>
			<Status/>
			<AboutMEJ/>
			<Footer/>
		</div>
	);
};