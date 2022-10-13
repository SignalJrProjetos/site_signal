import React, {useState} from "react";
import styled from "styled-components";
import imagemSolucoes from "../assets/manutencao.png";

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

const ButtonClicked = styled.button`
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

const Button = styled.button`
	background-image: linear-gradient(#8700A9, #980089);
	width: 210px;
	height: 70px;
	font-family: "Scada";
	font-size: 25px;
	color: white;
	border-radius: 50px;
	border: white 3px solid;
	transition: all 0.3s;
	:hover {
		background-image: none;
		background-color: white;
		color: #610C7D;
		border: #610C7D 2px solid
	};
	margin-top: 5px;
`;



// Criando o componente Contato
export const Solucoes = () => {
	// O botão ativado por padrão é o Soluções
	const [services, setServices] = useState<string>("Soluções");
	const [buttonSolucoes, setButtonSolucoes] = useState<boolean>(true);
	const [buttonIdentidade, setButtonIdentidade] = useState<boolean>(false);
	const [buttonManutencao, setButtonManutencao] = useState<boolean>(false);

	function activeButton(button: string) {	
		switch (button) {
		case "Soluções":
			setButtonSolucoes(current => !current);
			setButtonIdentidade(false);
			setButtonManutencao(false);
			setServices("Soluções");
			break;
		case "Identidade":
			setButtonIdentidade(current => !current);
			setButtonSolucoes(false);
			setButtonManutencao(false);
			setServices("Identidade");
			break;
		case "Manutenção":
			setButtonManutencao(current => !current);
			setButtonIdentidade(false);
			setButtonSolucoes(false);
			setServices("Manutenção");
			break;
		}
	}

	function changeContent() {
		if(services == "Identidade") {
			return (
				<p>Identidade</p>
			);
		}
    
		if(services == "Manutenção") {
			return (
				<p>Manutenção</p>
			);
		}

		if(services == "Soluções") {
			return (
				<>
					<img src={imagemSolucoes} alt="" />
					<div style={{textAlign:"right", marginRight: "3%", display: "flex", flexDirection: "column", alignItems: "end" }}>
						<div style={{width: "fit-content", borderBottom: "#610C7D 10px solid"}}>
							<h1 style={{color: "#610C7D", fontFamily: "Scada", fontSize: "40px"}}>Soluções em TI</h1>
						</div>
						<p style={{width: "80%",color: "#707070", fontFamily: "Scada", fontSize: "25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.</p>
						<Button>Saiba mais</Button>
					</div>
				</>
			);
		}
	}
	return (
		<BackGround>
			<PreTitle>O que nós fazemos</PreTitle>
			<Title>Nossas soluções para o seu negócio</Title>
			<div style={{display: "flex", justifyContent : "space-evenly"}}>
				<ButtonClicked
					style={{backgroundColor: buttonSolucoes ? "#8700A9" : "transparent", border: buttonSolucoes ? "none" : "#610C7D 2px solid", color: buttonSolucoes ? "white" : "black"}}
					onClick={() => activeButton("Soluções")}>
					Soluções em TI
				</ButtonClicked>
				<ButtonClicked
					style={{backgroundColor: buttonIdentidade ? "#8700A9" : "transparent", border: buttonIdentidade ? "none" : "#610C7D 2px solid", color: buttonIdentidade ? "white" : "black"}}
					onClick={() => activeButton("Identidade")}>
					Identidade Visual
				</ButtonClicked>
				<ButtonClicked
					style={{backgroundColor: buttonManutencao ? "#8700A9" : "transparent", border: buttonManutencao ? "none" : "#610C7D 2px solid", color: buttonManutencao ? "white" : "black"}}
					onClick={() => activeButton("Manutenção")}>
					Manutenção
				</ButtonClicked>
			</div>                
			<div style={{display: "flex", marginTop: "40px"}}>
				{changeContent()}
			</div>
		</BackGround>
	);
};