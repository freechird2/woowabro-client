import classA from '@assets/image/class_symbol_1.png'
import classB from '@assets/image/class_symbol_2.png'
import classC from '@assets/image/class_symbol_3.png'
import classD from '@assets/image/class_symbol_4.png'
import Parchment from '@components/Parchment/Parchment'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import { classInfoType } from '@container/ClassTestResult/ClassTestResult'
import { S } from '@container/ClassTestResult/ClassTestResult.styled'
import { useAuth } from 'AuthProvider'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Text = styled.p<{ $color?: string }>`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
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
        padding-bottom: 10px;
        &:after {
            content: '님의 좌석은';
        }
    }
    &.table {
        padding-bottom: 10px;
        strong {
            color: ${(p) => p.$color ?? p.theme.colors.default};
        }
    }
    &.seat {
        padding-bottom: 30px;
        strong {
            color: ${(p) => p.$color ?? p.theme.colors.default};
        }
        &:after {
            content: ' 입니다.';
        }
    }
`

const CheckSeat = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    let classInfo: classInfoType = {
        title: '',
        src: '',
        color: '',
        text: '',
    }

    const Convert = () => {
        if (auth.user?.className === '봉다리') {
            classInfo = {
                title: 'BONGDARI',
                src: classA,
                color: '#003C93',
                text: '블루',
            }
        }

        if (auth.user?.className === '장바구니') {
            classInfo = {
                title: 'JANGBAGUNI',
                src: classB,
                color: '#69197C',
                text: '퍼플',
            }
        }

        if (auth.user?.className === '배달이') {
            classInfo = {
                title: 'BAEDALEE',
                src: classC,
                color: '#B21900',
                text: '레드',
            }
        }

        if (auth.user?.className === '오도바이') {
            classInfo = {
                title: 'ODOBYE',
                src: classD,
                color: '#004828',
                text: '그린',
            }
        }

        return classInfo
    }

    return (
        <Parchment>
            <PaperMainHeader.Block>
                <PaperMainHeader.Title>내 좌석 확인</PaperMainHeader.Title>
            </PaperMainHeader.Block>
            <S.Symbol
                src={Convert().src}
                alt=''
            />

            <Paragraph className='userName'>
                <strong className='font__hanna'>{auth.user?.name}</strong>
            </Paragraph>
            <Paragraph
                className='table'
                $color={Convert().color}>
                <strong className='font__hanna'>{`${auth.user?.seat?.split('-')[0]}번 테이블`}</strong>
            </Paragraph>
            <Paragraph
                className='seat'
                $color={Convert().color}>
                <strong className='font__hanna'>{`${auth.user?.seat?.split('-')[1]}번`}</strong>
            </Paragraph>
            <Text $color={Convert().color}>
                연회장 입구에서 테이블 위치를
                <br />
                확인해주세요.
            </Text>
        </Parchment>
    )
}

export default CheckSeat
