import React from "react";
import "../screens/css/team.css";
import { AboutMEJ } from "../components/AboutMEJ/AboutMEJ";
import { Footer } from "../components/Footer/Footer";

export const Team = () =>{
	return (
		<div className="team">
			<h1>Página time</h1>
			<AboutMEJ/>
			<Footer />
		</div>
	);
};