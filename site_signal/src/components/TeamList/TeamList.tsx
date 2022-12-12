import { gql, useQuery } from "@apollo/client";
import React from "react";
import "./teamList.css";
import linkedinIco from "../../assets/svg/icon.linkedin.svg";
import githubIco from "../../assets/svg/icon.github.svg";
import instagramIco from "../../assets/svg/icon.instagram.svg";
import teamBackground from "../../assets/svg/bg.team.svg";

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
			<h2 className="subtitle">Equipe</h2>
			<h1 className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros consectetur, 
                vestibulum elit sed, aliquet mi.
			</h1>

			<div >
				{data?.teamMembers.map(teamMembers => {
					return(
						<div className="memberCard" style={{"backgroundImage" : `url(${teamMembers.avatar.url})`}} key={teamMembers.id}>
							
							<div className="memberInfo">
								<h3>{teamMembers.name}</h3>
								<p>{teamMembers.role}</p>
							</div>

							<div className="memberSocialMedia">
                                
								{/* Somente exibe as redes sociais se elas estiverem cadastradas */}
								{ teamMembers.linkedInURL ? (
									<a href={teamMembers.linkedInURL}><img src={linkedinIco}></img></a>
								):
									(<span style={{"display":"none"}} />)
								}

								{ teamMembers.githubURL ? (
									<a href={teamMembers.githubURL}><img src={githubIco}></img></a>
								):  
									(<span style={{"display":"none"}} />)
								}

								{ teamMembers.instagramURL ? (
									<a href={teamMembers.instagramURL}><img src={instagramIco}></img></a>
								) : 
									(<span style={{"display":"none"}} />)
								}

							</div>
						</div>
					);
				})}
			</div>
			<div id="subscription">
				<a href="" className="buttonPurple2">Se Inscrever</a>
			</div>
		</div>
	);
};