import React, { useContext } from 'react';
import styled from 'styled-components';
import SwiperSlideContext from '../ProjectsSwiper/ProjectsSwiper';

const CardSubtitle = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: var(--font-grey);
    width: 170px;
    padding: 5px;
    @media (min-width: 900px){
        font-size: 20px;
        width: 200px;
    }
`

export default function ProjectCardSubtitle() {
  let project = useContext(SwiperSlideContext);

  return (
    <CardSubtitle>{project.subtitle}</CardSubtitle>
  )
}
