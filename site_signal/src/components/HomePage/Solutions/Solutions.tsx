import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "./solutions.css";
import { useLocation } from "react-router-dom";
import { Processes } from "../../ServicesPage/ServiceProcesses/Processes";
import solutionsBg from "../../../assets/imgs/solucoesBackground.png";

const GET_SOLUTIONS_QUERY = gql`
    query Solutions {
        solutions {
            id
            solutionName
            solutionTag
            solutionSummary
            solutionDescription
            solutionSteps
			solutionIcon {
      			url
			}
			solutionImage {
      			url
   			}
        }
    }
`;

interface GetSolutionsQueryResponse {
    id: string;
    solutionName: string;
    solutionTag: string;
    solutionSummary: string;
    solutionDescription: string;
    solutionSteps: string[];
	solutionIcon: {
		url: string;
	}
	solutionImage: {
		url: string;
	}
}

export const Solutions = () => {

	const { data } = useQuery<{ solutions: GetSolutionsQueryResponse[] }>(GET_SOLUTIONS_QUERY);

	const[service, setService] = useState<string | undefined>("");
	const[summary, setSummary] = useState<string | undefined>("");
	const[description, setDescription] = useState<string | undefined>("");
	const[image, setImage] = useState<string | undefined>("");
	const[steps, setSteps] = useState<string[] | undefined>([""]);
	const[tag, setTag] = useState<string>("");
	const[showText, setShowText] = useState<boolean>(true);

	const { pathname } = useLocation();

	//Define os valores default para os estados abaixo com base na requisição
	useEffect(() => {
		if (data) {
			setService(data?.solutions[0].solutionName);
			setSummary(data?.solutions[0].solutionSummary);
			setDescription(data?.solutions[0].solutionDescription);
			setImage(data?.solutions[0].solutionImage.url);
			setSteps(data?.solutions[0].solutionSteps);
			setTag(data?.solutions[0].solutionTag);
		}
	}, [data]);

	useEffect(() => {
		if (showText) {
			setTimeout(() => setShowText(false), 1000);
		}
	}, [service]);

	function activeButton(serviceType: string) {

		//Procura no array de objetos (find) qual solutionTag é igual ao parâmetro enviado no clique do botão
		const info = data?.solutions.find(solutions => solutions.solutionTag === serviceType);

		//Se info tiver algum dado (true)
		if (info) {
			setService(info?.solutionName); //Atualiza o valor de service
			setSummary(info?.solutionSummary); //Atualiza o valor de summary (resumo do serviço)
			setDescription(info?.solutionDescription); //Atualiza o valor de description (descrição do serviço)
			setImage(info?.solutionImage.url); //Atualiza o valor de image (imagem associada ao serviço)
			setSteps(info?.solutionSteps); //Atualiza o valor de steps (array de strings das etapas do serviço)
			setTag(serviceType); //Atualiza o valor de serviceType (tag de identificação do serviço)
			setShowText(true);
		
		} else {
			setService("Não foi possível atualizar o conteúdo");
		}
	
	}

	return (
		<>
			{/** 
			 * Este componente é utilizado nas páginas Home e Services somente.
			 * Baseado no path, muda a estilização do componente exibida.
			**/}

			{pathname == "/" ? 
				
				<div className="solutionsContainer">
					<img className="solutionsBackground" src={solutionsBg}></img>
					<h2 className="subtitle" style={{textAlign:"center"}}>O que nós fazemos</h2>
					<h1 className="title" style={{textAlign:"center"}}>Nossas soluções para o seu negócio</h1>

					{/* Versão Destkop */}
					<div className="solutionsContentContainer">

						<div className="solutionsButtonsContainer">
							{data?.solutions.map(solutions => {
								return(
									<button 
										className={ solutions?.solutionTag == tag ? "buttonPurple2" : "buttonPurple"}
										style={{"margin":"24px 24px", "width": "300px", "padding": "18px 0", "borderRadius":"48px"}}
										key={solutions.id}
										onClick={() => activeButton(solutions.solutionTag)}> {/*Ao clicar, envia o valor do parâmetro solutionTag para a função activeButton */}
										{solutions.solutionName}
									</button>
								);
							})}
						</div>

						<div style={{"display":"flex"}}>
							<div>
								<img className={`solutionImage ${showText ? "textFadeIn" : ""}`} src={image}/>
							</div>

							<div className="solutionsTextContainer">
								<h1 className={showText ? "textFadeIn" : ""}>{service}</h1>
								<p className={`content ${showText ? "textFadeIn" : ""}`}>{summary}</p>
								<a className={`buttonGradient ${showText ? "textFadeIn" : ""}`} href={process.env.PUBLIC_URL + "/services"}>Saiba Mais</a>
							</div>
						</div>

					</div>

					{/* Versão Mobile */}
					<div className="solutionsCardContainer">
						{data?.solutions.map(solutions => {
							return(
								<div key={solutions.id} className={`cardMobile ${solutions.solutionTag === tag ? "active" : ""}`} onClick={() => activeButton(solutions.solutionTag)}>
									<div>
										<img src={solutions.solutionIcon.url}></img>
										<h1>{solutions.solutionName}</h1>
									</div>
									<p>{solutions.solutionSummary}</p>
									<br></br>
									<a className={`buttonGradient2 ${solutions.solutionTag === tag ? "active" : ""}`} style={{"fontSize":"18px"}} href={process.env.PUBLIC_URL + "/services"}>Saiba Mais</a>
									<img className="solutionBackground" src={solutions.solutionImage.url}></img>
								</div>
							);
						})}
					</div>

				</div>

				:

				<>
					<div className="solutionsAltContainer">
						<h2 className="subtitle">O que nós fazemos</h2>
						<h1 className="title">Nossas soluções para o seu negócio</h1>

						{/* Versão Mobile */}
						<div className="solutionsServicesMobile">
							<div style={{display:"flex", justifyContent:"center", marginBottom: "32px"}}>
								{data?.solutions.map(solutions => {
									return(
										<button 
											className={`solutionButton ${solutions.solutionTag === tag ? "active" : ""}`}
											key={solutions.id}
											onClick={() => activeButton(solutions.solutionTag)}>
											<img src={solutions.solutionIcon.url}></img>
											{solutions.solutionName}
										</button>
									);
								})}
							</div>
							<p className="content">{description}</p>
						</div>

						{/* Versão Desktop */}
						<div className="solutionsContentAltContainer">	

							<div className="solutionsButtonsAltContainer">
								{data?.solutions.map(solutions => {
									return(
										<button 
											className={ solutions?.solutionTag == tag ? "buttonPurple2" : "buttonPurple"}
											key={solutions.id}
											onClick={() => activeButton(solutions.solutionTag)}> {/*Ao clicar, envia o valor do parâmetro solutionTag para a função activeButton */}
											{solutions.solutionName}
										</button>
									);
								})}
							</div>
			
							<div className="solutionsTextContainer">
								<h1 className={showText ? "textFadeIn" : ""}>{service}</h1>
								<p className={`content ${showText ? "textFadeIn" : ""}`} >{description}</p>
							</div>
						</div>
						<div className={showText ? "textFadeIn" : ""}>
							<img className="solutionBackground" src={image}></img>
						</div>
					</div>
					<Processes stepByStep={steps}/>

				</>	
			};
		</>
	);
};