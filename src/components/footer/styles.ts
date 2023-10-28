import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainFooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  padding-bottom: 50px;
  background-color: black;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const MainFooterContainerElement = styled.div`
padding: 60px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-bottom: 5%;
  }
`;

export const FooterLinkElementTitle = styled.h1`
  text-decoration: none;
  color: white;
  font-size: 28pt;
`;

export const FooterLinkElement = styled(Link)`
  text-decoration: none;
  color: grey;
  margin-bottom: 10px;
`;

export const FooterLinkLogo = styled.div`
  margin: 0%;
  max-width: 100%;
  min-width: 100%;
  border-radius: 10px;
  background-color: hsl(200, 20%, 80%);
  @media (max-width: 600px) {
    margin-top: 5%;
  }
`;
