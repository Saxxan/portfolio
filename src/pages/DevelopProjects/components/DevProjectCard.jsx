import React from 'react';
import styled from 'styled-components';
import ProjectCardSubtitle from '../../../components/cardSubtitle/ProjectCardSubtitle';
import ProjectCardTitle from '../../../components/cardTitle/ProjectCardTitle';
import Arrow from './Arrow';

const CodeProjectCardWrapper = styled.article`
    width: 280px;
    height: 280px;
    margin: 10px 0;
    padding: 20px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h3, & p {
      background: none;
    }
    & p {
      margin: 0 auto 0 40px;
      width: 200px;
      color: var(--font-grey);
    }
    @media (min-width: 900px){
      width: 380px;
      height: 380px;
      & p {
        margin: 0 auto 0 50px;
        width: 250px;
      }
    }
`

export default function DevProjectCard(props) {
  return (
    <CodeProjectCardWrapper>
      <Arrow/>
      <ProjectCardTitle title={props.title}/>
      <ProjectCardSubtitle subtitle={props.subtitle}/>
    </CodeProjectCardWrapper>
  )
}
