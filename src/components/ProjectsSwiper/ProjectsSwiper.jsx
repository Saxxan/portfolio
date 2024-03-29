import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {Scrollbar} from 'swiper';
import 'swiper/css';
import './projectsSwiperStyles.css';
import { Link } from "react-router-dom";
import DevProjects from '../json/devprojects.json';
import DevProjectCard from "../../pages/DevelopProjects/components/DevProjectCard";
import DesignProjects from '../json/designprojects.json';
import DesignProjectCard from "../../pages/DesignProjects/components/DesignProjectCard";

const SwiperForProjects = styled(Swiper)`
    width: 85%;
    height: 365px;
    margin: 35px 0;
    padding-right: 20px;
    transform: translateX(35px);
    overflow: visible;
    @media (min-width: 900px) {
        height: 450px;
        transform: translateX(175px);
    }
`

const LinkToProjects = styled(Link)`
    text-decoration: none;
`

export default function ProjectsSwiper(props) {

    function printProjects() {
        if (props.category === "develop") {
            return DevProjects.map(p =>
                <SwiperSlide style={{width: 'fit-content'}}>
                    <LinkToProjects style={{color:"white"}} to={`/detailed-develop-project/${p.id}`}>
                        <DevProjectCard title={p.title} subtitle={p.subtitle}/>
                    </LinkToProjects>
                </SwiperSlide>)
        } else {
            return DesignProjects.map(p =>
                <SwiperSlide style={{width: 'fit-content'}}>
                    <LinkToProjects style={{color:"black"}} to={`/detailed-design-project/${p.id}`}>
                        <DesignProjectCard title={p.title} subtitle={p.subtitle} thumbnail={p.thumbnail}/>
                    </LinkToProjects>
                </SwiperSlide>)
        }
    }

    return (
        <SwiperForProjects slidesPerView={'auto'} spaceBetween={20} modules={[Scrollbar]} scrollbar={{draggable:true}}>
            {printProjects()}
        </SwiperForProjects>
    )
}