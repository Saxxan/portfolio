import 'swiper/css';
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { SectionPageDark } from '../../components/sectionPage/SectionPage';
import ProjectsSwiper from '../../components/ProjectsSwiper/ProjectsSwiper';

export default function DevelopProjects() {
    return (
        <SectionPageDark>
            <SectionTitle title='Development projects'></SectionTitle>
            <ProjectsSwiper category="develop"/>
        </SectionPageDark>
    );
}