import React from "react";
import "./css/services.css";
import { SolutionsAlt } from "../components/SolutionsAlt/SolutionsAlt";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Footer } from "../components/Footer/Footer";

export const Services = () => {
	return (
		<>
			<ParticlesContainer/>
			<Navbar/>
			<Header 
				title="Descubra como podemos alavancar o seu negócio!"
				text="Conheça nossos principais serviços e suas respectivas etapas de projeto para entregarmos a nossa solução até suas mãos. Dê uma olhada em nosso Portfólio!"/>
			<SolutionsAlt/>
			<Footer/>
		</>
	);
};