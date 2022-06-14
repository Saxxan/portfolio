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

const MediaListItem = styled.a`
    display:flex;
    align-items: center;
    color: var(--font-black);
    text-decoration: none;
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
        <MediaListItem href="https://github.com/Saxxan">
            <GithubIcon/>
            <ItemLabel>Github</ItemLabel>
        </MediaListItem>
        <MediaListItem href="https://www.instagram.com/salvapibez/">
            <InstagramIcon/>
            <ItemLabel>Instagram</ItemLabel>
        </MediaListItem>
        <MediaListItem href="https://twitter.com/salvaPIbez">
            <TwitterIcon/>
            <ItemLabel>Twitter</ItemLabel>
        </MediaListItem>
        <MediaListItem href="https://www.linkedin.com/in/salvador-puche-ib%C3%A1%C3%B1ez/">
            <LinkedinIcon/>
            <ItemLabel>Linkedin</ItemLabel>
        </MediaListItem>
        <MediaListItem href="https://codepen.io/saxxan">
            <CodepenIcon/>
            <ItemLabel>Codepen</ItemLabel>
        </MediaListItem>
    </MediaList>
  )
}
