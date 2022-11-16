import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { SectionPageLight } from '../../components/sectionPage/SectionPage';
import ProjectsSwiper from '../../components/ProjectsSwiper/ProjectsSwiper';

export default function DesignProjects() {
    return (
        <SectionPageLight>
            <SectionTitle title='Design projects'></SectionTitle>
            <ProjectsSwiper/>
        </SectionPageLight>
    );
}