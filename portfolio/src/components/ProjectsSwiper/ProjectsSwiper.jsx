import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import DevProjects from '../json/devprojects.json';
import DevProjectCard from "../../pages/DevelopProjects/components/DevProjectCard";

const SwiperForProjects = styled(Swiper)`
    width: 85%;
    height: 350px;
    margin: 35px 0;
    transform: translateX(35px);
    @media (min-width: 900px) {
        height: 450px;
        transform: translateX(200px);
    }
`

export default function ProjectsSwiper (props) {

    function printProjects() {
        if(props.category === "develop"){
            return DevProjects.map(p => 
            <SwiperSlide>
                <DevProjectCard title={p.title} subtitle={p.subtitle}/>
            </SwiperSlide>);
        } else {
            console.log('error');
            // return DevProjects.map((p) => 
            // <SwiperSlide>
            //     <DevProjectCard title={p.title} subtitle={p.subtitle}/>
            // </SwiperSlide>);
        }
    }
   

    return (
        <SwiperForProjects>
            {printProjects()}
        </SwiperForProjects>
    )
}