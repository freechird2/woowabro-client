import classA from '@assets/image/class_symbol_1.png'
import classB from '@assets/image/class_symbol_2.png'
import classC from '@assets/image/class_symbol_3.png'
import classD from '@assets/image/class_symbol_4.png'
import Button from '@components/Button/Button'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import { S } from '@container/ClassTestResult/ClassTestResult.styled'
import { ROUTER_PATH } from 'App'
import { useAuth } from 'AuthProvider'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export type classInfoType = {
    title: string
    src: string
    color: string
    text: string
}
const ClassTestResult = () => {
    const auth = useAuth()
    const [coockie, setCookie] = useCookies(['class_check'])

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

    useEffect(() => {
        setCookie('class_check', 'check', { path: '/' })
    }, [])

    return (
        <>
            <PaperMainHeader.Block>
                <PaperMainHeader.Title>반배정 결과 발표</PaperMainHeader.Title>
            </PaperMainHeader.Block>
            <S.Symbol
                src={Convert().src}
                alt=''
            />

            <S.Paragraph className='userName'>
                <strong className='font__hanna'>{auth.user?.name}</strong>
            </S.Paragraph>
            <S.Paragraph
                className='className'
                $color={Convert().color}>
                <strong className='font__hanna'>{Convert().title}</strong>
            </S.Paragraph>
            <S.Text $color={Convert().color}>
                공식 컬러는 <strong>{Convert().text}</strong>입니다. <br />
                공식 컬러에 맞는 드레스코드나 <br /> 아이템을 준비해주세요.
                <br />
                <span>(필수는 아니지만, 베스트드레서 시상식이 있어요!)</span>
            </S.Text>

            <Button onClick={() => navigate(`${ROUTER_PATH.반배정_테스트}/desc`)}>반에 대해 알아보기</Button>
        </>
    )
}

export default ClassTestResult
