import React, { useEffect, useState } from "react";
import "./processes.css";
import processesBg from "../../../assets/svg/bg.process-animate.svg";

export const Processes = (props: any) => {

	const[title, setTitle] = useState<string>(props.stepByStep[0].substring(0, props.stepByStep[0].indexOf(":")));
	const[text, setText] = useState<string>(props.stepByStep[0].substring(props.stepByStep[0].indexOf(":") + 1, props.stepByStep[0].length));
	const[active, setActive] = useState<number>(-1);

	//Estado responsável por controlar a exibição de textos após cliques em botões
	const[showText, setShowText] = useState<boolean>(true);

	//Verifica se title foi alterado. Se true, ativa um temporizador para definir setShowText para false
	useEffect(() => {
		if (showText) {
			setTimeout(() => setShowText(false), 1000);
		}
	}, [title]);

	function changeText (stepText: string, activeButton: number) {

		setTitle(stepText.substring(0, stepText.indexOf(":")));
		setText(stepText.substring(stepText.indexOf(":") + 1, stepText.length));
		setActive(activeButton);
		setShowText(true);
	}

	return (
		<div className="processContainer">

			<img src={processesBg} className="background"/>

			<h2 style={{"textAlign":"center"}} className="subtitle">Etapas do Serviço</h2>
			<h1 style={{"textAlign":"center"}} className="title">Clique nos botões abaixo para saber mais sobre cada uma das etapas do serviço.</h1>

			<div className="timeline">

				{/** Mapeia o array de objetos vindo da prop stepByStep, tanto o índice quanto string **/}
				{props.stepByStep.map((step: string, index: number) => (

					<div key={index}>

						{/** 
						 * Para cada objeto do array, cria-se um botão.
						 * Baseado no índice do objeto (par ou ímpar), os botões são posicionados de forma diferente
						 **/}

						<div className={`buttonContainer ${index % 2 === 0 ? "processButton--above" : "processButton--below"} ${index === props.stepByStep.length - 1 ? "buttonContainer--last" : ""}`}>
							<button
								className={index == active ? "processButtonActive" : "processButton"}
								onClick={() => changeText(step, index)}>
								{index + 1}
							</button>
							<span>{step.substring(0,step.indexOf(":"))}</span>
						</div>

						<div className="processPoint"></div>
					
					</div>

				))}
			</div>

			<div className="processInfoContainer">
				<h1 className={showText ? "textFadeIn" : ""}>{title}</h1>
				<p className={showText ? "textFadeIn" : ""}>{text}</p>
			</div>
		</div>
	);
};