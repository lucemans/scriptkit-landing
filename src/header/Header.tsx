import React, { FC } from 'react';
import styled from 'styled-components';
import { gradient } from '../vars';

const Inner = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Logo = styled.div`
    font-weight: bolder;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.div`
    height: 4rem;
    width: 4rem;
    background: ${() => gradient};
    margin-right: 1rem;
    border-radius: 1rem;
`;

const Scripts = styled.div``;

export const Header: FC = () => (
    <Inner>
        <Logo>
            <Icon>

            </Icon>
                Script Kit
            </Logo>
        <Scripts>
            Browse Scripts
        </Scripts>
    </Inner>
);