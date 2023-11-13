    import React, {useEffect, useState} from "react";
import Api from "../../../api";
import { ITopic } from "../../../interfaces/topic";
import { ICourses } from "../../../interfaces";
import { IContent } from "../../../interfaces/content";
import * as Md from 'react-icons/md'
import * as Rx from 'react-icons/rx'
import {SlArrowLeft} from 'react-icons/sl'
import {AiOutlineBook} from 'react-icons/ai'
import {BsFillPlayFill} from 'react-icons/bs'
import { ClassComponentContainer, ClassComponentContainerLeft, ClassComponentContainerLeftWide, ClassComponentContainerLeftWideContent, ClassComponentContainerRight, ClassComponentContainerRightCard, ClassComponentContainerRightCardContainer, ClassComponentWrapper, ClassComponentWrapperTitle } from "./styles";


export const ClassComponent: React.FC<{specificCourse:string, setSpecificCourse:any}> = ({...props}) => {
    const [selectedCourse, setSelectedCourse] = useState<ICourses>()
    const [selectedTopic, setSelectedTopic] = useState<ITopic[]>([])
    const [selectedContent, setSelectedContent] = useState<IContent[]>()
    const [mainVideo, setMainVideo] = useState<string>('')
    const [course, setCourse] = useState<IContent>()

    const [specificContentVisible, setSpecificContentVisible] = useState({
        id:0,
        visible:false,
        selectedtopic:''
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        Api.get(`/course/${props.specificCourse}`)
        .then((res)=>{
            setSelectedContent(res.data.content)
            setSelectedTopic(res.data.topic)
            setSelectedCourse(res.data.course)
            setMainVideo(selectedTopic[0]?.videoUrl as unknown as '');
        })
    },[props.specificCourse])

    useEffect(()=>{
        console.log(course)
    },[course])

    return (
        <>
        <ClassComponentWrapper>
            <ClassComponentWrapperTitle>
                <SlArrowLeft style={{  width:'10%'}} onClick={()=>props.setSpecificCourse('')} size={27}>Voltar</SlArrowLeft>
                <h3>Seu progresso atual</h3>
            </ClassComponentWrapperTitle>
            <ClassComponentContainer>
                <ClassComponentContainerLeft>
                    {selectedTopic.map((topic, index)=>{
                        return(
                            <>
                            <ClassComponentContainerLeftWide>
                                <div style={{display:'flex'}}>
                                    <Rx.RxDotFilled size={20} style={{marginTop:'3%'}} color="green"></Rx.RxDotFilled>
                                    <p>{topic.name}</p>
                                </div>
                                {
                                specificContentVisible.visible === true && specificContentVisible.id === index?
                                <Md.MdOutlineKeyboardArrowUp onClick={()=>setSpecificContentVisible({
                                    id:index,
                                    visible:false,
                                    selectedtopic:''
                                })} size={23} style={{marginTop:'3.5%', marginRight:'3%'}}/>
                                :
                                <Md.MdOutlineKeyboardArrowDown onClick={()=>setSpecificContentVisible({
                                    id:index,
                                    visible:true,
                                    selectedtopic:topic._id as unknown as ''
                                })} size={23} style={{marginTop:'3.5%', marginRight:'3%'}}/>
                                }
                            </ClassComponentContainerLeftWide>
                            { specificContentVisible.visible && specificContentVisible.id === index?
                            selectedContent?.map((content:any)=>{
                                if(content[0]?.topicRelated !== specificContentVisible.selectedtopic){
                                    return(
                                        <>
                                        <ClassComponentContainerLeftWideContent onClick={()=>{setCourse(content[0])}}>
                                            <div>
                                            <Rx.RxDotFilled size={20} style={{marginTop:'3%'}} color="green"></Rx.RxDotFilled>
                                            </div>
                                            <div>
                                            {content[0]?.name}
                                            </div>
                                        </ClassComponentContainerLeftWideContent>
                                        </>
                                    )
                                }
                            })
                            :
                            ''
                            }
                            </>
                        )
                    })}
                </ClassComponentContainerLeft>
                    {
                    course?
                    <>
                    <ClassComponentContainerRight>
                    <ClassComponentContainerRightCardContainer>
                    {course.videoUrl?
                    <ClassComponentContainerRightCard>
                        <BsFillPlayFill style={{marginLeft:'41%'}} size={30}>Image</BsFillPlayFill>
                        <p>Conteúdo em Vídeo</p>
                    </ClassComponentContainerRightCard>
                    :''}
                    {course.files?.length as unknown as 0 > 0?
                    <ClassComponentContainerRightCard>
                        <AiOutlineBook style={{marginLeft:'41%'}} size={30}>Image</AiOutlineBook>
                        <p>Conteúdo em PDF</p>
                    </ClassComponentContainerRightCard>
                    :''}
                    </ClassComponentContainerRightCardContainer>
                    </ClassComponentContainerRight>
                    </>
                    :
                    <video
                        controls
                        autoPlay
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        >
                        <source src={mainVideo} type="video/mp4" />
                    </video>
                    }
            </ClassComponentContainer>
        </ClassComponentWrapper>
        </>
    )
};
