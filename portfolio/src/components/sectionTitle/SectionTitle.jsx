import styled from "styled-components"

const PageSectionTitle = styled.h2`
    width: 90vw;
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 2rem;
    font-weight: 500;
`

export default function SectionTitle(props) {
    return <PageSectionTitle className="sectionTitle">{props.title}</PageSectionTitle>
}