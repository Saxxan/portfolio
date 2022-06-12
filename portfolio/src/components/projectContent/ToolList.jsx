import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Tools = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 90vw;
    margin: 0 auto;
`

export default function ToolList(props) {
    
    let [herramientas, setHerramientas] = useState([]);

    useEffect(() => {
      setHerramientas(props.tools);
    }, [props.tools, herramientas]);
    

  return (
    <Tools>
        {herramientas && herramientas.map((t) => <li>{t}</li>)}
    </Tools>
  )
}
