import styled from 'styled-components'

const FaqItemContent = styled.div<{ $display: boolean }>`
    display: grid;
    min-height: 0;
    grid-template-rows: ${(p) => (p.$display ? '1fr' : '0fr')};
    min-height: ${(p) => (p.$display ? 'auto' : '0')};
    overflow: hidden;
    transition: grid-template-rows 0.2s;
    font-size: 1.5rem;
    font-weight: 500;
    background-color: #dbc990;
    overflow: hidden;
    > div {
        min-height: 0;
        > div {
            font-size: 1.5rem;
            font-weight: 500;
            border-bottom: 1px solid #c6b27e;
            padding: 16px 18px 24px;
            word-break: keep-all;
            white-space: pre-wrap;
        }
    }
`

const FaqItemTitle = styled.div`
    padding-block: 16px;
    font-size: 1.6rem;
    font-weight: 500;
    border-bottom: 1px solid #c6b27e;
    word-break: keep-all;

    &::before {
        content: 'Q. ';
        font-size: 2rem;
        font-family: 'Hanna';
        word-spacing: -1px;
        letter-spacing: -0.3px;
    }

    span {
        font-size: inherit;
        font-weight: 700;
    }
`

const FaqItemContainer = styled.div``

export const S = {
    FaqItemContainer,
    FaqItemTitle,
    FaqItemContent,
}
