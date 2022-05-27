import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import DevProjects from '../json/devprojects.json';
import DevProjectCard from "../../pages/DevelopProjects/components/DevProjectCard";
import DesignProjects from '../json/designprojects.json';

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

// const SwiperSlideContext = createContext();

export default function ProjectsSwiper(props) {

    // let projectsList = [];

    function printProjects() {
        if (props.category === "develop") {
            return DevProjects.map(p =>
                // <SwiperSlideContext.Provider value={p}>
                    <SwiperSlide>
                        <DevProjectCard />
                    </SwiperSlide>)
                // </SwiperSlideContext.Provider>);
        } else {
            alert('error');
            // return DevProjects.map((p) => 
            // <SwiperSlide>
            //     <DevProjectCard title={p.title} subtitle={p.subtitle}/>
            // </SwiperSlide>);
        }
    }

    // const [shouldPrint, setPrint] = useState(false);

    // const getDevProjects = () => {
    //     projectsList = DevProjects;
    //     console.log(projectsList);
    //     setPrint(true);
    // }

    // const getDesProjects = () => {
    //     projectsList = DesignProjects;
    // }

    // useEffect(() => {
    //   if(props.category === 'develop') {
    //       getDevProjects();
    //   } else if (props.category === 'design') {
    //       getDesProjects();
    //   } else {
    //       alert('No hay categoría para el swiper');
    //   }
    // });
    

    return (
        <SwiperForProjects>
            {printProjects()}
            {/* {shouldPrint && projectsList.map(p => <h1>{p.title}</h1>)} */}
        </SwiperForProjects>
    )
}