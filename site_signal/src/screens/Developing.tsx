import React from "react";
import "../screens/css/developing.css";
import developingBackground from "../assets/imgs/developingBackground.png";

export const Developing = () =>{
	return (
		<div className="developing">
			<img alt="Imagem desenvolvimento" style={{width: "100%"}} src={developingBackground}/>
		</div>
	);
};