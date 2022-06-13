import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const ImageDes = styled(ReactPlayer)`
  display: block;
  margin: 10px auto;
`

const ImageDev = styled.img`
  width: 300px;
  height: 300px;
  padding: 50px;
  display: block;
  margin: 10px auto;
  @media (min-width: 900px) {
    width: 350px;
    height: 350px;
    padding: 75px;
    margin: 10px; 
    float: left;
  }
  @media (min-width: 1200px) {
    width: 400px;
    height: 400px;
    padding: 100px;
    margin: 10px 0 10px 175px;
  }
`

export default function ImageProject(props) {
  return props.class === 'des' ? <ImageDes width="90vw" height="50vw" controls={true} url={props.video}/>  : <ImageDev src={props.image}/>
}
