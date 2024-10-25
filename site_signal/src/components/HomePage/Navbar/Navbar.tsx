import React ,{ useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../../assets/imgs/logo.SignalExtensaBranca.png";
import logoMobile from "../../../assets/imgs/logo.SignalCompactaBranca.png";
import homeIco from "../../../assets/svg/icon.home.svg";
import servicesIco from "../../../assets/svg/icon.services.svg";
import teamIco from "../../../assets/svg/icon.team.svg";
import arrowIco from "../../../assets/svg/icon.arrow.svg";
import facebookIco from "../../../assets/svg/icon.facebook.svg";
import instagramIco from "../../../assets/svg/icon.instagram.svg";
import linkedinIco from "../../../assets/svg/icon.linkedin.svg";

export const Navbar = () => {

	const navigate = useNavigate();
	const location = useLocation();
	
	const handleContactClick = () => {
		if (location.pathname !== "/") {
			// Se não estiver na página inicial, navega para o início
			navigate("/", { state: { scrollToContact: true } });
		} else {
			document.getElementById("contactContainer")?.scrollIntoView({ behavior: "smooth" });
		}
	};
		
	// Detecta navegação e rola para o contato se necessário
	useEffect(() => {
		if (location.state?.scrollToContact) {
			document.getElementById("contactContainer")?.scrollIntoView({ behavior: "smooth" });
			// Limpa o estado scrollToContact para evitar o scroll automático novamente
			window.history.replaceState({}, document.title);
		}
	}, [location]);

	return (
		<nav role="navigation" className="navbarContainer">
			<>
				<a href={process.env.PUBLIC_URL + "/"}><img alt="Logo SignalJR" id="navbarLogo" src={logo}/></a>
			</>
			<div id="navbarMenu" style={{"display": "flex", "alignItems": "center"}}> 
				<a href={process.env.PUBLIC_URL + "/"} >Início</a>
				<a href={process.env.PUBLIC_URL + "/servicos"} >Serviços</a>
				<a href={process.env.PUBLIC_URL + "/equipe"} >Equipe</a>
				<a className="buttonWhite" onClick={handleContactClick}>Contato</a>
			</div>

			<div id="menuToggle">
				<input type="checkbox"/>
				<span/>
				<span/>
				<span/>
				<div id="menu">
					<img alt="Imagem para abrir o menu mobile" id="navLogoMobile" src={logoMobile} />
					<ul>
						<li><a id="menuOptionsLink" href={process.env.PUBLIC_URL + "/"}> <img alt="Icone inicio" src={homeIco}/> Início <img alt="Icone seta" src={arrowIco}/> </a></li>
						<li><a id="menuOptionsLink" href={process.env.PUBLIC_URL + "/servicos"}> <img alt="Icone serviços" src={servicesIco}/> Serviços <img alt="Icone seta" src={arrowIco}/> </a></li>
						<li><a id="menuOptionsLink" href={process.env.PUBLIC_URL + "/equipe"}> <img alt="Icone equipe" src={teamIco}/> Equipe <img alt="Icone seta" src={arrowIco}/></a></li>
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