import { gql, useQuery } from "@apollo/client";
import React from "react";
import "./teamList.css";
import linkedinIco from "../../../assets/svg/icon.linkedin.svg";
import githubIco from "../../../assets/svg/icon.github.svg";
import instagramIco from "../../../assets/svg/icon.instagram.svg";
import linkedinAltIco from "../../../assets/svg/icon.linkedin-purple.svg";
import githubAltIco from "../../../assets/svg/icon.github-purple.svg";
import instagramAltIco from "../../../assets/svg/icon.instagram-purple.svg";
import teamBackground from "../../../assets/svg/bg.team.svg";
import arrowIco from "../../../assets/svg/icon.arrow.svg";

const GET_MEMBERS_QUERY = gql` #Query para recuperar dados dos membros da API GraphCMS
    query TeamMembers {
        teamMembers {
            githubURL
            id
            instagramURL
            linkedInURL
            name
            role
            avatar {
                url
            }
        }
    }
`;

interface GetTeamQueryResponse {
    id: string;
    name: string;
    role: string;
    linkedInURL: string;
    githubURL: string;
    instagramURL: string;
    avatar: {
        url: string;
    }
}

export const TeamList = () => {

	{/*Função para utilizar os dados vindos da API */}
	const { data } = useQuery<{ teamMembers: GetTeamQueryResponse[] }>(GET_MEMBERS_QUERY);

	return (
		<div className="teamListContainer" style={{"backgroundImage":`url(${teamBackground})`}}>
			<h2 className="subtitle">Conheça  os impulsores do sucesso da Signal Jr</h2>
			<h1 className="title">
			Cada um deles traz consigo habilidades únicas e valiosas, e juntos formamos uma equipe forte e capaz de superar desafios e alcançar grandes resultados.
			</h1>

			<div className="listContainer">
				{data?.teamMembers.map(teamMembers => {
					return(
						<>
							<div className="memberCard" style={{"backgroundImage" : `url(${teamMembers.avatar.url})`}} key={teamMembers.id}>
							
								<div className="memberInfo">
									<h3>{teamMembers.name}</h3>
									<p>{teamMembers.role}</p>
								</div>

								<div className="memberSocialMedia">
                                
									{/* Somente exibe as redes sociais se elas estiverem cadastradas */}
									{ teamMembers.linkedInURL ? (
										<a href={teamMembers.linkedInURL}><img className="linkedinIcon" src={linkedinIco}></img></a>
									):
										(<span style={{"display":"none"}} />)
									}

									{ teamMembers.githubURL ? (
										<a href={teamMembers.githubURL}><img className="githubIcon" src={githubIco}></img></a>
									):  
										(<span style={{"display":"none"}} />)
									}

									{ teamMembers.instagramURL ? (
										<a href={teamMembers.instagramURL}><img className="instagramIcon" src={instagramIco}></img></a>
									) : 
										(<span style={{"display":"none"}} />)
									}

								</div>
							</div>

							{/* Versão para dispositivos móveis */}
							<div className="memberList">
								<div className="memberListAvatar">
									<img src={teamMembers.avatar.url}></img>
								</div>

								<div className="memberListInfoContainer">
									<h3>{teamMembers.name}</h3>
									<div className="memberListInfo">
										<div>
											<p>{teamMembers.role}</p>
										</div>

										<div className="memberListSocialMedia">
											{/* Somente exibe as redes sociais se elas estiverem cadastradas */}
											{ teamMembers.linkedInURL ? (
												<a href={teamMembers.linkedInURL}><img className="linkedinIcon" src={linkedinAltIco}></img></a>
											):
												(<span style={{"display":"none"}} />)
											}

											{ teamMembers.githubURL ? (
												<a href={teamMembers.githubURL}><img className="githubIcon" src={githubAltIco}></img></a>
											):  
												(<span style={{"display":"none"}} />)
											}

											{ teamMembers.instagramURL ? (
												<a href={teamMembers.instagramURL}><img className="instagramIcon" src={instagramAltIco}></img></a>
											) : 
												(<span style={{"display":"none"}} />)
											}
										</div>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</div>
			<div id="subscription">
				<a href="" className="buttonPurple2">Se Inscrever <img src={arrowIco} /></a>
			</div>
		</div>
	);
};