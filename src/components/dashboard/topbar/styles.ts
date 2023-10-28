
import styled from 'styled-components';

export const TopbarContainer = styled.div`
	width: 100%;
	height: 40px;
	background-color: black;
    text-align: left;
    padding-top: 20px;
    padding-left: 30px;
    z-index: 3;
    @media (max-width:600px) {
        position: fixed;
        height: 60px;
    }
`;

