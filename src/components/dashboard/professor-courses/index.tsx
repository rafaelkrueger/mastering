import React, {useState} from "react";
import { ProfessorCousesContainer, ProfessorCousesContainerBody, ProfessorCousesContainerCard, ProfessorCousesContainerCardButton, ProfessorCousesContainerCardDescription, ProfessorCousesContainerCardImg, ProfessorCousesContainerCardTitle } from "./styles";


export const ProfessorCourses: React.FC<{courses:any, setCourses:any, setSpecificCourse:any}> = ({...props}) => {
return <>
    <ProfessorCousesContainer>
    {props.courses.length > 0?
    props.courses.map((list:any)=>{
        return(
        <>
        <ProfessorCousesContainerCard>
            <ProfessorCousesContainerCardImg src={list.image}/>
            <ProfessorCousesContainerBody>

            <ProfessorCousesContainerCardTitle>{list.name}</ProfessorCousesContainerCardTitle>
                        <ProfessorCousesContainerCardDescription>{list.description}</ProfessorCousesContainerCardDescription>
            <ProfessorCousesContainerCardButton onClick={()=>{
                props.setSpecificCourse(list._id)
            }}>Editar Curso</ProfessorCousesContainerCardButton>
            </ProfessorCousesContainerBody>
        </ProfessorCousesContainerCard>

        </>

        )
    })
        :''}

    </ProfessorCousesContainer>
  </>;
};
