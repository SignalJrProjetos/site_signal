import React from "react";
import "./value-card.css";
import valueImg from "../../../assets/svg/img.value-template.svg";

export const ValueCard = (props: {valueIcon:string; valueName: string; valueDesc: string}) => {
	return (
		<>
			{/*Versão Desktop */}
			<div className="valueCard">
				<img src={valueImg} />
				<div>
					<h3>{props.valueName}</h3>
					<p>{props.valueDesc}</p>
				</div>
			</div>

			<div className="cardMobile">
				<div>
					<img src={props.valueIcon} />
					<img src={valueImg}/>
					<div>
						<h1>{props.valueName}</h1>
					</div>
					<p>{props.valueDesc}</p>
				</div>
			</div>
		</>
	);
};
