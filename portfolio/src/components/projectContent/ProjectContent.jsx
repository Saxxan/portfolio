import React, { useEffect } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';

export default function ProjectContent(props) {

    let project = {};

    useEffect(() => {
        project = props.p;
    },[])

  return (
    <ProjectContent>
        {project.title && <SectionTitle title={project.title}/>}
    </ProjectContent>
  )
}
