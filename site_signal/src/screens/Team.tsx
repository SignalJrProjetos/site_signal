import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Status } from "../components/Status/Status";
import "../screens/css/team.css";
import { AboutMEJ } from "../components/AboutMEJ/AboutMEJ";
import { Footer } from "../components/Footer/Footer";

export const Team = () =>{
	return (
		<div className="team">
			<h1>Página time</h1>
			<Status/>
			<Footer/>
		</div>
	);
};