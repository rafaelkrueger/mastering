import styled from "styled-components";

export const PurchaseContainer = styled.div`
    margin: 10%;
    margin-top: 0%;
`

export const PurchaseBackArrow = styled.div`
    padding: 3px;
    padding-top: 10px;
    padding-left: 3px;
    background-color: green;
    width: 30%;
    margin-bottom: -10%;
    color: white;
    text-align: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 5px;
    @media (max-width:600px){
      width: 50%;
    }
`

export const PurchaseBackArrowButton = styled.p`
    font-size: 10pt;
`

export const PurchaseOptions = styled.div`
  width:100%;
  background-color: rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  padding: 30px;
  border-radius: 10px;
  border-top-left-radius: 0px;
`

export const PurchaseOptionsElement = styled.div`
  width: 70%;
  align-self: center;
  margin-bottom: 4%;
  background-color: white;
`

export const PurchaseOptionsInputElement = styled.div`
  background-color: white;
  width: 70%;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-right: 2%;
  margin-left: 2%;
`

export const PurchaseOptionsInput = styled.input``

export const PurchaseOptionsText = styled.p`
    margin-top: 2.5%;
    margin-left: 2.5%;
`

