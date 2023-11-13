import styled from "styled-components";

export const ClassComponentWrapper = styled.div`
    margin-left:20%;
    margin-top:5%;
    width:100%;
`

export const ClassComponentWrapperTitle = styled.div`
    display: flex;
`

export const ClassComponentContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin:5%;
    border-radius:10px;
`
export const ClassComponentContainerLeft = styled.div`
    width:22%;
    height:450px;
    background:rgba(0,0,0,0.11);
`

export const ClassComponentContainerLeftWide = styled.div`
    border-bottom:1px white solid;
    border-top:1px white solid;
    display:flex;
    justify-content:space-between;
    padding:3px;
`

export const ClassComponentContainerLeftWideContent = styled.div`
    background:rgba(255,255,255,0.9);
    color:black;
    border:0.1px solid rgba(0,0,0,0.4);
    height:40px;
    display:flex;
    padding-left: 20px;
    &:hover{
        cursor: pointer;
        box-shadow: 1px 1px 20px rgba(0,0,0,0.1);
    }
`


export const ClassComponentContainerRight = styled.div`
    width:78%;
    background:rgba(235,235,235,0.5);
`

export const ClassComponentContainerRightCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 3%;
    justify-content: space-around;
`

export const ClassComponentContainerRightCard = styled.div`
    width:25%;
    background:white;
    height: 100px;
    margin: 1%;
    border-radius: 20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    padding: 10px;
    text-align: center;
    &:hover{
        cursor: pointer;
        box-shadow: 1px 1px 20px rgba(0,0,0,0.1);
    }
`