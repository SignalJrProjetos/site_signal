import React from "react";
import { Footer } from "../components/HomePage/Footer/Footer";
import { Contact } from "../components/HomePage/Contact/Contact";
import contactImgService from "../assets/svg/Img.contact-service.svg";
import { Portfolio } from "../components/ServicesPage/Portfolio/Porfolio";
import { ParticlesContainer } from "../components/HomePage/ParticlesContainer";
import { Header } from "../components/HomePage/Header/Header";
import { Navbar } from "../components/HomePage/Navbar/Navbar";
import { Solutions } from "../components/HomePage/Solutions/Solutions";

export const Services = () => {
	return(
		<>
			<ParticlesContainer/>
			<Navbar/>
			<Header 
				title="Descubra como podemos <br/> alavancar seu negócio"
				text="Conheça nossos principais serviços e nossas etapas de projeto para entregarmos a nossa<br/> solução até suas mãos"
				isSocialMedia={false}
				showBorder={true}/>
			<Solutions />
			<Portfolio/>
			<Contact
				imagem={ contactImgService }
				style={{"marginBottom": "-275px"}}
			/>
			<Footer/>
		</>
	);
};