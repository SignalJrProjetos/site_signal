import React from "react";
import styled from "styled-components";
import imagemContato from "../assets/imagemContato.png";

export const Contato = () => {
    
	// Estilização dos componentes

	const BackGround = styled.div`
    display: flex;
    width: 100%;
    background-image: linear-gradient(#8700A9, #980089)
    `;

	const Form = styled.div`
    display: flex;
    flex-direction: column;
	align-items: center;
    color: white;
    font-family: "Saira";
	`;

	const Input = styled.input`
	border-radius: 30px;
	height: 50px;
	width: 520px;
	outline: none;
    border: #610C7D 3px solid;
	::placeholder {
		color: #BABABA;
		padding-left: 10px;
		font-size: 20px;
	}
	`;

	const Button = styled.button`
	background-image: linear-gradient(#8700A9, #980089);
	width: 267.56px;
    height: 88px;
    font-family: "Scada";
	font-size: 20px;
    color: white;
    border-radius: 30px;
    border: white 3px solid;
	margin-top: 10px;
	`;

	// Criando o componente Contato

	return (
		<BackGround>
			<img style={{"width": 637, "height": 637}} src={imagemContato}/>
			<Form>
				<h1 style={{"fontWeight": "bolder", "fontSize": 40}}>Contato</h1>
				<p style={{"fontWeight": "lighter", "fontSize": 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<Input placeholder="Digite seu nome..."/>
				<Input style={{"marginTop": 10} }placeholder="Digite seu email..."/>
				<Button>Submeter</Button>
			</Form>
		</BackGround>
	);
};



