import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from './header/Header';
import { ImagePreview } from './imagepreview/ImagePreview';
import { Title } from './title/Title';
import { DownloadButton } from './download/DownloadButton';
import { Split } from './split/Split';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: scroll;
`;

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        color: white;
        font-family: Articulat,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        letter-spacing: 0;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :root {
        font-size: 10px;
    }
`;

const PageContainer = styled.div`
    width: 100%;
    max-width: 1024px;
`;

export const App: FC = () => {

    return (
        <Container>
            <GlobalStyles />
            <PageContainer>
                <Header />
                <ImagePreview />
                <Title />
                <DownloadButton />
                <Split />
            </PageContainer>
        </Container>
    );
};