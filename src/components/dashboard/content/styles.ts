import styled from 'styled-components';
import * as Ai from 'react-icons/ai';

interface StyledDivProps {
	isVisible: boolean;
  }

export const CourseContainerContent = styled.div`
	margin-top: 5%;
	margin-left: 23%;
	min-width: 71%;
`;

export const CourseContainerContentMain = styled.div`
	width: 100%;
	background-color: #f3f4f8;
	height: 1000px;
	display: flex;
	@media (max-width: 600px) {
		flex-direction: column;
		margin-left: -20%;
	}
`;

export const CourseContainerContentInformation = styled.div`
	margin: 2%;
	margin-left: 5%;
	width: 60%;
	margin-right: 5%;
	background-color: white;
	height: 93%;
	border-radius: 10px;
	@media (max-width: 600px) {
		width: 100%;
		height: 100%;
	}
`;

export const CourseContainerContentInformationContent = styled.div<StyledDivProps>`
	margin-top: 2%;
	display: flex;
	justify-content: space-between;
	border-bottom: 0.2px rgba(0, 0, 0, 0.5) solid;
	padding-bottom: 13px;
	opacity: ${(props) => (props.isVisible ? 1 : 0)};
	transform: ${(props) => (props.isVisible ? 0 : -50)};
	transition: opacity 0.3s ease;
`;

export const CourseContainerContentInformationContentDark = styled.div<StyledDivProps>`
	margin-top: 1%;
	display: flex;
	justify-content: space-between;
	border-left: 5px white solid;
	border-right: 5px white solid;
	height: 30px;
	border-bottom: 0.2px rgba(0, 0, 0, 0.5) solid;
	opacity: ${(props) => (props.isVisible ? 1 : 0)};
	transform: ${(props) => (props.isVisible ? 0 : -50)};
	transition: opacity 0.3s ease;
	background-color:#F3F4F8 ;
`;

export const CourseContainerContentInformationContentForm = styled.div`
	margin: 4%;
	display: flex;
	flex-direction: column;
`;

export const CourseContainerContentInformationContentDetails = styled.div`
	margin-top: 0%;
	display: flex;
	justify-content: space-between;
	border-left: 5px white solid;
	border-right: 5px white solid;
	background-color: rgba(0,0,0,0.07);
`;

export const CourseContainerContentInformationContentDetailsText = styled.div`
	margin-left: 5%;
`;

export const CourseContainerContentInformationContentDetailsConteinerIcons = styled.div`
	margin-right: 7.9%;
	display: flex;
	width: 9%;
`;


export const CourseContainerContentInformationContentDetailsEdit = styled(Ai.AiFillEdit)`
	margin-right: 13%;
	width: 100%;
`;

export const CourseContainerContentInformationContentDetailsDelete = styled(Ai.AiFillDelete)`
	color: red;
	width: 100%;
`;

export const CourseContainerContentRentability = styled.div`
	margin: 2%;
	margin-right: 4%;
	border-radius: 10px;
	width: 30%;
	background-color: white;
	height: 300px;
	@media (max-width: 600px) {
		width: 100%;
		margin-top: 10%;
	}
`;

export const CourseContainerConfigIcon = styled(Ai.AiFillSetting)`
	margin-bottom: -23%;
	margin-left: 87.5%;
`

export const CourseContainerContentInformationTitle = styled.h2`
	margin-left: 4%;
	width: 80%;
`;

export const CourseContainerContentInformationTitleBlank = styled.h2`
	margin-left: 3.7%;
	margin-top: -0.3%;
	width: 80%;
	font-size: 13pt;
	color: rgba(0, 0, 0, 0.5);
`;

export const CourseContainerContentInformationForm = styled.form`
	display: flex;
	margin: 3%;
`;

export const CourseContainerContentInformationIcon = styled(Ai.AiOutlineDown)`
	margin-top: 2%;
	width: 20%;
	&:hover {
		cursor: pointer;
	}
`;

export const CourseContainerContentInformationIcon2 = styled(Ai.AiOutlineUp)`
	margin-top: 2%;
	width: 20%;
	&:hover {
		cursor: pointer;
	}
`;


export const CourseContainerContentInformationIconPlus = styled(
	Ai.AiFillPlusSquare
)`
	margin-top: -0.3%;
	margin-bottom: 2%;
	width: 20.5%;
	&:hover {
		cursor: pointer;
	}
`;

export const CourseContainerContentInformationIconEdit = styled(
	Ai.AiOutlineEdit
)`
	margin-top: -0.3%;
	margin-bottom: 2%;
	width: 5%;
	&:hover {
		cursor: pointer;
	}
`;


