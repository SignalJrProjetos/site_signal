import React from "react";
import "./value-card.css";

export const ValueCard = (props: {valueIcon:string; valueImg:string; valueName: string; valueDesc: string}) => {
	return (
		<>
			{/*Versão Desktop */}
			<div className="valueCard">
				<img src={props.valueImg} />
				<div>
					<h3>{props.valueName}</h3>
					<p>{props.valueDesc}</p>
				</div>
			</div>

			{/*Versão Carrossel */}
			<div className="valueItem">
				<div>
					<h3>{props.valueName}</h3>
					<p>{props.valueDesc}</p>
				</div>
				<img src={props.valueImg} />
			</div>


			{/*Versão Mobile */}
			<div className="valueCardMobile">
				<div className="cardMobile">
					<div>
						<img src={props.valueIcon} />
						<h1>{props.valueName}</h1>
					</div>
					<p>{props.valueDesc}</p>
					<img src={props.valueImg}/>
				</div>
			</div>
		</>
	);
};
