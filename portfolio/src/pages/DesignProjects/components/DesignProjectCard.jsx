import React from 'react';
import styled from 'styled-components';
import ProjectCardSubtitle from '../../../components/cardSubtitle/ProjectCardSubtitle';
import ProjectCardTitle from '../../../components/cardTitle/ProjectCardTitle';
import ProjectThumbnail from './ProjectThumbnail';

const DesignProjectCardWrapper = styled.article`
    width: 280px;
    height: 380px;
    border: 1px solid var(--primary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    & h3, & p {
      color: transparent;
    }
    &:hover div {
      filter: grayscale(50%) blur(2px);
    }
    &:hover h3, &:hover p {
      background: var(--primary);
      color: var(--font-white);
    }
    @media (min-width: 900px){
        width: 280px;
        height: 420px;
    }
`

export default function DesignProjectCard(props) {
  return (
    <DesignProjectCardWrapper thumbnail={props.thumbnail}>
        <ProjectThumbnail thumbnail={props.thumbnail}/>
        <ProjectCardTitle title={props.title}/>
        <ProjectCardSubtitle subtitle={props.subtitle}/>
    </DesignProjectCardWrapper>
  )
}
