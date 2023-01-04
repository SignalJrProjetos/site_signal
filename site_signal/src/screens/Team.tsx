import React from "react";
import "../screens/css/team.css";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { AboutUs } from "../components/TeamPage/AboutUs/AboutUs";
import { Status } from "../components/TeamPage/Status/Status";
import { AboutMEJ } from "../components/TeamPage/AboutMEJ/AboutMEJ";
import { CoreValues } from "../components/TeamPage/CoreValues/CoreValues";
import { TeamList } from "../components/TeamPage/TeamList/TeamList";
import { Footer } from "../components/Footer/Footer";

export const Team = () =>{
	return (
		<div className="team">
			<ParticlesContainer/>
			<Navbar/>
			<Header 
				title="Conheça a Signal Júnior e dê o próximo passo com seu negócio"
				text="Conheça um pouco mais sobre a nossa empresa, o que é o Movimento Empresa Júnior e nossos talentosos membros."
			/>
			<AboutUs/>
			<Status/>
			<AboutMEJ/>
			<CoreValues/>
			<TeamList/>
			<Footer/>
		</div>
	);
};