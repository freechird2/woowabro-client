import cover from '@assets/image/letter_cover.png'
import mainLogo from '@assets/image/mainLogo.png'
import styled from 'styled-components'
const MainLogo = styled.div`
    aspect-ratio: 212/98;
    background-size: 100%;
    width: 212px;
    margin-inline: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${mainLogo});
`

const P = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    color: rgba(40, 25, 18, 1);
    text-align: center;
    padding-top: 12px;
    padding-bottom: 24px;

    span {
        display: inline-block;
        padding-top: 10px;
        font-size: 1.4rem;
        color: rgba(40, 25, 18, 0.6);
        font-weight: 400;
    }
`
const Letter = styled.div`
    position: relative;
    width: 100%;
`

const PaperTexture = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
`

const Paper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: calc(100% - 16px);
    margin-inline: auto;
    background-color: #fff;
    padding: 30px;
    padding-bottom: min(62.5vw, 300px);
    margin-bottom: 20px;
    background-color: #ede4ce;
`
const Cover = styled.div`
    position: absolute;
    left: 0;
    bottom: -20px;
    aspect-ratio: 343/236;
    display: block;
    width: 100%;
    background-image: url(${cover});
    background-size: 108.5%;
    background-repeat: no-repeat;
    background-position: center;
`

const Container = styled.div`
    width: 100%;
    padding-top: 40px;
`

export const PS = {
    MainLogo,
    P,
    Letter,
    PaperTexture,
    Paper,
    Cover,
    Container,
}
