import React from "react";
import "./status.css";
import productsIco from "../../../assets/svg/icon.projects.svg";
import satisfactionIco from "../../../assets/svg/icon.satisfaction.svg";
import teamIco from "../../../assets/svg/icon.team-status.svg";
import evolutionIco from "../../../assets/svg/icon.evolution.svg";

export const Status = () => {

	return (
		<div className="statusContainer">
			<h1><span>Nossos Números</span></h1>
			<div className="statusNumbers">
				<div className="statusRow">
					<div className="productsContainer">
						<img src={productsIco}/>
						<p><span>22</span> <br /> Serviços Lançados</p>
					</div>
					<div className="satisfactionContainer">
						<img src={satisfactionIco}/>
						<p><span>17</span> <br />Clientes Satisfeitos</p>
					</div>
				</div>
				<div className="statusRow">
					<div className="teamContainer">
						<img src={teamIco}/>
						<p><span>100+</span> <br />Membros</p>
					</div>
					<div className="evolutionContainer" id="evolutionContainer">
						<img src={evolutionIco}/>
						<p><span>2022</span> <br />EJ Inovadora</p>
					</div>
				</div>
			</div>
		</div>
	);
};