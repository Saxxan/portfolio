import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Tools = styled.ul`
  max-width: 90vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`

const Tool = styled.li`
  display: flex;
  padding: 5px;
`

export default function ToolList(props) {
    
    let [herramientas, setHerramientas] = useState([]);

    useEffect(() => {
      setHerramientas(props.tools);
    }, [props.tools, herramientas]);
    

  return (
    <>
      <h3 style={{width: "90vw", margin:"10px auto", padding:"10px"}}>Tools</h3>
      <Tools>
          {herramientas && herramientas.map((t) => <Tool>{t}</Tool>)}
      </Tools>
    </>
  )
}
