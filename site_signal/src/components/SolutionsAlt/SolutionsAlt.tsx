import React, {useState} from "react";
import imagemSolucoes from "../../assets/svg/img.solutionsSolucoesTI.svg";
import imagemIdentidade from "../../assets/svg/img.solutionsIdVisual.svg";
import imagemConsultoria from "../../assets/svg/img.solutionsConsultoria.svg";
import "./solutionsAlt.css";
import { gql, useQuery } from "@apollo/client";

const GET_SOLUTIONS_QUERY = gql `
	query Solutions {
		solutions {
			id	
			solutionName
			solutionSummary
			solutionDescription
			solutionSteps
		}
	}
`;

interface GetSolutionsQueryResponse {
	id: string;
	solutionName: string;
	solutionSummary: string;
	solutionDescription: string;
	solutionSteps: string;
}

export const SolutionsAlt = () => {
    
	const {data} = useQuery<{solutions: GetSolutionsQueryResponse[]}>(GET_SOLUTIONS_QUERY);
	console.log(data);

	const [services, setServices] = useState<string>("Soluções");
	const [buttonSolucoes, setButonSolucoes] = useState<boolean>(true);
	const [buttonIdentidade, setButtonIdentidade] = useState<boolean>(false);
	const [buttonconsultoria, setButtonconsultoria] = useState<boolean>(false);

	function activeButton(button: string) {
		switch (button) {
		case "Soluções":
			setButonSolucoes(true);
			setButtonIdentidade(false);
			setButtonconsultoria(false);
			setServices("Soluções");
			break;
		case "Identidade":
			setButonSolucoes(false);
			setButtonIdentidade(true);
			setButtonconsultoria(false);
			setServices("Identidade");
			break;
		case "Consultoria":
			setButonSolucoes(false);
			setButtonIdentidade(false);
			setButtonconsultoria(true);
			setServices("Consultoria");
			break;
		default:
			break;
		}
	}
	function changeContent() {
		if (services === "Soluções") {
			return(
				<>
					<img src={imagemSolucoes} alt="Imagem background Soluções" />
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, beatae quidem. Praesentium,
                        facilis quibusdam nesciunt nemo dolorem laborum corporis totam recusandae eligendi. Deserunt quod 
                        quibusdam optio repudiandae dignissimos quia vitae?
					</p>
				</>
			);
		}
		if (services === "Identidade") {
			return(
				<>
					<img src={imagemIdentidade} alt="Imagem background Identidade" />
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, beatae quidem. Praesentium,
                        facilis quibusdam nesciunt nemo dolorem laborum corporis totam recusandae eligendi. Deserunt quod 
                        quibusdam optio repudiandae dignissimos quia vitae?
                        facilis quibusdam nesciunt nemo dolorem laborum corporis totam recusandae eligendi. Deserunt quod 
                        quibusdam optio repudiandae dignissimos quia vitae?
                        facilis quibusdam nesciunt nemo dolorem laborum corporis totam recusandae eligendi. Deserunt quod 
                        quibusdam optio repudiandae dignissimos quia vitae?
					</p>
				</>
			);
		}
		if (services === "Consultoria") {
			return(
				<>
					<img src={imagemConsultoria} alt="Imagem background Consultoria" />
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, beatae quidem. Praesentium,
                        facilis quibusdam nesciunt nemo dolorem laborum corporis totam recusandae eligendi. Deserunt quod 
                        quibusdam optio repudiandae dignissimos quia vitae?
                        facilis quibusdam nesciunt nemo dolorem laborum corporis totam recusandae eligendi. Deserunt quod 
                        quibusdam optio repudiandae dignissimos quia vitae?
					</p>
				</>
			);
		}
	}

	return(
		<>	
			<div className="serviceContainer">
				<h2 className="subtitle" style={{marginLeft: "95px"}}>O que nós fazemos</h2>
				<h1 className="title" style={{"marginLeft": "95px"}}>Nossas soluções para o seu negócio</h1>


				{/* Container para Desktop  */}
				<div className="containerButton">


					{data?.solutions.map(solutions=>{
						return(
							<>
								<button key={solutions.id}
									style={{backgroundColor: buttonSolucoes ? "#8700A9" : "transparent", border: buttonSolucoes ? "none" :  "3px solid  #610C7D", color: buttonSolucoes ? "white" : "black"}}
									id="solutionsButtonClicked"
									onClick={() => activeButton("Soluções")}>
									{solutions.solutionName}
								</button>
							</>
						);
					})}

					
				</div>
				<div className="serviceChangeContent">
					{changeContent()}
				</div>
			</div>
			
		</>
	);
};