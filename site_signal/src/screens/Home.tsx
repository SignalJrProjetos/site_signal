import React from "react";
import "../assets/styles/global.css";
import "../screens/home.css";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Navbar } from "../components/Navbar/Navbar";
import { Solutions } from "../components/Solutions/Solutions";
import { Contact } from "../components/Contact/Contact";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { Footer } from "../components/Footer/Footer";
import  Carousel  from "react-bootstrap/Carousel";
import border from "../assets/svg/banner.border.svg";
import bannerImg from "../assets/svg/img.home-banner.svg";
import facebookIco from "../assets/svg/icon.facebook.svg";
import instagramIco from "../assets/svg/icon.instagram.svg";
import linkedinIco from "../assets/svg/icon.linkedin.svg";
import aboutLogo from "../assets/svg/logo.SignalSymbolBg.svg";
import UFRRJ from "../assets/svg/logo.UFRRJPartners.svg";
import Brasil from "../assets/svg/logo.Brasil JuniorPartners.svg";
import Rio from "../assets/svg/logo.Rio JuniorPartners.svg";
import TOTVS from "../assets/svg/logo.TOTVSPartners.svg";
import Americanas from "../assets/svg/logo.AmericanasPartners.svg";
import Empower from "../assets/svg/logo.EmpowerPartners.svg";


export const Home = () =>{
	
	return (
		<div className="App">
			

			{/* Parceiros*/}
	
			<div className="partnersContainer">
				<div>
					<h1 className="title">Parceiros</h1>
				</div>
           
				<div className="partnersImages">
					<img className="partnerImg" id="UFRRJ" src={UFRRJ} alt=""/>
					<img className="partnerImg" id="Brasil" src={Brasil} alt=""/>
					<img className="partnerImg" id="Rio" src={Rio} alt=""/>
					<img className="partnerImg" id="TOTVS" src={TOTVS} alt=""/>
					<img className="partnerImg" id="Empower" src={Empower} alt=""/>
					<img className="partnerImg" id="Americanas" src={Americanas} alt=""/>
				</div>
			</div>	
		</div>
	);
};