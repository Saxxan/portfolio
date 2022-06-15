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
            <TextContainer>
                <TextBox text={project.brief}/>
                {project.image1 && <ImageProject class='small' ancho="250px" image={project.image1}/>}
            </TextContainer>
            <TextContainer>
                {project.imageBig && <ImageProject class='big' image={project.imageBig}/>}
                {project.image2 && <ImageProject class='small' image={project.image2}/>}
                {project.methology && <TextBox text={project.methology}/> }
                {project.text2 && <TextBox wide="70vw" text={project.text2}/> }
            </TextContainer>
            {project.text1 && <TextContainer>
                <TextBox text={project.text1}/>
                {project.image3 && <ImageProject class='small' ancho="250px" image={project.image3}/>}
            </TextContainer>}
            {project.image4 && <TextContainer>
                <ImageProject class='big' ancho="250px" image={project.image4}/>
            </TextContainer>}
            <ToolList tools={project.tools}/>
            <ProjectLink link={project.link} text="Visit the page"/>
            <ProjectLink link={project.git} text="Take a look to the repository"/>
        </SectionPageDark>
    );
}