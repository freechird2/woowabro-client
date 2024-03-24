import styled from 'styled-components'

const Map = styled.img`
    aspect-ratio: 333/260;
    display: block;
    margin: 0 -16px;

    width: calc(100% + 32px);
    max-block-size: initial;
    max-inline-size: initial;
`

const AreaInfoBlock = styled.div.attrs(() => ({
    className: 'AreaInfoBlock',
}))`
    display: flex;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-of-type) {
        border-bottom: 1px solid ${(p) => p.theme.colors.gold_text};
    }
    img {
        width: 50px;
    }

    ul {
        padding-block: 30px 40px;
        li {
            .title {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            h3 {
                font-size: 1.5rem;
                font-weight: 700;
            }
            &:not(:last-of-type) {
                margin-bottom: 20px;
            }
            .span_golden_text {
                font-size: 1.3rem;
                color: ${(p) => p.theme.colors.gold_text};
            }
            p {
                font-size: 1.5rem;
                padding-left: 28px;
                &.golden_text {
                    display: flex;
                    align-items: first baseline;
                    font-size: 1.3rem;
                    color: ${(p) => p.theme.colors.gold_text};
                    padding-top: 4px;
                    &:before {
                        content: '*';
                        display: block;
                        color: inherit;
                        width: 3px;
                        margin-right: 6px;

                        transform: translateY(2.5px);
                    }

                    &.noPrefix {
                        &:before {
                            display: none;
                        }
                    }
                    &.noPadding {
                        padding: 0;
                    }
                }
            }
        }
    }
`
const AreaInfoWrapper = styled.div`
    padding-bottom: 40px;
`

const SpecialProgram = styled.div`
    position: relative;
    border: 3px solid ${(p) => p.theme.colors.default};
    background-color: #08304d;
    text-align: center;
    padding: 46px 24px 28px;
    border-radius: 20px;
    img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 64px;
        aspect-ratio: 64/68;
    }
    span {
        font-size: 1.5rem;
        color: #fff;
    }

    h3 {
        color: ${(p) => p.theme.colors.gold_title};
        font-size: 2rem;
        padding-block: 6px 20px;
    }
    p {
        color: #fff;
        font-size: 1.5rem;
    }
`
export const PS = {
    Map,
    AreaInfoBlock,
    AreaInfoWrapper,
    SpecialProgram,
}
