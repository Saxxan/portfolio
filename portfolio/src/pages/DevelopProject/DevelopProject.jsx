import { SectionPageDark } from "../../components/sectionPage/SectionPage";
import { useEffect, useState } from 'react';
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { useLocation } from "react-router-dom";
import DevelopProjects from "../../components/json/devprojects.json";
import ImageProject from "../../components/projectContent/ImageProject";
import TextBox from "../../components/projectContent/TextBox";
import ToolList from "../../components/projectContent/ToolList";

export default function DevelopProject() {

    const location = useLocation();
    let [project, setProject] = useState({});

    useEffect(()=>{
        DevelopProjects.forEach((p) => {
            if(location.pathname.includes(p.id)){
                setProject(p);
            }
        });
    },[project, location]);

    return (
        <SectionPageDark>
            <SectionTitle title={project.title}/>
            <ImageProject image={project.image}/>
            <TextBox text={project.brief}/>
            {project.application && <TextBox text={project.application}/> }
            <ToolList tools={project.tools}/>
        </SectionPageDark>
    );
}