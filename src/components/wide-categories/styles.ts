import { Link } from "react-router-dom";
import styled from "styled-components";

export const WideCategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
`;

export const WideCategoriesElement = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  width: 20%;
  height: 100px;
  background-color: rgba(0,0,0,0.06);
  margin-inline: 3%;
  border: 0.3px rgba(0, 0, 0, 0.4) solid;
  @media (max-width: 600px) {
    width: 40%;
    height: 50px;
    margin-bottom: 7%;
  }
`;


export const WideCategoriesText = styled(Link)`
  margin: auto;
  text-decoration: none;
  color: black;
`;
