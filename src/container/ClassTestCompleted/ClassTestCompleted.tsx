import DimAmblem from '@assets/image/dim_amblem.png'
import Button from '@components/Button/Button'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import { ROUTER_PATH } from 'App'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Paragraph = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    padding-bottom: 40px;
`
const Amblem = styled.img`
    width: 182px;
    margin-inline: auto;
    margin-bottom: 50px;
`
const ClassTestCompleted = () => {
    const navigate = useNavigate()
    return (
        <>
            <PaperMainHeader.Block>
                <PaperMainHeader.Title>반배정 테스트 완료</PaperMainHeader.Title>
            </PaperMainHeader.Block>
            <Paragraph>
                모든 테스트가 완료되었어요
                <br /> 반 배정 결과는 일주일 전에 공개돼요
                <br /> 결과가 나오면 제일 먼저 알려드릴게요.
            </Paragraph>
            <Amblem
                src={DimAmblem}
                alt=''
            />
            <Button onClick={() => navigate(ROUTER_PATH.홈)}>홈으로 이동</Button>
        </>
    )
}

export default ClassTestCompleted
