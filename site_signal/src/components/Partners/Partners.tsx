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
					<img id="ufrrjMark" src={UFRRJ} alt="https://portal.ufrrj.br/"/>
					<img id="brasilJrMark" src={Brasil} alt="https://brasiljunior.org.br/"/>
					<img id="rioJrMark" src={Rio} alt="https://riojunior.com.br/"/>
					<img id="totvsMark" src={TOTVS} alt="https://www.totvs.com/"/>
				</div>
				<div>
					<img id="empowerMark" src={Empower} alt="https://empower.vision/"/>
					<img id="americanasMark" src={Americanas} alt="https://www.americanas.com.br"/>
				</div>
			</div>
		</div>	
	);
};