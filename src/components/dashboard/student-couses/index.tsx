import React, {useState} from "react";
import { ProfessorCousesContainer, ProfessorCousesContainerBody, ProfessorCousesContainerCard, ProfessorCousesContainerCardButton, ProfessorCousesContainerCardDescription, ProfessorCousesContainerCardImg, ProfessorCousesContainerCardTitle } from "../professor-courses/styles";


export const StudentCourses: React.FC<{courses:any, setCourses:any, setSpecificCourse:any}> = ({...props}) => {
return <>
    <div style={{marginLeft:'25%', marginTop:'4%'}}>
        <h2>Olá, boas-vindas à sua área do Aluno.</h2>
        <p>Aqui você tem acesso aos seus cursos, livros e estatísticas.</p>
    </div>
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
