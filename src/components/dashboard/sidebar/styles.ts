import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
	padding: 30px;
	color: white;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 270px;
	position: fixed;
	justify-content: space-between;
	z-index: 1;
	top: 0;
	left: 0;
	padding-left: 30px;
	background-color: #111;
	transition: 0.5s;
	overflow-x: hidden;
	@media (max-width:600px) {
		margin-top: 5%;
		width: 100%;
	}
`;

export const SidebarProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-top: 10px;
	padding-bottom: 5px;
	border-bottom: 0.2px white solid;
`;

export const SidebarProfileInfoImage = styled.img`
	border-radius: 50px;
	min-width: 35%;
	max-width: 35%;
	align-self: left;
	object-fit: contain;
	@media (max-width:600px) {
		min-width: 25%;
		max-width: 25%;
	}
`;

export const SidebarProfileInfoName = styled.p`
	font-size: 10pt;
	margin-top: 9%;
	margin-left: 2%;
`;

export const SidebarDivision = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 25%;
`;

export const SidebarElement = styled(Link)`
	display: flex;
	color: white;
	text-decoration: none;
	width: 100%;
	margin-block: 2.9%;
	border-radius: 10px;
	padding: 5px;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
		transition: all 0.6s ease;
		cursor: pointer;
	}
`;

export const SidebarElementTitle = styled.p`
	margin-left: 10%;
	margin-top: 4%;
`;
