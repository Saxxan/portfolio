import { SectionPageDark } from "../../components/sectionPage/SectionPage";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { useLocation } from "react-router-dom";
import DevelopProjects from "../../components/json/devprojects.json";

export default function DevelopProject() {

    const location = useLocation();
    let project = {};

    DevelopProjects.forEach((p) => {
        if(location.pathname.includes(p.id)){
            project = p;
        }
    })

    return (
        <SectionPageDark>
            <SectionTitle title={project.title}></SectionTitle>
        </SectionPageDark>
    );
}