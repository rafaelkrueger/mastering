import styled, { keyframes } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const CourseContainer = styled.div`
	display: flex;
	width: 85%;
	margin-top: 10%;
	margin-left: 5%;
	justify-content: space-around;
	@media (max-width: 600px) {
		flex-direction: column;
		margin-top: 35%;
	}
`;

export const CourseLeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-right: 2%;
	margin-top: 1.5%;
`;

export const CourseLeftBanner = styled.div`
	width: 100%;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	height: 200px;
	animation: ${skeletonLoading} 1s linear infinite alternate;
	text-align: center;
	align-content: center;
`;

export const CourseLeftBannerImage = styled.img`
	width: 100%;
	height: 200px;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
`;

export const CourseRightContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 42%;
	background-color: #f3f4f8;
	padding: 20px;
	border-radius: 10px;
	padding-bottom: 30px;
	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const CourseRightVideo = styled.div`
	width: 100%;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	height: 200px;
	animation: ${skeletonLoading} 1s linear infinite alternate;
	text-align: center;
	align-content: center;
`;

export const CourseRightTitle = styled.h2`
	padding-bottom: 10px;
	border-bottom: 0.2px rgba(0, 0, 0, 0.4) solid;
`;

export const CourseRightExchange = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CourseRightDicount = styled.p`
	font-size: 17pt;
	text-decoration: line-through;
	color: red;
	font-weight: bolder;
`;

export const CourseRightPrice = styled.p`
	margin-top: -5%;
	font-size: 14pt;
	color: green;
	font-weight: bolder;
`;

export const CouseRightProprieties = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CourseRightClassfier = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const CourseRightRightBuy = styled.div`
	display: flex;
	justify-content: space-around;
	height: 40px;
`;

export const CourseRightRightBuyButton = styled.div`
	width: 74%;
	color: white;
	padding: 10px;
	text-align: center;
	align-self: center;
	background-color: green;
	margin-top: 2%;
	border-radius: 3px;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export const CourseRightRightBuyCart = styled.div`
	width: 20%;
	color: white;
	border-radius: 3px;
	padding: 10px;
	text-align: center;
	align-self: center;
	background-color: green;
	margin-top: 2%;
	@media (max-width: 600px) {
		width: 25%;
	}

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;
