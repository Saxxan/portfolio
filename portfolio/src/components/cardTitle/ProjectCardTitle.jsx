import React, { useContext } from 'react';
import styled from 'styled-components';
import SwiperSlideContext from '../ProjectsSwiper/ProjectsSwiper';

const CardTitle = styled.h3`
    font-size: 17px;
    font-weight: 500;
    padding: 10px;
    align-self: flex-start;
    @media (min-width: 900px) {
        font-size: 25px;
        margin-left: 30px;
    }
`

export default function ProjectCardTitle() {
  let project = useContext(SwiperSlideContext);
  return (
    <CardTitle>{project.title}</CardTitle>
  )
}
