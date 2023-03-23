import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Processes } from "./ServicesPage/ServiceProcesses/Processes";

const GET_SOLUTIONS_QUERY = gql`
    query Solutions {
        solutions {
            id
            solutionName
            solutionTag
            solutionSummary
            solutionDescription
            solutionSteps
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
}

export const Teste = () => {

	const { data } = useQuery<{ solutions: GetSolutionsQueryResponse[] }>(GET_SOLUTIONS_QUERY);
	console.log(data);

	//const teste = data?.solutions.map(solutions => solutions.solutionName)[1];
	//console.log(teste);

	const [service, setService] = useState<string | undefined>("Criação de Website");
	const [summary, setSummary] = useState<string | undefined>("Consiga mais clientes através de um website moderno, organizado e intuitivo, todo responsivo, com alto desempenho e otimizado para mecanismos de busca, desenvolvido com as práticas mais modernas de tecnologia.");
	const [steps, setSteps] = useState<string[] | undefined>(["Outra Coisa: Teste","Testando: Outro Teste"]);

	function activeButton(serviceType: string) {

		//Procura no array de objetos (find) qual solutionTag é igual ao parâmetro enviado no clique do botão
		const info = data?.solutions.find(solutions => solutions.solutionTag === serviceType);

		//Se info tiver algum dado (true)
		if (info) {
			setService(serviceType); //Atualiza o valor de service
			setSummary(info?.solutionSummary); //Atualiza o valor de summary (resumo do serviço)
			setSteps(info?.solutionSteps);
		
		} else {
			setService("Nada a declarar");
		}
	
	}

	return (
		<>
			{data?.solutions.map(solutions => {

				return(
					<button
						key={solutions.id}
						onClick={() => activeButton(solutions.solutionTag)}> {/*Ao clicar, envia o valor do parâmetro solutionTag para a função activeButton */}
						{solutions.solutionName}
					</button>
				);
			})}
			
			<h1>{service}</h1>
			<h2>{summary}</h2>
			<Processes stepByStep={steps}/>
		</>
	);
};