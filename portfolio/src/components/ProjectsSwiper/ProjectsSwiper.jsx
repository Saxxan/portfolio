import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {Scrollbar} from 'swiper';
import 'swiper/css';
import './projectsSwiperStyles.css';
import DevProjects from '../json/devprojects.json';
import DevProjectCard from "../../pages/DevelopProjects/components/DevProjectCard";
import DesignProjects from '../json/designprojects.json';

// const SwiperSlideForProjects = styled(SwiperSlide)`
//     width: 300px;
//     height: 300px;
//     @media (min-width: 900px) {
//         width: 400px;
//         height: 400px;
//     }
// `

const SwiperForProjects = styled(Swiper)`
    width: 85%;
    height: 350px;
    margin: 35px 0;
    padding-right: 20px;
    transform: translateX(35px);
    @media (min-width: 900px) {
        height: 450px;
        transform: translateX(175px);
    }
`

export default function ProjectsSwiper(props) {

    function printProjects() {
        if (props.category === "develop") {
            return DevProjects.map(p =>
                    <SwiperSlide style={{width: 'fit-content'}}>
                        <DevProjectCard title={p.title} subtitle={p.subtitle}/>
                    </SwiperSlide>)
        } else {
            alert('error');
            // return DevProjects.map((p) => 
            // <SwiperSlide>
            //     <DevProjectCard title={p.title} subtitle={p.subtitle}/>
            // </SwiperSlide>);
        }
    }

    return (
        <SwiperForProjects slidesPerView={'auto'} spaceBetween={20} modules={[Scrollbar]} scrollbar={{draggable:true, dragSize:'auto'}}>
            {printProjects()}
        </SwiperForProjects>
    )
}