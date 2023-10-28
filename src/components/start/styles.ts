import styled from "styled-components";

export const StartContainer = styled.div`
  min-width: 100%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;

export const StartContainerTitle = styled.h2`
  text-align: left;
  margin-left: 5%;
`;

export const StartContainerSubTitle = styled.p`
  text-align: left;
  margin-left: 5%;
  font-size: 15pt;
  color: rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    font-size: 10pt;
  }
`;

export const StartContainerButton = styled.button`
  text-align: left;
  margin-left: 5%;
  width: 30%;
  text-align: center;
  color: white;
  background-color: green;
  border: 0.3px rgba(0, 0, 0, 0.6) solid;
  border-radius: 5px;
  height: 40px;
  @media (max-width: 600px) {
    margin: auto;
    width: 90%;
  }
`;
