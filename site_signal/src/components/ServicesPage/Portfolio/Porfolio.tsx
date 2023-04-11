import React, {useState} from "react";
import Carousel  from "react-bootstrap/Carousel";
import { gql, useQuery } from "@apollo/client";
import "./portfolio.css";
import arrowIco from "../../../assets/svg/icon.arrow.svg";

const GET_PORTFOLIO_QUERY = gql` #Query para recuperar dados dos projetos da API GraphCMS
    query GET_PORTFOLIO_QUERY {
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
    projectName?: string;
	serviceType?: string;
    slug: string;
	image: string;
	isHovering: boolean;
}


const Card: React.FC<CardProps> = ({ id, projectName, serviceType, slug, image}) => {

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

			{/* Versão desktop */}

			<div className="portfolioDeckCard">
				{data?.portfolios.map(portfolio => {
					return(
						<Card
							key={portfolio.id}
							id={portfolio.id}
							projectName={portfolio.projectName}
							serviceType={portfolio.serviceType}
							slug={portfolio.slug}
							image={portfolio.projectThumb.url}
							isHovering= {true}
						/>
					);
				})}
			</div>

			{/* Versão mobile */}

			<div className="potfolioCarousel">
				<Carousel className="porfolioCarouselContainer">
					{data?.portfolios.map(portfolioM => {
						return(
							<Carousel.Item className="porfolioCarouselItem" key={portfolioM.id}>
								<Card
									key={portfolioM.id}
									id={portfolioM.id}
									slug={portfolioM.slug}
									image={portfolioM.projectThumb.url}
									isHovering= {true}
								/>
								<h2>{portfolioM.projectName}</h2>
								<h3>{portfolioM.serviceType}</h3>
								<div className="portfolioLink">
									<a  href={`/servicos/projetos/${portfolioM.slug}`} className="buttonPurple2">Saiba mais <img src={arrowIco} /></a>
								</div>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};