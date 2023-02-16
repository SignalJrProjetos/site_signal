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
					<a href="https://portal.ufrrj.br/"><img alt="Logo UFRRJ" id="ufrrjMark" src={UFRRJ}/></a>
					<a href="https://brasiljunior.org.br/"><img alt="Logo brasil junior" id="brasilJrMark" src={Brasil}/></a>
					<a href="https://riojunior.com.br/"><img alt="Logo rio junior" id="rioJrMark" src={Rio}/></a>
					<a href="https://www.totvs.com/"><img alt="Logo TOTVS" id="totvsMark" src={TOTVS}/></a>
				</div>
				<div>
					<a href="https://empower.vision/"><img alt="Logo empower" id="empowerMark" src={Empower}/></a>
					<a href="https://carreiras.americanas.com/"><img alt="Logo americanas" id="americanasMark" src={Americanas}/></a>
				</div>
			</div>
		</div>	
	);
};