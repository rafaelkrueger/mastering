import styled from "styled-components";

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PricingContainerForm = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20%;
  @media (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap;
    padding: 20px;
  }
`;
