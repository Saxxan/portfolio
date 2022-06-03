import React from 'react';
import styled from 'styled-components';
import ProjectCardSubtitle from '../../../components/cardSubtitle/ProjectCardSubtitle';
import ProjectCardTitle from '../../../components/cardTitle/ProjectCardTitle';
import ProjectThumbnail from './ProjectThumbnail';

const DesignProjectCardWrapper = styled.article`
    width: 280px;
    height: 380px;
    padding: 0 20px;
    border: 1px solid var(--primary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-context: center;
    align-items: center;
    @media (min-width: 900px){
        width: 280px;
        height: 420px;
    }
`

export default function DesignProjectCard(props) {
  return (
    <DesignProjectCardWrapper>
        <ProjectThumbnail image={props.image}/>
        <ProjectCardTitle title={props.title}/>
        <ProjectCardSubtitle subtitle={props.subtitle}/>
    </DesignProjectCardWrapper>
  )
}
