import styled from 'styled-components'

export const Container = styled.article`
    display: flex;
    align-items: center;
`;
export const Title = styled.h2`
    font-size: 2.5rem;
    color: ${props => props.theme.colors.commons.whiteLight};
    white-space: nowrap;
    margin-right: 1rem;
`;
export const Cards = styled.img`
width: 15rem;
`;
