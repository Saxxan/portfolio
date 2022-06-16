import { SectionPageLight } from "../../components/sectionPage/SectionPage";
import DesignProjects from "../../components/json/designprojects.json";
import { useLocation } from "react-router-dom";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import TextBox from "../../components/projectContent/TextBox";
import { useState, useEffect } from "react";
import ImageProject from "../../components/projectContent/ImageProject";
import ToolList from "../../components/projectContent/ToolList";
import TextContainer from "../../components/projectContent/TextContainer";
import ProjectLink from "../../components/projectContent/ProjectLink";
import element from "../../../package.json";

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
            <ImageProject class='big' image={element.homepage + project.image1}/>
            <TextContainer>
                <TextBox wide="70vw" text={project.brief}/>
                {project.image2 && <ImageProject class='big' image={element.homepage + project.image2}/>}
                {project.application && <TextBox wide="70vw" text={project.application}/> }
            </TextContainer>
            <ToolList tools={project.tools}/>
            {project.link && <ProjectLink link={project.link} text="Visit the page"/>}
        </SectionPageLight>
    );
}