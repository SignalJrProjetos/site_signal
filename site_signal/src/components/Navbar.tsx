import React, { Fragment } from "react";
import styled from "styled-components";
import logo from "../assets/imgs/logoExtensaBranca.png";
import "../assets/styles/global.css";

export const Navbar = () => {

	const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    font-family: Saira;
    font-size: 24px;
    color: white;
    `;

	const Link = styled.a`
    margin-right: 44px;
    color: white;
    text-decoration: none;
    `;
    
	return (
		<Container>
			<>
				<img style = {{"height": 56, "marginLeft": 44}} src={logo}/>
			</>
			<div style={{"display": "flex", "alignItems": "center"}}> 
				<Link href="">Serviços</Link>
				<Link href="">Equipe</Link>
				<a className="botaoTipo1" href="">Contato</a>
			</div>
		</Container>
	);
};