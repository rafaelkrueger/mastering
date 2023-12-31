import styled from "styled-components";

export const MainInformation = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5%;
  max-width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MainInformationTitle = styled.h1`
  margin-right: 15%;
  margin-left: 15%;
  padding-bottom: 30px;
  border-bottom: 1px black solid;
  text-align: center;
  color: grey;
  @media (max-width: 600px) {
    margin-left: 7%;
    min-width: 90%;
  }
`;

export const MainBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  min-width: 40%;
  font-size: 15pt;
  font-weight: 600;
  text-align: left;
  margin-left: 15%;
  @media (max-width: 600px) {
    margin-left: 7%;
    min-width: 100%;
  }
`;

export const MainBarContainerListItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImageContainer = styled.div`
  min-width: 30%;
  max-width: 30%;
  min-height: 40%;
  max-height: 40%;
  border-radius: 10px;
  background-color: hsl(200, 20%, 80%);
  margin-top: -2.5%;
  margin-left: 0%;
  @media (max-width: 600px) {
    margin-top: 5%;
    min-width: 100%;
    min-height: 100px;
    margin-bottom: 20%;
  }
`;

export const MainImageContainerInformation = styled.img`
  max-width: 100%;
  min-width: 100%;
  border: 1px white solid;
  border-radius: 10px;
`;
