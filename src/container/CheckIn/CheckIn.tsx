import API from '@api/index'
import Button from '@components/Button/Button'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import { PS } from '@container/CheckIn/CheckIn.styled'
import useTMutation from '@hooks/useTMutation'
import { useQueryClient } from '@tanstack/react-query'
import { ROUTER_PATH } from 'App'
import { useAuth } from 'AuthProvider'
import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckIn = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: selfCheckIn } = useTMutation({
        mutationFn: () => API.user.selfCheckIn(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['@PING'] })
            navigate(ROUTER_PATH.셀프_체크인_완료)
        },
        onError: (err: AxiosError) => {
            alert(err.message)
        },
    })

    const classColor = (className: string | undefined) => {
        if (!className) return ''

        switch (className) {
            case '봉다리':
                return 'BONGDARI'
                break
            case '장바구니':
                return 'JANGBAGUNI'
                break
            case '배달이':
                return 'BAEDALEE'
                break
            case '오도바이':
                return 'ODOBYE'
                break
            default:
                return ''
                break
        }
    }

    useEffect(() => {
        if (user?.checkinAt) navigate(ROUTER_PATH.셀프_체크인_완료)
    }, [])

    return (
        <>
            <PaperMainHeader.Block>
                <PaperMainHeader.Title>셀프 체크인</PaperMainHeader.Title>
            </PaperMainHeader.Block>
            <PS.DescBlock>
                <p>
                    셀프 체크인을 눌러, <br />
                    현장 스태프에게 완료 화면을 보여주세요.
                </p>
            </PS.DescBlock>
            <PS.CheckinInfo>
                <p className='name'>{user?.name}</p>
                <p className={`class ${classColor(user?.className)}`}>{classColor(user?.className)}</p>
                <p className='phone'>{user?.phone}</p>
            </PS.CheckinInfo>
            <Button onClick={selfCheckIn}>셀프 체크인</Button>
        </>
    )
}

export default CheckIn
