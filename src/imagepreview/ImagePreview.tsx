import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    .center {
        width: 55%;
        height: auto;
        position: relative;
    }
    img {
        width: 100%;
        margin-top: 6rem;
        visibility: hidden;
        display: block;
        &:first-child {
            position: absolute;
            left: 0;
            top: 0;
            visibility: visible;
            &:hover {
                box-shadow: 0 0 10px 0 yellow;
                cursor: pointer;
            }
        }
    }
`;

let setCalcX: Dispatch<SetStateAction<number>> = null;
let setCalcY: Dispatch<SetStateAction<number>> = null;

export const ImagePreview: FC = () => {

    return (
        <Container>
            <div className="center">
                <img src="https://www.scriptkit.com/_next/image?url=%2Fscriptkit%402x.png&w=640&q=100" alt="" />
                <img src="https://www.scriptkit.com/_next/image?url=%2Fscriptkit%402x.png&w=640&q=100" alt="" />
            </div>
        </Container>
    );
};