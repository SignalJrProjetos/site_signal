import React, { Fragment } from "react";
import "./navbar.css";
import logo from "../../assets/imgs/logo.SignalExtensaBranca.png";
import logoMobile from "../../assets/imgs/logo.SignalCompactaBranca.png";
import homeIco from "../../assets/svg/icon.home.svg";
import servicesIco from "../../assets/svg/icon.services.svg";
import teamIco from "../../assets/svg/icon.team.svg";
import arrowIco from "../../assets/svg/icon.arrow.svg";
import facebookIco from "../../assets/svg/icon.facebook.svg";
import instagramIco from "../../assets/svg/icon.instagram.svg";
import linkedinIco from "../../assets/svg/icon.linkedin.svg";

export const Navbar = () => {
	return (
		<nav role="navigation" className="navbarContainer">
			<>
				<a href={process.env.PUBLIC_URL + "/"}><img alt="Logo SignalJR" id="navbarLogo" src={logo}/></a>
			</>
			<div id="navbarMenu" style={{"display": "flex", "alignItems": "center"}}> 
				<a href={process.env.PUBLIC_URL + "/developing"} >Serviços</a>
				<a href={process.env.PUBLIC_URL + "/equipe"} >Equipe</a>
				<a className="buttonWhite" href="#contactContainer">Contato</a>
			</div>

			<div id="menuToggle">
				<input type="checkbox"/>
				<span/>
				<span/>
				<span/>
				<div id="menu">
					<img alt="Imagem para abrir o menu mobile" id="navLogoMobile" src={logoMobile} />
					<ul>
						<li><a href={process.env.PUBLIC_URL + "/"}> <img alt="Icone inicio" src={homeIco}/> Início <img alt="Icone seta" src={arrowIco}/> </a></li>
						<li><a href={process.env.PUBLIC_URL + "/developing"}> <img alt="Icone serviços" src={servicesIco}/> Serviços <img alt="Icone seta" src={arrowIco}/> </a></li>
						<li><a href={process.env.PUBLIC_URL + "/equipe"}> <img alt="Icone equipe" src={teamIco}/> Equipe <img alt="Icone seta" src={arrowIco}/></a></li>
					</ul>
					<h3>Vamos Conversar!</h3>
					<div className="socialMedia">
						<a href="https://www.facebook.com/Signal.Jr.ufrrj"><img alt="Icone facebook" src={facebookIco}/></a>
						<a href="https://www.instagram.com/signal_jr/"><img alt="Icone instagram" src={instagramIco}/></a>
						<a href="https://www.linkedin.com/company/signal-jr/mycompany/"><img alt="Icone linkedin" src={linkedinIco}/></a>
					</div>
				</div>
			</div>
		</nav>
	);
};