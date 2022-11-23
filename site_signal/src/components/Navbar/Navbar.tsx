import React, { Fragment } from "react";
import "../../assets/styles/global.css";
import "./navbar.css";
import logo from "../../assets/imgs/logo.SignalExtensaBranca.png";

export const Navbar = () => {
	return (
		<nav role="navigation" className="navbarContainer">
			<>
				<a href=""><img id="navbarLogo" src={logo}/></a>
			</>
			<div className="navbarMenu" style={{"display": "flex", "alignItems": "center"}}> 
				<a href="">Serviços</a>
				<a href="">Equipe</a>
				<a className="buttonWhite" href="">Contato</a>

				<div id="menuToggle">
					<input type="checkbox"/>
					<span/>
					<span/>
					<span/>
					<ul id="menu">
						<li><a href="">Início</a></li>
						<li><a href="">Serviços</a></li>
						<li><a href="">Equipe</a></li>
					</ul>
				</div>

			</div>
		</nav>
	);
};