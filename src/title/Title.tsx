import React, { FC } from 'react';
import styled from 'styled-components';
import { gradient } from '../vars';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 55%;
        margin-top: 6rem;
    }
`;

const Header = styled.h1`
    font-size: 6rem;
    padding-top: 4rem;
    display: inline-flex;
    align-items: flex-start;
    letter-spacing: -0.1rem;
`;

const Invert = styled.span`
    background: ${gradient};
    color: black;
    margin-right: 0.5rem;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
`;

const Tag = styled.div`
    background: hotpink;
    color: white;
    font-size: 1rem;
    letter-spacing: 0;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
`;

const SubHeader = styled.h2`
    font-weight: lighter;
    padding-top: 1rem;
`;

export const Title: FC = () => (
    <Container>
        <Header><Invert>Automation </Invert>  for Developers <Tag>beta</Tag> </Header>
        <SubHeader>Making scripts easy to run, write, and share</SubHeader>
    </Container>
);