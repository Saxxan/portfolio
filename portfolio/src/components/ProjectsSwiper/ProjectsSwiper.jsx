import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperForProjects = styled(Swiper)`
    width: 85%;
    height: 350px;
    margin: 30px 0;
    transform: translateX(35px);
    @media (min-width: 900px) {
        transform: translateX(80px);
    }
`

export default function ProjectsSwiper () {
    return (
        <SwiperForProjects>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
        </SwiperForProjects>
    )
}