import React from 'react';
import styled from 'styled-components';
import { CodepenIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './components/rrssIcons';

const MediaList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid red;
    padding: 0;
    margin: 0 0 5px 0;
`

const MediaListItem = styled.li`
    display:flex;
    align-items: center;
    gap: 10px;
    padding: 0;
    margin: 0;
`

export default function SocialMediaList() {
  return (
    <MediaList>
        <MediaListItem>
            <GithubIcon/>
            <span>Github</span>
        </MediaListItem>
        <MediaListItem>
            <InstagramIcon/>
            <span>Instagram</span>
        </MediaListItem>
        <MediaListItem>
            <TwitterIcon/>
            <span>Twitter</span>
        </MediaListItem>
        <MediaListItem>
            <LinkedinIcon/>
            <span>Linkedin</span>
        </MediaListItem>
        <MediaListItem>
            <CodepenIcon/>
            <span>Codepen</span>
        </MediaListItem>
    </MediaList>
  )
}
