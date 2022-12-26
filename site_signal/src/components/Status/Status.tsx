import React from "react";
import "./status.css";
import productsIco from "../../assets/svg/icon.projects.svg";
import satisfactionIco from "../../assets/svg/icon.satisfaction.svg";
import teamIco from "../../assets/svg/icon.team-status.svg";
import evolutionIco from "../../assets/svg/icon.evolution.svg";

export const Status = () => {

	return (
		<div className="statusContainer">
			<h1><span>Nossos Números</span></h1>
			<div className="statusNumbers">
				<div className="productsContainer">
					<img src={productsIco}/>
					<p><span>50</span> Produtos Lançados</p>
				</div>
				<div className="satisfactionContainer">
					<img src={satisfactionIco}/>
					<p><span>50</span> Clientes Satisfeitos</p>
				</div>
				<div className="teamContainer">
					<img src={teamIco}/>
					<p><span>20</span> Membros</p>
				</div>
				<div className="evolutionContainer">
					<img src={evolutionIco}/>
					<p><span>Nv. X</span> Empresa Inovadora</p>
				</div>
			</div>
		</div>
	);
};