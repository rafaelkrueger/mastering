import styled from "styled-components";

export const FormatContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 22%;
  margin-top: 2%;
  background-color: white;
  flex-wrap: wrap;
  height: max-content;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 75%;
  color: black;
  @media (max-width: 600px) {
		flex-wrap: wrap;
		flex-direction: column;
  }
`;

export const FormatContainerCard = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  text-align: center;
  width: 245px;
  height: 200px;
  margin: 5%;
  border-radius: 20px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #f3f4f8;
    cursor: pointer;
  }
  @media (max-width: 600px) {
		flex-wrap: wrap;
		flex-direction: column;
		margin-bottom: 5%;
    margin-left: 15%;
  }

`;

export const FormatContainerCardImage = styled.img`
  margin-top: 5%;
  max-width: 30%;
  align-self: center;
`;

export const FormatContainerCardTitle = styled.h2`
  color: rgba(0, 0, 0, 0.6);
`;

export const FormatContainerCardSubTitle = styled.p`
  margin-top: -5%;
  color: rgba(0, 0, 0, 0.3);
  font-size: 13pt;
`;
