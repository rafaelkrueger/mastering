import React, {useState} from "react";
import { ProfessorCousesContainer, ProfessorCousesContainerBody, ProfessorCousesContainerCard, ProfessorCousesContainerCardButton, ProfessorCousesContainerCardDescription, ProfessorCousesContainerCardImg, ProfessorCousesContainerCardTitle } from "../professor-courses/styles";


export const StudentCourses: React.FC<{courses:any, setCourses:any, setSpecificCourse:any}> = ({...props}) => {
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
                        <ProfessorCousesContainerCardDescription>{list.description.slice(0,17)}...</ProfessorCousesContainerCardDescription>
            <ProfessorCousesContainerCardButton onClick={()=>{
                props.setSpecificCourse(list._id)
            }}>Continuar Curso</ProfessorCousesContainerCardButton>
            </ProfessorCousesContainerBody>
        </ProfessorCousesContainerCard>

        </>

        )
    })
        :''}

    </ProfessorCousesContainer>
  </>;
};
