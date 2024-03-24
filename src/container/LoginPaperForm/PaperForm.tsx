import API from '@api/index'
import Button from '@components/Button/Button'
import { S } from '@container/LoginPaperForm/PaperForm.styled'
import useTMutation from '@hooks/useTMutation'
import { GenericResponse } from '@model/Common'
import { LoginRequestModel, LoginResponseModel } from '@model/Login'
import { phoneAutoHyphen } from '@shared/function'
import { ROUTER_PATH } from 'App'
import { useAuth } from 'AuthProvider'
import { AxiosError } from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'
import { setStorage } from 'util'

const PaperForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { setIsLogin } = useAuth()
    const [cookies, setCookie] = useCookies(['access', 'class_check'])
    const [user, setUser] = useState<LoginResponseModel>()
    const [loginData, setLoginData] = useState<LoginRequestModel>({
        name: '',
        phone: '',
    })

    const { mutate: tryLogin } = useTMutation({
        mutationFn: (data: LoginRequestModel) => API.auth.login(data),
        onSuccess: (res: GenericResponse) => {
            const data = res.data as LoginResponseModel

            setUser(data)

            setCookie('access', data.access, { path: '/' })
            setStorage('refresh', data.refresh)
        },
        onError: (err: AxiosError) => {
            const error = err.response?.data as GenericResponse
            alert(error.message)
        },
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target

        setLoginData((prev) => ({
            ...prev,
            [name]: name === 'phone' ? phoneAutoHyphen(value) : value,
        }))
    }

    useEffect(() => {
        if (cookies.access) {
            setIsLogin(true)

            if (location.state) navigate(location.state.redirect)
            else {
                if (user?.projectStatus === '사전예약중') {
                    navigate(user?.testAt ? ROUTER_PATH.홈 : ROUTER_PATH.반배정_테스트)
                } else if (user?.projectStatus === '배정완료') {
                    navigate(cookies.class_check ? ROUTER_PATH.홈 : ROUTER_PATH.반배정_발표)
                } else if (user?.projectStatus === '행사중') {
                    navigate(ROUTER_PATH.셀프_체크인)
                }
            }
        }
    }, [cookies])

    useEffect(() => {
        if (cookies.access) navigate(ROUTER_PATH.홈)
    }, [])

    return (
        <>
            <S.InputBlock>
                <label
                    className='font__hanna'
                    htmlFor=''>
                    이름
                </label>
                <S.Input
                    type='text'
                    placeholder='본인 이름'
                    inputMode='search'
                    name={'name'}
                    value={loginData.name}
                    onChange={onChange}
                    maxLength={6}
                />
            </S.InputBlock>
            <S.InputBlock>
                <label
                    className='font__hanna'
                    htmlFor=''>
                    연락처
                </label>
                <S.Input
                    type='text'
                    placeholder='-없이 숫자만 입력'
                    inputMode='tel'
                    name={'phone'}
                    value={loginData.phone}
                    onChange={onChange}
                    maxLength={13}
                />
            </S.InputBlock>
            <Button onClick={() => tryLogin(loginData)}>로그인</Button>
        </>
    )
}

export default PaperForm
