import styled from 'styled-components'

const Symbol = styled.img`
    width: 190px;
    margin-inline: auto;
    aspect-ratio: 1/1;
    margin-top: 10px;
    margin-bottom: 30px;
`

const Paragraph = styled.p<{ $color?: string }>`
    text-align: center;
    padding-bottom: 30px;
    strong {
        font-size: 3rem;
    }
    font-size: 1.6rem;
    font-weight: 700;
    &:after {
        display: inline-block;
        margin-left: 8px;
        transform: translateY(-3px);
    }
    &.userName {
        padding-bottom: 4px;
        &:after {
            content: '님은';
        }
    }
    &.className {
        strong {
            color: ${(p) => p.$color ?? p.theme.colors.default};
        }
        &:after {
            content: '반 입니다!';
        }
    }
`

const Text = styled.p<{ $color?: string }>`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    padding-bottom: 48px;
    strong {
        font-size: inherit;
        font-weight: 700;
        color: ${(p) => p.$color ?? p.theme.colors.default};
    }
    span {
        font-size: 1.4rem;
        display: inline-block;
        padding-top: 8px;
    }
`
export const S = {
    Symbol,
    Paragraph,
    Text,
}
