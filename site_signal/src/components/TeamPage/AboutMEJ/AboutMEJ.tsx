import React from "react";
import "./about-mej.css";
import AboutMEJLogo from "../../../assets/svg/logo.brjunior-riojunior.svg";

export const AboutMEJ = () => {
	return (
		<div className="aboutMEJContainer">
			<div className="aboutMEJImg">
				<img src={AboutMEJLogo} />
			</div>

			<div>
				<h2 className="subtitle">Sobre o MEJ</h2>
				<h1 className="title">Desenvolvendo Líderes do Futuro: Conheça o Movimento Empresa Júnior</h1>
				<p>
					O Movimento Empresa Júnior é uma iniciativa de jovens universitários que buscam desenvolver habilidades empreendedoras e empresariais em um ambiente seguro e acolhedor. Com o objetivo de oferecer aos estudantes a oportunidade de colocar em prática o que aprendem em sala de aula, o Movimento Empresa Júnior permite que nós, estudantes de graduação, formemos uma empresa e desenvolvamos projetos reais, tendo a chance de experimentar a gestão de um negócio de forma prática e segura.
					Além de desenvolver habilidades empreendedoras, o Movimento Empresa Júnior também permite que os jovens ampliem seu network, construam relacionamentos com outros estudantes e profissionais do mercado e adquiram conhecimentos valiosos sobre o funcionamento de uma empresa.
					O Movimento Empresa Júnior é uma iniciativa reconhecida e apoiada por universidades, empresas e instituições de ensino de todo o país, e tem como objetivo formar jovens líderes capacitados e prontos para enfrentar os desafios do mercado de trabalho.
				</p>
			</div>
		</div>

	);
};