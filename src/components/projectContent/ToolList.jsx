import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Tools = styled.ul`
  max-width: 80vw;
  margin: auto auto 50px auto;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 900px) {
    flex-direction: row;
    width: 70vw;
  }
`

const Tool = styled.li`
  display: flex;
  padding-left: 20px;
`

const ToolTitle = styled.h3`
  width: 80vw;
  margin: 10px auto;
  padding: 10px 0;
  @media (min-width: 900px) {
    width: 70vw;
  }
`

export default function ToolList(props) {
    
    let [herramientas, setHerramientas] = useState([]);

    useEffect(() => {
      setHerramientas(props.tools);
    }, [props.tools, herramientas]);
    

  return (
    <>
      <ToolTitle>Tools</ToolTitle>
      <Tools>
          {herramientas && herramientas.map((t) => <Tool>{t}</Tool>)}
      </Tools>
    </>
  )
}
