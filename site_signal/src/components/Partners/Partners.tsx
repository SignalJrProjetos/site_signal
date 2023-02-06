import React from "react";
import "./partners.css";
import UFRRJ from "../../assets/svg/logo.UFRRJPartners.svg";
import Brasil from "../../assets/svg/logo.BrasilJuniorPartners.svg";
import Rio from "../../assets/svg/logo.RioJuniorPartners.svg";
import TOTVS from "../../assets/svg/logo.TOTVSPartners.svg";
import Americanas from "../../assets/svg/logo.AmericanasPartners.svg";
import Empower from "../../assets/svg/logo.EmpowerPartners.svg";

export const Partners = () => {

	return(
		<div className="partnersContainer">
			<div>
				<h1 className="title">Parceiros</h1>
			</div>
           
			<div className="partnersLogo">
				<div>
					<a href="https://portal.ufrrj.br/"><img id="ufrrjMark" src={UFRRJ} alt=""/></a>
					<a href="https://brasiljunior.org.br/"><img id="brasilJrMark" src={Brasil} alt=""/></a>
					<a href="https://riojunior.com.br/"><img id="rioJrMark" src={Rio} alt=""/></a>
					<a href="https://www.totvs.com/"><img id="totvsMark" src={TOTVS} alt=""/></a>
				</div>
				<div>
					<a href="https://empower.vision/"><img id="empowerMark" src={Empower} alt=""/></a>
					<a href="https://carreiras.americanas.com/"><img id="americanasMark" src={Americanas} alt=""/></a>
				</div>
			</div>
		</div>	
	);
};