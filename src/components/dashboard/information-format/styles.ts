import styled from 'styled-components';

export const InformationFormatContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	@media (max-width: 600px) {
		width: 300px;
	}
`;

export const InformationFormatContainerHeader = styled.div`
	display: flex;
	width: 90%;
	padding: 20px;
`;

export const InformationFormatContainerHeaderGo = styled.div`
	width: 20%;
	&:hover {
		cursor: pointer;
	}
`;

export const ProgressInformationFormat = styled.div`
	width: 350px;
	height: 10px;
	background-color: black;
	margin-top: 0.51%;
	border-radius: 25px;
`;

export const InformationFormatContainerHeaderProgress = styled.div`
	display: flex;
	margin-top: 0.6%;
	width: 90%;
	margin-left: 10%;
	margin-right: 15%;
`;

export const InformationFormatContainerBody = styled.div`
	width: 100%;
	margin-top: 5%;

`;

export const InformationFormatContainerBodyHeader = styled.div`
	width: 90%;
	margin-left: 5%;
`;

export const InformationFormatContainerBodyTitle = styled.h2`
	width: 100%;
`;

export const InformationFormatContainerBodySubtitle = styled.p`
	width: 100%;
	margin-top: 1%;
`;

export const InformationFormatContainerBodyContainer = styled.div`
	display: flex;
	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
		margin-bottom: 5%;
		align-items: center;
	}
`;

export const InformationFormatContainerBodyContainerLeft = styled.div`
	display: flex;
	flex-direction: column;
	width: 46%;
	@media (max-width: 600px) {
		width: 100%;
	}

`;

export const InformationFormatContainerBodyContainerRight = styled.div`
	display: flex;
	flex-direction: column;
	width: 46%;
	@media (max-width: 600px) {
		width: 100%;
	}

`;

export const InformationFormatContainerBodyInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-top: 5%;
	margin-left: 10%;
`;

export const InformationFormatContainerBodyImage = styled.img`
	margin-top: 6.7%;
	min-width: 90%;
	max-width: 90%;
	height: 50%;
	border-radius: 5px;
	border: 0.3px rgba(0, 0, 0, 0.4) solid;
	margin-bottom: 9%;
`;

export const InformationFormatContainerBodyInputLabel = styled.label`
	width: 90%;
	font-weight: 500;
	padding-bottom: 10px;
`;

export const InformationFormatContainerBodyInput = styled.input`
	width: 90%;
	padding: 15px;
	border-radius: 5px;
	margin-top: 2.5%;
	border: 0.3px rgba(0, 0, 0, 0.4) solid;
`;

export const InformationFormatContainerBodyInputFile = styled.input`
	width: 90%;
	padding: 15px;
	border-radius: 5px;
	border: 0.3px rgba(0, 0, 0, 0.4) solid;
`;


export const InformationFormatContainerBodyTextArea = styled.textarea`
	width: 90%;
	padding: 15px;
	border-radius: 5px;
	border: 0.3px rgba(0, 0, 0, 0.4) solid;
`;

export const InformationFormatContainerBodyButton = styled.button`
	width: 15%;
	padding: 5px;
	border-radius: 5px;
	margin-left: -8%;
	margin-top: 7.6%;
	height: 40px;
	border: 0.3px rgba(0, 0, 0, 0.4) solid;
	background-color: green;
	color: white;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 600px) {
		width: 100%;
	}
`;
