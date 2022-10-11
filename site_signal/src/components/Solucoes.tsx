import React, {useState} from "react";
import styled from "styled-components";

// Estilização dos componentes

// Botar imagem de fundo
const BackGround = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
 `;

const PreTitle = styled.p`
    color: #9C9C9C;
    font-family: "Saira";
    font-size: 23px;
    text-align: center;
    margin-bottom: 0px;
`;

const Title = styled.h1`
    color: #610C7D;
    font-family: "Scada";
    font-weight: bolder;
    text-align: center;
`;

const Button = styled.button`
    width: 267.56px;
    height: 88px;
    font-family: "Saira";
    font-size: 20px;
    color: white;
    border-radius: 50px;
    border: white 3px solid;
    margin: 10px 10px;
    transition: all 0.5s;
`;


// Criando o componente Contato
export const Solucoes = () => {
	const [services, setServices] = useState<string>("Soluções");
	const [buttonSolucoes, setButtonSolucoes] = useState("#8700A9");
	const [buttonIdentidade, setButtonIdentidade] = useState("#8700A9");
	const [buttonManutencao, setButtoManutencao] = useState("#8700A9");
	// Retornando os elementos do componente
	
	function changeColor(button: string) {
		const buttonName = button;
		if (buttonName == "Soluções") {
			setButtonSolucoes("black");
			setButtoManutencao("#8700A9");
			setButtonIdentidade("#8700A9");
			setServices("Soluções");
		}
		if (buttonName == "Identidade") {
			setButtonSolucoes("#8700A9");
			setButtoManutencao("#8700A9");
			setButtonIdentidade("black");
			setServices("Identidade");
		}
	}

	function changeContent() {
		if(services == "Identidade") {
			return (
				<p>Identidade</p>
			);
		}
    
		if(services == "Soluções") {
			return (
				<p>Soluções</p>
			);
		}
	}
	return (
		<BackGround>
			<PreTitle>O que nós fazemos</PreTitle>
			<Title>Nossas soluções para o seu negócio</Title>
			<div style={{"display": "flex", "justifyContent" : "space-evenly"}}>
				<Button onClick={() => changeColor("Soluções")} style={{"backgroundColor": buttonSolucoes}}>Soluções em TI</Button>
				<Button onClick={() => changeColor("Identidade")} style={{"backgroundColor": buttonIdentidade}}>Identidade Visual</Button>
				<Button onClick={() => changeColor("Manutenção")} style={{"backgroundColor": buttonManutencao}}>Manutenção</Button>
			</div>                
			{/* <button onClick={() => setServices("Identidade")}>Identidade</button>
			<button onClick={() => setServices("Soluções")}>Soluções</button> */}
			<div>
				{changeContent()}
			</div>
		</BackGround>
	);
};