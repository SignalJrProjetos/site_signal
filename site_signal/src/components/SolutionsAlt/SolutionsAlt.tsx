import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "./solutionsAlt.css";
import { Processes } from "../ServicesPage/ServiceProcesses/Processes";
import { url } from "inspector";

const GET_SOLUTIONS_QUERY = gql`
    query Solutions {
        solutions {
            id
            solutionName
            solutionTag
            solutionSummary
            solutionDescription
            solutionSteps
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
	solutionImage: {
		url: string;
	}
}

export const SolutionsAlt = () => {

	const { data } = useQuery<{ solutions: GetSolutionsQueryResponse[] }>(GET_SOLUTIONS_QUERY);
	console.log(data);

	//const teste = data?.solutions.map(solutions => solutions.solutionName)[1];
	//console.log(teste);

	const[service, setService] = useState<string | undefined>("");
	const[description, setDescription] = useState<string | undefined>("");
	const[image, setImage] = useState<string | undefined>("");
	const[steps, setSteps] = useState<string[] | undefined>([""]);
	const[active, setActive] = useState<string>("");
	const[showText, setShowText] = useState<boolean>(true);

	//Define os valores default para os estados abaixo com base na requisição
	useEffect(() => {
		if (data) {
			setService(data?.solutions[0].solutionName);
			setDescription(data?.solutions[0].solutionDescription);
			setImage(data?.solutions[0].solutionImage.url);
			setSteps(data?.solutions[0].solutionSteps);
			setActive(data?.solutions[0].solutionTag);
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
			setDescription(info?.solutionDescription); //Atualiza o valor de summary (resumo do serviço)
			setImage(info?.solutionImage.url);
			setSteps(info?.solutionSteps);
			setActive(serviceType);
			setShowText(true);
		
		} else {
			setService("Não foi possível atualizar o conteúdo");
		}
	
	}

	return (
		<>
			<div className="solutions1Container">
				<h2 className="subtitle">O que nós fazemos</h2>
				<h1 className="title">Nossas soluções para o seu negócio</h1>

				<div className="solutionsContentContainer">	

					<div className="solutionsButtonsContainer">
						{data?.solutions.map(solutions => {
							return(
								<button 
									className={ solutions?.solutionTag == active ? "buttonPurple2" : "buttonPurple"}
									style={{"margin":"24px 0", "width": "300px", "padding": "18px 0", "borderRadius":"48px"}}
									key={solutions.id}
									onClick={() => activeButton(solutions.solutionTag)}> {/*Ao clicar, envia o valor do parâmetro solutionTag para a função activeButton */}
									{solutions.solutionName}
								</button>
							);
						})}
					</div>
			
					<div className="solutionsTextContainer">
						<h1 className={showText ? "textFadeIn" : ""}>{service}</h1>
						<p className={showText ? "textFadeIn" : ""}>{description}</p>
					</div>
				</div>
				<div className={showText ? "textFadeIn" : ""}>
					<img className="solutionBackground" src={image}></img>
				</div>
			</div>
			<Processes stepByStep={steps}/>
		</>
	);
};