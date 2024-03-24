import styled from 'styled-components'

const InputBlock = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    height: 50px;
    margin-bottom: 40px;

    &:not(:last-of-type) {
        margin-bottom: 12px;
    }
    label {
        position: relative;
        display: flex;
        align-items: center;
        width: 70px;
        font-size: 1.4rem;
        bottom: -0.5ex;
    }
`
const Input = styled.input`
    font-size: 1.6rem;
    width: 100%;

    &::placeholder {
        color: ${(p) => p.theme.colors.placeholder};
    }
`
export const S = {
    InputBlock,
    Input,
}
