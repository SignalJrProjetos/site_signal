import React, {useState} from "react";
import { gql, useQuery } from "@apollo/client";
import "./portfolio.css";

const GET_PORTFOLIO_QUERY = gql` #Query para recuperar dados dos projetos da API GraphCMS
    query Portfolios {
        portfolios(orderBy: publishedAt_ASC) {
        id
        projectName
        serviceType
        slug
		link
        projectThumb {
            url
        }
        }
    }  
`;

interface GetPortfolioQueryResponse {
    id: string;
    projectName: string;
	serviceType: string;
	link: string
    slug: string;
    projectThumb: {
        url: string;
    }
}

interface CardProps {
    id: string;
    projectName: string;
	serviceType: string;
	link: string
    slug?: string;
	image: string;
	isHovering: boolean;
}


const Card: React.FC<CardProps> = ({ id, projectName, serviceType, link, slug, image}) => {

	const [hovering, setHovering] = useState(false);

	const handleMouseEnter = () => {
		setHovering(true);
	};
  
	const handleMouseLeave = () => {
		setHovering(false);
	};
	return (
		<div className="portfolioCard" key={id} style={{backgroundImage: `url(${image})`}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<a href={`/servicos/projetos/${slug}`} >
				{hovering &&
				<div className="portfolioCardContent">
					<h2>{projectName}</h2>
					<p>{serviceType}</p>
				</div>
				}
			</a>					
		</div>
	);
};
export const Portfolio = () => {
	const { data } = useQuery<{ portfolios: GetPortfolioQueryResponse[] }>(GET_PORTFOLIO_QUERY);

	return (
		<div className="portfolioContainer">
			<h1 className="title">Portfolio</h1>
			<div className="portfolioDeckCard">
				{data?.portfolios.map(portfolio => {
					return(
						<Card
							key={portfolio.id}
							id={portfolio.id}
							projectName={portfolio.projectName}
							serviceType={portfolio.serviceType}
							link={portfolio.link}
							slug={portfolio.slug}
							image={portfolio.projectThumb.url}
							isHovering= {true}
						/>
					);
				})}
			</div>
		</div>
	);
};