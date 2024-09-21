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
				title="Bem-vindo à Signal Júnior. Estamos pronto para ajudá-lo a dar o próximo passo em seu negócio."
				text="Impulsionando seu sucesso com a tecnologia com processos sejam eficientes, maduros e alinhados aos padrões de excelência que você merece."
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