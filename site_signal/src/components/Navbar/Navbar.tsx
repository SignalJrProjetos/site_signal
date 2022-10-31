import React, { Fragment } from "react";
import "../../assets/styles/global.css";
import "./navbar.css";
import logo from "../../assets/imgs/logo.SignalExtensaBranca.png";

export const Navbar = () => {
	return (
		<div className="navbarContainer">
			<>
				<a href=""><img style = {{"height": 56, "marginLeft": 44}} src={logo}/></a>
			</>
			<div style={{"display": "flex", "alignItems": "center"}}> 
				<a href="">Serviços</a>
				<a href="">Equipe</a>
				<a className="buttonWhite" href="">Contato</a>
			</div>
		</div>
	);
};