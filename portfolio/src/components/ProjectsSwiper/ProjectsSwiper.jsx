import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import DevProjects from '../json/devprojects.json';
import DesignProjects from '../json/designprojects.json';
import { useState } from "react";
import DevProjectCard from "../../pages/DevelopProjects/components/DevProjectCard";

const SwiperForProjects = styled(Swiper)`
    width: 85%;
    height: 350px;
    margin: 30px 0;
    transform: translateX(35px);
    @media (min-width: 900px) {
        transform: translateX(80px);
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