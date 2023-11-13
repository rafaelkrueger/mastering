import styled from 'styled-components';

export const CarouselSlides = styled.div`
	width: 100%;
	height: 500px;
	background: hsl(200, 20%, 80%);
	margin-bottom: 5%;
	&:hover {
		cursor: pointer;
	}
`;

export const CarouselImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const CarouselImageButtonNext = styled.div`
	position: absolute;
	width: 35px;
	height: 35px;
	border-radius: 40px;
	top:250px;
	left: 10px;
	background-color: white;
	z-index: 1000;
	box-shadow: 1px 1px 10px rgba(0,0,0,0.4);
	&:hover {
		cursor: pointer;
	}
`;

export const CarouselImageButtonPrevious = styled.div`
	position: absolute;
	width: 35px;
	height: 35px;
	right: 10px;
	border-radius: 40px;
	top:250px;
	background-color: white;
	z-index: 1000;
	box-shadow: 1px 1px 10px rgba(0,0,0,0.4);
	&:hover {
		cursor: pointer;
	}
`;
