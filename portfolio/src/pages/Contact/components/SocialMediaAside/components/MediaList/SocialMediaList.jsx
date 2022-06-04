import React from 'react';
import styled from 'styled-components';
import { CodepenIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './components/rrssIcons';

const MediaList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    margin: 0 0 5px 0;
`

const MediaListItem = styled.li`
    display:flex;
    align-items: center;
    gap: 5px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &:hover {
        &>span{
            transform: translateX(0);
            opacity: 1;
        }
    }
    @media (min-width: 900px) {
        gap: 10px;
    }
`

const ItemLabel = styled.span`
    font-size: 15px;
    opacity: 0;
    transform: translateX(-40px);
    transition: all .5s ease-out;
    @media(min-width: 900px) {
        font-size: 18px;
    }
`

export default function SocialMediaList() {
  return (
    <MediaList>
        <MediaListItem>
            <GithubIcon/>
            <ItemLabel>Github</ItemLabel>
        </MediaListItem>
        <MediaListItem>
            <InstagramIcon/>
            <ItemLabel>Instagram</ItemLabel>
        </MediaListItem>
        <MediaListItem>
            <TwitterIcon/>
            <ItemLabel>Twitter</ItemLabel>
        </MediaListItem>
        <MediaListItem>
            <LinkedinIcon/>
            <ItemLabel>Linkedin</ItemLabel>
        </MediaListItem>
        <MediaListItem>
            <CodepenIcon/>
            <ItemLabel>Codepen</ItemLabel>
        </MediaListItem>
    </MediaList>
  )
}
