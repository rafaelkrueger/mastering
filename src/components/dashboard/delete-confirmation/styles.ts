import styled from "styled-components";

export const ConfirmationModalContainer = styled.div`
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

export const ConfirmationModalForm = styled.div`
	padding: 45px;
	width: 600px;
	height: 260px;
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

export const ConfirmationModalFormButtonFooter = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 7%;
`;
