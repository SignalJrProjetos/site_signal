import React from "react";
import { Footer } from "../components/HomePage/Footer/Footer";
import { Contact } from "../components/HomePage/Contact/Contact";
import contactImgService from "../assets/svg/Img.contact-service.svg";
import { Portfolio } from "../components/ServicesPage/Portfolio/Porfolio";
import { ParticlesContainer } from "../components/HomePage/ParticlesContainer";
import { Header } from "../components/HomePage/Header/Header";
import { Navbar } from "../components/HomePage/Navbar/Navbar";

export const Services = () => {
	return(
		<>
			<ParticlesContainer/>
			<Navbar/>
			<Header 
				title="Descubra como podemos alavancar seu negócio"
				text="Conheça nossos principais serviços e nossas etapas de projeto para entregarmos a nossa solução até suas mãos"/>
			<Portfolio/>
			<Contact
				imagem={ contactImgService }
				style={{"marginBottom": "-275px"}}
			/>
			<Footer/>
		</>
	);
};