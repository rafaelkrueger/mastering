import styled from "styled-components";

export const UserInformationRow = styled.div`
    display: flex;
    margin-left: 7.5%;
    margin-right: 7%;
    justify-content: space-between;
    margin-bottom: 14%;
    @media (max-width:600px) {
        display: flex;
        flex-direction: column;
    }
`

export const UserInformationColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 46.7%;
    @media (max-width:600px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const UserInformationInput = styled.input``
export const UserInformationSpan = styled.span``
export const UserInformationLabel = styled.label``
export const UserInformationButton = styled.button`height:'100%';`