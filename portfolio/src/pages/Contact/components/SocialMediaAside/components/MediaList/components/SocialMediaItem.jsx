import React from 'react';
import styled from 'styled-components';

const MediaListItem = styled.li`
    display:flex;
    align-items: center;
    gap: 10px;
    padding: 0;
    margin: 0;
`

export default function SocialMediaItem(props) {
    return (
        <MediaListItem>
            {props.children}
            <span>{props.name}</span>
        </MediaListItem>
    )
}
