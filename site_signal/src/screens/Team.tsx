import React from "react";
import "../screens/css/team.css";
import { ParticlesContainer } from "../components/HomePage/ParticlesContainer";
import { Navbar } from "../components/HomePage/Navbar/Navbar";
import { Header } from "../components/HomePage/Header/Header";
import { AboutUs } from "../components/TeamPage/AboutUs/AboutUs";
import { Status } from "../components/TeamPage/Status/Status";
import { AboutMEJ } from "../components/TeamPage/AboutMEJ/AboutMEJ";
import { CoreValues } from "../components/TeamPage/CoreValues/CoreValues";
import { TeamList } from "../components/TeamPage/TeamList/TeamList";
import { Footer } from "../components/HomePage/Footer/Footer";

export const Team = () =>{
	return (
		<div className="team">
			<ParticlesContainer/>
			<Navbar/>
			<Header 
				title="Bem-vindo à Signal Júnior. Estamos prontos para ajudá-lo a dar o próximo passo em seu negócio."
				text="Impulsionando seu sucesso com a tecnologia com processos sejam eficientes, maduros e alinhados aos padrões de excelência que você merece."
				showBorder={true}
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