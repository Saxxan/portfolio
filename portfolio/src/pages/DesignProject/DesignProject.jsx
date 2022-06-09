import { SectionPageLight } from "../../components/sectionPage/SectionPage";
import DesignProjects from "../../components/json/designprojects.json";
import { useLocation } from "react-router-dom";
import ProjectContent from "../../components/projectContent/ProjectContent";

export default function DesignProject() {

    const location = useLocation();
    let project = {};

    DesignProjects.forEach((p) =>{
        if(location.pathname.includes(p.id)){
            project = p;
        }
    })

    return (
        <SectionPageLight>
            <ProjectContent p={project}/>
        </SectionPageLight>
    );
}