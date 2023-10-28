    import React, {useEffect, useState} from "react";
import Api from "../../../api";
import { ITopic } from "../../../interfaces/topic";
import { ICourses } from "../../../interfaces";
import { IContent } from "../../../interfaces/content";

export const ClassComponent: React.FC<{specificCourse:string}> = ({...props}) => {
    const [selectedCourse, setSelectedCourse] = useState<ICourses>()
    const [selectedTopic, setSelectedTopic] = useState<ITopic[]>([])
    const [selectedContent, setSelectedContent] = useState<IContent[]>()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        Api.get(`/course/${props.specificCourse}`)
        .then((res)=>{
            setSelectedContent(res.data)
        })
        console.log(selectedContent)
    },[])

    useEffect(()=>{
        console.log(selectedContent)
    },[selectedContent])
    return (
        <>
        <div style={{marginLeft:'20%', marginTop:'5%', width:'100%'}}>
            <h3>Seu progresso atual</h3>
            <div style={{display:'flex', flexDirection:'row', margin:'5%'}}>
                <div style={{width:'20%', height:'500px', background:'rgba(0,0,0,0.2)'}}>
                    <div>

                    </div>
                </div>
                <div style={{width:'80%', background:'black'}}>
                    selected course here
                </div>
            </div>
        </div>
        </>
    )
};
