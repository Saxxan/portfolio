import React from 'react';
import styled from 'styled-components';
import Line from './components/Line';
import SocialMediaList from './components/MediaList/SocialMediaList';

const SocialMediaAside = styled.aside`
    width: 20%;
    height: 100%;
    padding: 10px 10px 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    @media (min-width: 900px) {
        padding: 20px 20px 0 20px;
    }
`

export default function SocialAside() {
  return (
      <SocialMediaAside>
          <SocialMediaList/>
          <Line/>
      </SocialMediaAside>
  )
}
