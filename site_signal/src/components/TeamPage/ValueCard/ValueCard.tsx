import React from "react";
import "./value-card.css";
import valueImg from "../../../assets/svg/img.value-template.svg";

export const ValueCard = (props: { valueName: string; valueDesc: string}) => {
	return (
		<div className="valueCard">
			<img src={valueImg} />
			<div>
				<h3>{props.valueName}</h3>
				<p>{props.valueDesc}</p>
			</div>
		</div>
	);
};