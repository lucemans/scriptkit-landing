import React, { FC } from 'react';
import styled from 'styled-components';
import { gradient } from '../vars';

const Inner = styled.div`
    width: 100%;
    display: flex;
    justify-content: stretch;
    margin-top: 12rem;

    ul {
        li {
            list-style: circle;
            list-style-position: inside;
        }
    }
`;

const Left = styled.div`
    flex: 1;
    margin-right: 1rem;
`;

const Right = styled.div`
    flex: 1;
    margin-left: 1rem;
`;

const H3 = styled.h3`
    font-size: 3rem;
    margin-bottom: 2rem;
`;

const P = styled.p`
    font-size: 1.6rem;
    margin-bottom: 2rem;
    font-weight: light;
    line-height: 2rem;
`;

export const Split: FC = () => (
    <Inner>
        <Left>
            <H3>What is Script Kit?</H3>
            <P>How often do you avoid scripting something because it takes too much effort?</P>
            <P>Script Kit makes it easy to create and run scripts that solve your daily problems. Create a new script from the prompt then your script opens in the editor of your choice. Write a few lines of JavaScript. Then run the script from the prompt.</P>
            <P>Simply put, Script Kit helps you script away the friction of your day.</P>
            <H3>Key Features</H3>
            <ul>
                <li>Community Examples</li>
                <li>Quick orientation guide</li>
                <li>Watch livestreams building Script Kit</li>
                <li>Announcements</li>
                <li>Ask a question</li>
            </ul>
        </Left>
        <Right>
            <H3>Learn more</H3>
            <P>Script Kit includes a built-in tutorial and myriad examples are available on our discussions pages:</P>
            <ul>
                <li>Community Examples</li>
                <li>Quick orientation guide</li>
                <li>Watch livestreams building Script Kit</li>
                <li>Announcements</li>
                <li>Ask a question</li>
            </ul>
        </Right>
    </Inner>
);