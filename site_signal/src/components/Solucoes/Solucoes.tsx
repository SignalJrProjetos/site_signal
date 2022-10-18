import React, {useState} from "react";
import imagemSolucoes from "../../assets/manutencao.png";
import imagemIdentidadeVisual from "../../assets/identidadeVisual.png";
import imagemManutencao from "../../assets/solucoes.png";
import "./solucoes.css";

// Botar imagem de fundo

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
				<>
					<img src={imagemIdentidadeVisual} alt="" />
					<div className="solucoesContainerText">
						<div className="solucoesTitle">
							<h1>Identidade Visual</h1>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.</p>
						<button id="solucoesButton">Saiba mais</button>
					</div>
				</>
			);
		}
    
		if(services == "Manutenção") {
			return (
				<>
					<img src={imagemManutencao} alt="" />
					<div className="solucoesContainerText">
						<div className="solucoesTitle">
							<h1>Manutenção</h1>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.</p>
						<button id="solucoesButton">Saiba mais</button>
					</div>
				</>
			);
		}

		if(services == "Soluções") {
			return (
				<>
					<img src={imagemSolucoes} alt="" />
					<div className="solucoesContainerText">
						<div className="solucoesTitle">
							<h1>Soluções em TI</h1>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.</p>
						<button id="solucoesButton">Saiba mais</button>
					</div>
				</>
			);
		}
	}
	return (
		<div className="solucoesBackGround">
			<p>O que nós fazemos</p>
			<h1>Nossas soluções para o seu negócio</h1>
			<div className="solucoesContainerButtons">
				<button
					style={{backgroundColor: buttonSolucoes ? "#8700A9" : "transparent", border: buttonSolucoes ? "none" : "#610C7D 2px solid", color: buttonSolucoes ? "white" : "black"}}
					id="solucoesButtonClicked"
					onClick={() => activeButton("Soluções")}>
					Soluções em TI
				</button>
				<button
					style={{backgroundColor: buttonIdentidade ? "#8700A9" : "transparent", border: buttonIdentidade ? "none" : "#610C7D 2px solid", color: buttonIdentidade ? "white" : "black"}}
					id="solucoesButtonClicked"
					onClick={() => activeButton("Identidade")}>
					Identidade Visual
				</button>
				<button
					style={{backgroundColor: buttonManutencao ? "#8700A9" : "transparent", border: buttonManutencao ? "none" : "#610C7D 2px solid", color: buttonManutencao ? "white" : "black"}}
					id="solucoesButtonClicked"
					onClick={() => activeButton("Manutenção")}>
					Manutenção
				</button>
			</div>                
			<div className="solucoesChangeContent">
				{changeContent()}
			</div>
		</div>
	);
};