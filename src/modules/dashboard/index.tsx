import React, { useEffect, useState } from "react";
import { ClassComponent, CourseContent, Format, Sidebar } from "../../components";
import { DashboardContainer } from "./styles";
import { ProfessorCourses } from "../../components/dashboard/professor-courses";
import { getStorageValue } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces";
import Api from "../../api";
import { TopBar } from "../../components/dashboard/topbar";
import { StudentCourses } from "../../components/dashboard/student-couses";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<IUser>()
  const [specificCourse, setSpecificCourse] = useState('')
  const [courses, setCourses] = useState([])
  const [learningCourses, setLearningCourses] = useState([])
  const [sideBarToogle, setSideBarToogle] = useState(false)

  useEffect(()=>{
    if(!getStorageValue('accessToken',null)){
      navigate("/")
    }
    if(!user){
      Api.get(`user/token/${getStorageValue('accessToken',null)}`)
      .then((res)=>{
        setUser(res.data)
      })
    }
  },[])

  useEffect(()=>{
    if(user && !courses.length){
      Api.get(`/admin/course/${user?._id as unknown as ''}`)
      .then((res)=>{
        setCourses(res.data)
      })
    }
  },[user, courses])

  useEffect(()=>{
    if(user){
      Api.get(`/course/user/${user._id}`)
      .then((res)=>{
        setLearningCourses(res.data)
      })
    }
  },[user])


  return (
    <>
      <div style={{display:"flex", flexDirection:window.screen.availWidth > 600?'row':'column'}}>
        {window.screen.availWidth > 600?
          <Sidebar user={user as unknown as IUser}/>:
          <>
          <TopBar sideBarToogle={sideBarToogle} setSideBarToogle={setSideBarToogle}/>
          <div style={{display:sideBarToogle?'block':'none'}}>
            <Sidebar user={user as unknown as IUser}/>
          </div>
          </>
        }
        {!specificCourse?
        <>
          <DashboardContainer>
            {user?.isTeacher?<Format/>:''}
          {user?.isTeacher?
          <ProfessorCourses courses={courses} setCourses={setCourses} setSpecificCourse={setSpecificCourse}/>
          :
          <StudentCourses courses={learningCourses} setCourses={setLearningCourses} setSpecificCourse={setSpecificCourse}/>
            //card mais bonito com "continuar" com mais dados
            //grafico para o estudante
            //do lado direito lista com cursos recomendados
          }
          </DashboardContainer>
        </>
        :
        <>
          {user?.isTeacher?
          <CourseContent specificCourse={specificCourse} setSpecificCourse={setSpecificCourse}/>
          :
          <ClassComponent specificCourse={specificCourse} setSpecificCourse={setSpecificCourse}/>}
        </>
        }
      </div>
    </>
  );
};
