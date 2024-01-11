import React, { useEffect, useState } from "react";
import { CourseContainerContent, CourseContainerContentMain, CourseContainerContentInformation, CourseContainerContentRentability, CourseContainerContentInformationContent, CourseContainerContentInformationIcon, CourseContainerContentInformationTitle, CourseContainerContentInformationTitleBlank, CourseContainerContentInformationIconPlus, CourseContainerContentInformationContentForm, CourseContainerContentInformationIcon2, CourseContainerContentInformationContentDark, CourseContainerContentInformationContentDetails, CourseContainerContentInformationIconEdit, CourseContainerContentInformationContentDetailsText, CourseContainerContentInformationContentDetailsEdit, CourseContainerContentInformationContentDetailsDelete, CourseContainerContentInformationContentDetailsConteinerIcons, CourseContainerConfigIcon } from "./styles";
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar";
import Api from "../../../api";
import { ICourses } from "../../../interfaces";
import { ITopic } from "../../../interfaces/topic";
import { IContent } from "../../../interfaces/content";
import {SlArrowLeft} from 'react-icons/sl'
import { IBudgetCourse } from "../../../interfaces/budget";
import * as Io from 'react-icons/io'
import { ContentForm, TopicForm } from "../topic-content-form";
import { Configure } from "../configure";
import { DeleteConfirmation } from "../delete-confirmation";
import { ToastMessage } from "src/components/toast-message";

export const CourseContent: React.FC<{specificCourse:string, setSpecificCourse:any}> = ({...props}) => {
  const [formTopic, setFormTopic] = useState<boolean>(false)
  const [formContent, setFormContent] = useState<boolean>(false)
  const [showSettings, setShowSettings] = useState<boolean>(false)
  const [showContent, setShowContent] = useState({
    isActive:false,
    topicId:''
  })
  const [course, setCourse] = useState<ICourses>()
  const [topics, setTopics] = useState<ITopic[]>([])
  const [contents, setContents] = useState<IContent[][]>()
  const [budget, setBudget] = useState<IBudgetCourse>()
  const [topicId, setTopicId] = useState<string>('')

  const [confirmationId, setConfirmationId] = useState<string>()
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false)

  const [updatableContent, setUpdatableContent] = useState<IContent>()

  const [toast, setToast] = useState({
    open:false,
    type:'',
    message:'',
  })


  useEffect(()=>{
    Api.get(`/course/${props.specificCourse}`)
    .then((res)=>{
      setCourse(res.data.course)
      setTopics(res.data.topic)
      setContents(res.data.content)
    })
    .catch((err)=>{
      console.log(err)
    })

    Api.get(`/admin/budget/${props.specificCourse}`)
    .then((res)=>{
      setBudget(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[formTopic, formContent, isConfirmationOpen])




  return <>
    <DeleteConfirmation contentId={confirmationId  as unknown as ''} isConfirmationOpen={isConfirmationOpen} setIsConfirmationOpen={setIsConfirmationOpen} setToast={setToast}/>
    <ToastMessage toastOpen={toast.open} message={toast.message} type={toast.type} setToastOpen={setToast} />
    <CourseContainerContent>
      <div style={{display:'flex'}}>
          <SlArrowLeft style={{marginLeft:'-1%', marginTop:'4%', width:'10%', marginRight:'5%'}} onClick={()=>props.setSpecificCourse('')} size={27}>Voltar</SlArrowLeft>
          <h2 style={{marginTop:'3.8%', marginLeft:'-5%'}}>{course?.name}</h2>
      </div>
        <CourseContainerContentMain>
            <CourseContainerContentInformation>
            {
            showSettings ?
              <Configure specificCourse={course} setSpecificCourse={setCourse} />
              :
              <>
                {!formTopic && !formContent ?
                  <>
                    {topics.length > 0 && topics.map((topic: ITopic, index) => (
                      <div key={index}>
                        <CourseContainerContentInformationContent isVisible={!formTopic}>
                          <CourseContainerContentInformationTitle>{topic.name}</CourseContainerContentInformationTitle>
                          {
                            !showContent.isActive ?
                              <CourseContainerContentInformationIcon onClick={() => { setShowContent({ isActive: !showContent.isActive, topicId: topic._id as unknown as '' }) }} size={30} />
                              :
                              <CourseContainerContentInformationIcon2 onClick={() => { setShowContent({ isActive: !showContent.isActive, topicId: topic._id as unknown as '' }) }} size={30} />
                          }
                        </CourseContainerContentInformationContent>

                        {
                          showContent.isActive && contents !== undefined &&
                          contents[index].filter((content) => content?.topicRelated === topic._id).map((content, contentIndex) => (
                            <CourseContainerContentInformationContentDetails key={contentIndex}>
                              <CourseContainerContentInformationContentDetailsText>{content.name}</CourseContainerContentInformationContentDetailsText>
                              <CourseContainerContentInformationContentDetailsConteinerIcons>
                                <CourseContainerContentInformationContentDetailsEdit onClick={() => { setUpdatableContent(content); setTopicId(topic._id as unknown as ''); setFormContent(true); }} />
                                <CourseContainerContentInformationContentDetailsDelete onClick={()=>{ setConfirmationId(content._id); setIsConfirmationOpen(!isConfirmationOpen)}} />
                              </CourseContainerContentInformationContentDetailsConteinerIcons>
                            </CourseContainerContentInformationContentDetails>
                          ))
                        }

                        {
                          showContent.isActive &&
                          <>
                            <CourseContainerContentInformationContentDark isVisible={!formTopic}>
                              <CourseContainerContentInformationTitleBlank>Crie um conteúdo de estudo para: <strong>{topic.name}</strong></CourseContainerContentInformationTitleBlank>
                              <CourseContainerContentInformationIconPlus onClick={() => { setTopicId(topic._id as unknown as ''); setFormContent(true); }} color="21d73c" size={24}></CourseContainerContentInformationIconPlus>
                            </CourseContainerContentInformationContentDark>
                          </>
                        }
                      </div>
                    ))}
                  </>
                  :
                  <>
                    <CourseContainerContentInformationContent isVisible={!formContent}>
                      <CourseContainerContentInformationTitleBlank>Crie um novo tópico de estudo</CourseContainerContentInformationTitleBlank>
                      <CourseContainerContentInformationIconPlus onClick={() => setFormTopic(true)} color="21d73c" size={24}></CourseContainerContentInformationIconPlus>
                    </CourseContainerContentInformationContent>
                  </>
              }
              </>
            }
            {formTopic?<TopicForm formTopic={formTopic} setFormTopic={setFormTopic} specificCourse={props.specificCourse}/>:''}
            {formContent?<ContentForm formContent={formContent} setFormContent={setFormContent} relatedTopic={topicId} updatableContent={updatableContent} setUpdatableContent={setUpdatableContent}/>:''}
            { formTopic || formContent? '':
            <>
              <CourseContainerContentInformationContentDark isVisible={!formTopic}>
                        <CourseContainerContentInformationTitleBlank>Crie um novo tópico de estudo</CourseContainerContentInformationTitleBlank>
                        <CourseContainerContentInformationIconPlus onClick={()=>setFormTopic(true)} color="21d73c" size={24}></CourseContainerContentInformationIconPlus>
              </CourseContainerContentInformationContentDark>
            </>
            }
            <CourseContainerConfigIcon onClick={()=>setShowSettings(!showSettings)} color="rgba(0,0,0,0.7)" size={30}/>
            </CourseContainerContentInformation>
            <CourseContainerContentRentability>
            <div style={{padding:40}}>
              <CircularProgressbar styles={buildStyles({
                rotation: 0.15,
                textSize: '18px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(62, 152, 199)`,
                textColor: 'black',
                trailColor: '#d6d6d6',
                backgroundColor: '#2b00ff',
                })}
                value={budget?.transactions?budget.transactions.length:0}
                strokeWidth={3} />
            </div>
            <h3>R${budget?.totalAmount?budget.totalAmount.toFixed(2):0}</h3>
            <p>Seu lucro líquido obtido é de R${budget?.totalAmount?budget.totalAmount.toFixed(2):0}</p>
            <p><Io.IoMdRadioButtonOn color="#2b00ff" size={20}/> - {budget?.transactions?budget.transactions.length:0}</p>
            <p><Io.IoMdRadioButtonOn color="#ff0707" size={20}/> - {budget?.afiliateTransactions?budget.afiliateTransactions.length:0}</p>
            </CourseContainerContentRentability>
        </CourseContainerContentMain>
    </CourseContainerContent>
  </>;
};
