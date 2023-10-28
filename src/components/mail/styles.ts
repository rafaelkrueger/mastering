import styled from "styled-components";

export const MailContainer = styled.div`
  padding-top: 120px;
  min-width: 100%;
  min-height: 300px;
  background-color: black;
  margin-top: 10%;
`;

export const MailTitleElement = styled.h2`
  color: white;
  text-align: left;
  margin-left: 5.5%;
`;

export const MailElementContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MailElement = styled.input`
  padding: 15px;
  border: 0.2px rgba(0, 0, 0, 0.4) solid;
  width: 70%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.4);
`;

export const MailElementButton = styled.button`
  width: 15%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: green;
  color: white;
`;
