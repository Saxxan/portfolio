import { SectionPageDark } from "../../components/sectionPage/SectionPage";
import { useEffect, useState } from 'react';
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { useLocation } from "react-router-dom";
import DevelopProjects from "../../components/json/devprojects.json";
import ImageProject from "../../components/projectContent/ImageProject";
import TextBox from "../../components/projectContent/TextBox";
import ToolList from "../../components/projectContent/ToolList";
import TextContainer from "../../components/projectContent/TextContainer";
import ProjectLink from "../../components/projectContent/ProjectLink";

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
            {project.image && <ImageProject class='dev' image={project.image}/>}
            <TextContainer>
                <TextBox text={project.brief}/>
                {project.methology && <TextBox text={project.methology}/> }
                <ToolList tools={project.tools}/>
            </TextContainer>
            <ProjectLink link={project.link} text="Visit the page"/>
            <ProjectLink link={project.git} text="Take a look to the repository"/>
        </SectionPageDark>
    );
}