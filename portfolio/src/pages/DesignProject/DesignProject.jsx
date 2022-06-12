import { SectionPageLight } from "../../components/sectionPage/SectionPage";
import DesignProjects from "../../components/json/designprojects.json";
import { useLocation } from "react-router-dom";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import TextBox from "../../components/projectContent/TextBox";
import { useState, useEffect } from "react";
import ImageProject from "../../components/projectContent/ImageProject";
import ToolList from "../../components/projectContent/ToolList";
import TextContainer from "../../components/projectContent/TextContainer";

export default function DesignProject() {

    const location = useLocation();
    let [project, setProject] = useState({});


    useEffect(() => {
        DesignProjects.forEach((p) =>{
            if(location.pathname.includes(p.id)){
                setProject(p);
            }
        });
    }, [project, location]);

    return (
        <SectionPageLight>
            <SectionTitle title={project.title}/>
            <ImageProject class='des' image={project.image}/>
            <TextContainer>
                <TextBox text={project.brief}/>
                {project.application && <TextBox text={project.application}/> }
                <ToolList tools={project.tools}/>
            </TextContainer>
        </SectionPageLight>
    );
}