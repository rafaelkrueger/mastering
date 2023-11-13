import styled from 'styled-components';
import * as Fi from 'react-icons/ai';
import * as Si from 'react-icons/si';


export const ToastMessageContainer = styled.div`
	width: 30%;
	background-color: white;
	height: 55px;
	border-radius: 10px !important;
	position: fixed;
	top: 110px;
	right: 30px;
	justify-content: space-between;
	align-items: center;
	box-shadow:1px 1px 20px rgba(0,0,0,0.4);
	transition: ease-in 4s;
	z-index: 500;
	@media (max-width:600px){
		width: 95%;
		top: 110px;
		right: 1px;
		height: 50px;
	}
`;

export const ToastMessageHost = styled.div`
	width:100%;
	display:flex;
	height:100%;
	justify-content:space-between;
`

export const ToastMessageLeft = styled.div`
	width: 15%;
	height: 100%;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	text-align: center;
`;

export const ToastMessageMiddle = styled.div`
	width: 60%;
	align-items: center;
	margin-top: -2%;
	@media (max-width:600px){
		margin-top: -2%;
	}

`;

export const ToastMessageRight = styled.div`
	width: 20%;
`;

export const ToastMessageIcon = styled(Fi.AiOutlineClose)`
	width: 90%;
	margin-bottom: -47%;
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px;
	padding: 5px;
`;

export const ToastMessageSuccess = styled(Si.SiVerizon)`
	width: 90%;
	margin-bottom: -47%;
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px;
	padding: 5px;
`;

export const ToastMessageCloseIcon = styled(Fi.AiOutlineClose)`
	width: 100%;
	margin-bottom: -26%;
	&:hover {
		cursor: pointer;
	}
`;
