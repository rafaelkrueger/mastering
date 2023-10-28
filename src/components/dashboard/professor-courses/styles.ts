import styled, { keyframes } from 'styled-components';
import * as Fi from 'react-icons/fi';

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const ProfessorCousesContainer = styled.div`
	display: flex;
	height: 40%;
	max-width: 100%;
	padding-top: 10px;
	margin-top: 4%;
	margin-left: 22.5%;
	margin-right: 5.5%;
	margin-bottom: 2%;
	@media (max-width: 600px) {
		flex-wrap: wrap;
		flex-direction: column;
		margin-bottom: 5%;
	}
`;

export const ProfessorCousesContainerCard = styled.div`
	width: 220px;
	height: 372px;
	margin-inline: 30px;
	border-radius: 20px;
	box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
	padding: 20px;
	padding-bottom: 50px;
	margin-bottom: 20%;
	&:hover {
		background-color: white;
		transition: 0.5s all ease;
		cursor: pointer;
	}
`;

export const ProfessorCousesContainerCardImg = styled.img`
	min-width: 100%;
	max-width: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	min-height: 150px;
	max-height: 150px;
	animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export const ProfessorCousesContainerBody = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 29%;
	border-top: 0.3px rgba(0, 0, 0, 0.6) solid;
`;

export const ProfessorCousesContainerCardTitle = styled.h3`
	font-size: 18pt;
`;

export const ProfessorCousesContainerCardDescription = styled.p`
	margin-top: -5%;
	font-size: 12pt;
`;

export const ProfessorCousesContainerCardButton = styled.button`
	width: 100%;
	height: 45px;
	background-color: green;
	margin-top: 8%;
	color: white;
	border: 0.3px solid white;
	border-radius: 10px;
	&:hover {
		cursor: pointer;
	}
`;
