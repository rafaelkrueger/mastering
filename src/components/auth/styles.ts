import styled, { keyframes } from 'styled-components';
import { AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';


const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AuthModalContainer = styled.div`
	min-width: 100%;
	max-width: 100%;
	min-height: 100%;
	max-height: 100%;
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	position: fixed;
	flex-direction: column;
	justify-content: center;
	z-index: 3;
	border-radius: 10px;
`;

export const AuthModalForm = styled.div`
	padding: 5px;
	width: 600px;
	height: 530px;
	background-color: #fff;
	margin: auto;
	margin-top: 8%;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.4);
	@media (max-width: 600px) {
		width: 100%;
		height: 990px;
		margin-top: 0%;
	}
`;

export const AuthModalFormHeader = styled.div`
	display: flex;
	justify-content: space-between;
	height: 15%;
	background-color: #f3f4f8;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`;

export const AuthModalFormHeaderText = styled.h2`
	color: rgba(0, 0, 0, 0.6);
	margin-top: 4%;
	margin-left: 5%;
`;

export const AuthModalFormHeaderIcon = styled(AiOutlineClose)`
	margin-top: 4%;
	margin-right: 1%;
	width: 10%;
	&:hover {
		cursor: pointer;
	}
`;

export const AuthModalFormBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 80%;
	margin: auto;
	margin-top: 7%;
	height: 45%;
`;

export const AuthModalFormBodyRadio = styled.div`
	display: flex;
`;

export const AuthModalRegularInput = styled.input`
	width: 96%;
	border: 0.3px white solid;
	border-bottom: 0.3px black solid;
	padding: 12px;
`;

export const AuthModalRegularRadio = styled.input`
	border: 0.3px white solid;
	border-bottom: 0.3px black solid;
	padding: 12px;
`;
export const AuthModalFormFooter = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	margin-top: 4%;
	margin-bottom: -25%;
`;

export const AuthModalFooterRadio = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: -5%;
	margin-top: 5%;
`;

export const AuthModalFormFooterButton = styled.div`
	width: 100%;
	color: white;
	padding: 10px;
	text-align: center;
	align-self: center;
	background-color: green;
	margin-top: 2%;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export const AuthModalFormFooterText = styled.p`
	font-size: 8pt;
	text-align: center;
`;

export const AuthModalFormFooterTextLogin = styled.p`
	font-size: 8pt;
	text-align: center;
	color: blue;
	text-decoration: underline;
	&:hover {
		cursor: pointer;
	}
`;

export const AuthModalFormFooterTextRadio = styled.p`
	font-size: 9pt;
	text-align: center;
`;

export const AuthModalFormLoading = styled(AiOutlineLoading3Quarters)`
	font-size: 9pt;
	text-align: center;
	animation: ${rotateAnimation} 2s linear infinite;
`;
