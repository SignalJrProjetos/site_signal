import React from "react";
import "./core-values.css";
import { ValueCard } from "../../TeamPage/ValueCard/ValueCard";
import sectionBorder from "../../../assets/svg/section.border.svg";

export const CoreValues = () => {

	return (
		<>
			<div className="sectionBorder">
				<img src={sectionBorder} />
			</div>
			<div className="coreValuesContainer">
				<h2 className="subtitle">Nossos Valores</h2>
				<h1 className="title">Lorem impsum dolor sit amet consectetur adispiscing elit. Praesent et eros consectur</h1>
				<div className="valueCardsContainer">
					<ValueCard 
						valueName = "Protagonismo"
						valueDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros consectetur, vestibulum elit sed, aliquet mi. Vestibulum ante ipsum primis"
					/>
					<ValueCard 
						valueName = "Querência"
						valueDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros consectetur, vestibulum elit sed, aliquet mi. Vestibulum ante ipsum primis"
					/>
					<ValueCard 
						valueName = "Resiliência"
						valueDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros consectetur, vestibulum elit sed, aliquet mi. Vestibulum ante ipsum primis"
					/>
					<ValueCard 
						valueName = "Level Up"
						valueDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros consectetur, vestibulum elit sed, aliquet mi. Vestibulum ante ipsum primis"
					/>
					<ValueCard 
						valueName = "Conexão"
						valueDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros consectetur, vestibulum elit sed, aliquet mi. Vestibulum ante ipsum primis" 
					/>
				</div>
			</div>
		</>
	);
};