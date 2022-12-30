import React from "react";
import "../screens/css/team.css";
import { Status } from "../components/Status/Status";
import { AboutMEJ } from "../components/AboutMEJ/AboutMEJ";
import { CoreValues } from "../components/CoreValues/CoreValues";
import { TeamList } from "../components/TeamList/TeamList";
import { Footer } from "../components/Footer/Footer";

export const Team = () =>{
	return (
		<div className="team">
			<Status/>
			<AboutMEJ/>
			<CoreValues/>
			<TeamList/>
			<Footer/>
		</div>
	);
};