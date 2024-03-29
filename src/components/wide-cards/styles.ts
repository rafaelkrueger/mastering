import { AiFillHeart } from 'react-icons/ai';
import {BsFillCartPlusFill} from 'react-icons/bs'
import styled, { keyframes } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

const smoothHover = keyframes`
    0% {
        transform: perspective(500px) rotateY(0deg) skewX(0deg);
    }
    50% {
        transform: perspective(500px) rotateY(6.5deg) skewX(3deg);
    }
    100% {
        transform: perspective(500px) rotateY(8deg) skewX(0deg);
    }`;

export const WideCardGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 30px;
	margin-top: 7%;
	margin-bottom: 25%;
`;


export const WideCardElement = styled.div`
	width: 300px;
	height: 150px;
	margin: 2%;
	border-radius: 15px;
	animation: ${skeletonLoading} 1s linear infinite alternate;
	&:hover {
		cursor: pointer;
		animation: ${smoothHover} 3s linear infinite alternate;
	}
	@media (max-width:600px) {
		margin-top: 35%;
	}
`;

export const WideCardElementImage = styled.img`
	max-width: 100%;
	min-width: 100%;
	max-height: 100%;
	min-height: 100%;
	border-radius: 20px;
`;

export const WideCardElementTitle = styled.h4`
	text-align: left;
`;

export const WideCardElementDescription = styled.p`
	text-align: left;
	font-size: 10pt;
	color: rgba(0, 0, 0, 0.4);
`;


export const WideCardElementCart = styled.div`
	width: 30px;
	height: 30px;
	background-color: #6779f1;
	color:white;
	border-radius: 20px;
	position: absolute;
	margin-top: 0.5%;
	margin-left: 3%;
	z-index: 1;
	box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
	&:hover {
		cursor: pointer;
	}
	@media (max-width:600px) {
		margin-left: 2%;
		margin-top: 2%;
	}
`;

export const WideCardElementWishlist = styled.div`
	width: 30px;
	background-color: #6779f1;
	color:white;
	border-radius: 20px;
	position: absolute;
	margin-left: 19%;
	margin-top: 0.5%;
	z-index: 1;
	padding-bottom: 4px;
	box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
	@media (max-width:600px) {
		margin-left: 62%;
		margin-top: 2%;
	}
`;

export const WideCardElementCartIcon = styled(BsFillCartPlusFill)`
	width: 30px;
	&:hover {
		cursor: pointer;
	}
`;

export const WideCardElementWishlistIcon = styled(AiFillHeart)`
	width: 30px;
	&:hover {
		cursor: pointer;
	}
`;