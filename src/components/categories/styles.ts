import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const CategoriesContainer = styled.div`
  margin: 5%;
  margin-left: 15%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin-left: 13%;
  }
`;

export const CategoryElementSkeleton = styled.div`
  height: 300px;
  width: 300px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  animation: ${skeletonLoading} 1s linear infinite alternate;
  border: 0.3px solid rgba(0, 0, 0, 0.1);
`;

export const CategoryElementImage = styled.img`
  height: 300px;
  width: 300px;
`;

export const CategoryElement = styled.div`
  height: 300px;
  width: 300px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  background-color: hsl(200, 20%, 80%);
  border: 0.3px solid rgba(0, 0, 0, 0.1);
`;


export const CategoryElementText = styled(Link)`
  color:black;
  font-size: 25pt;
  text-decoration: none;
  width: 100%;
  height: 60px;
  text-align: center;
  background-color: rgba(255,255,255,0.87);
  font-weight: 500;
  border-top: 1px rgba(0,0,0,0.5) solid;
  border-bottom: 1px rgba(0,0,0,0.5) solid;
  color: #6779f1;
  margin-top: -60%;
  box-shadow: 1px 1px 20px rgba(255,255,255,0.6);
  &:hover{
    box-shadow: 1px 1px 20px rgba(255,255,255,0.6);
  }
`;
