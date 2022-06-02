import React from 'react';
import styled from 'styled-components';
import ProjectCardSubtitle from '../../../components/cardSubtitle/ProjectCardSubtitle';
import ProjectCardTitle from '../../../components/cardTitle/ProjectCardTitle';

const DesignProjectCardWrapper = styled.article`
    width: 220px;
    height: 360px;
    margin: 10px 0;
    padding: 20px;
    border: 1px solid var(--primary);
    border-radius: 10px;
    @media (min-width: 900px){
        width: 320px;
        height: 460px;
    }
`

export default function DesignProjectCard(props) {
  return (
    <DesignProjectCardWrapper>
        <img src={props.image} alt="image"/>
        <ProjectCardTitle title={props.title}/>
        <ProjectCardSubtitle subtitle={props.subtitle}/>
    </DesignProjectCardWrapper>
  )
}
