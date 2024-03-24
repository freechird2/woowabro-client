import API from '@api/index'
import Button from '@components/Button/Button'
import ChoiceItem from '@components/ChoiceItem/ChoiceItem'
import { S } from '@container/ClassTestPaper/ClassTestPaper.styled'
import useTMutation from '@hooks/useTMutation'
import useGetQuery from '@hooks/useTQuery'
import { GenericResponse } from '@model/Common'
import { ChoiceItemModel, TestReponseModel } from '@model/Test'
import { ROUTER_PATH } from 'App'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CONTEXT_DATA } from './context'

const ClassTestPaper = () => {
    const { id } = useParams()
    const [active, setActive] = useState<number>(0)
    const navigate = useNavigate()

    const [result, setResult] = useState<number[]>([])
    const { data: testData } = useGetQuery({
        queryKey: ['@getTestList'],
        queryFn: () => API.classTest.getTestList(),
        select: (res: GenericResponse) => {
            return res.data as TestReponseModel[]
        },
    })

    const { mutate: testResult } = useTMutation({
        mutationFn: (testResult: number[]) => API.classTest.saveTestResult(testResult),
        onSuccess: (res: GenericResponse) => {
            navigate(`${ROUTER_PATH.반배정_테스트}/completed`)
        },
        onError: (err: AxiosError) => {
            alert(err.message)
        },
    })

    const onClickActive = (index: number) => {
        setActive(index)
    }

    const onClickNextText = () => {
        if (!active) return

        if (Number(id) <= 9) {
            setResult((prev) => [...prev, active])
        }
        if (Number(id) < 9) {
            navigate(`${ROUTER_PATH.반배정_테스트}/paper/${(Number(id) + 1).toString()}`)
        } else {
            // 마지막 문제일때 완료 페이지 이동
            testResult([...result, active])
        }
    }

    useEffect(() => {
        //다음페이지 초기화
        setActive(0)
    }, [id])

    return (
        <S.Container>
            <S.Progress step={Number(id)} />
            <S.Question>
                <h1 className='font__hanna'>Q{id}.</h1>
                <p className='font__hanna'>{CONTEXT_DATA[Number(id) - 1]}</p>
            </S.Question>
            <S.ChoiceItemWrapper>
                {testData &&
                    testData[Number(id) - 1].answer.map((item: ChoiceItemModel, index: number) => {
                        return (
                            <ChoiceItem
                                key={item.id}
                                question={item.context}
                                active={active === index + 1}
                                onClick={() => onClickActive(index + 1)}></ChoiceItem>
                        )
                    })}
            </S.ChoiceItemWrapper>
            <Button onClick={onClickNextText}>{id === '9' ? '끗' : '다음'}</Button>
        </S.Container>
    )
}

export default ClassTestPaper
