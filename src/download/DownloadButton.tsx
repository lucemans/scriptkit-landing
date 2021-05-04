import React, { FC } from 'react';
import styled from 'styled-components';
import { gradient } from '../vars';

const StyledButton = styled.div`
    background: ${gradient};
    color: black;
    border-radius: 0.8rem;
    padding: 2rem 4rem;
    width: fit-content;
    font-weight: bolder;
    margin-top: 6rem;
`;

const Inner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Version = styled.div`
    margin-top: 2rem;
    font-size: 1.4rem;
`;

export const DownloadButton: FC = () => (
    <Inner>
        <StyledButton>
            Download Kit.app beta for Mac
        </StyledButton>
        <Version>Kit-1.3.0-beta.11.dmg</Version>
    </Inner>
);