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
import UFRRJ from "../assets/imgs/logo.UFRRJPartners.png";
import Brasil from "../assets/imgs/logo.Brasil JuniorPartners.png";
import Rio from "../assets/imgs/logo.Rio JuniorPartners.png";
import TOTVS from "../assets/imgs/logo.TOTVSPartners.png";
import Americanas from "../assets/imgs/logo.AmericanasPartners.png";
import Empower from "../assets/imgs/logo.EmpowerPartners.png";


export const Home = () =>{
	
	return (
		<div className="App">
			<ParticlesContainer/>
			<Contact/>
		</div>
	);
};