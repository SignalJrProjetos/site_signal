import React from "react";
import "../screens/css/team.css";
import { TeamList } from "../components/TeamList/TeamList";
import { Footer } from "../components/Footer/Footer";

export const Team = () =>{
	return (
		<div className="team">
			<h1>Página time</h1>
			<TeamList/>
			<Footer />
		</div>
	);
};