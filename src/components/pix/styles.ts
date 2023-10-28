import styled from "styled-components";

export const PixComponent = styled.div`
    @media (max-width:600px;) {
      display: flex;
      flex-direction: column;
    }
`

export const PixContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 7%;
    margin-left: 4%;
    @media (max-width:600px) {
      display: flex;
      flex-direction: column;
    }
`

export const PixColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const PixHeader = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5.5%;
`

export const PixBody = styled.div`
  margin-top: 5%;
  margin-bottom: 9%;
  margin-left: 5%;
  width: 100%;
`

export const PixText = styled.p`
  margin-top: 13%;
  margin-bottom: 13%;
`

export const PixHeaderSpan = styled.span`
  margin-left: 10%;
  margin-top: -10%;
  background-color: green;
  color: white;
  border-radius: 30px 0px 30px 0px;
  font-size: 12pt;
  padding: 9px;
`

export const PixButton = styled.button`
    width: 40%;
    background-color: green;
    color: white;
    border-radius: 5px;
    height: 40px;
    border: 0px white solid;
`