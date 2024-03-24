import Parchment from '@components/Parchment/Parchment'
import { ROUTER_PATH } from 'App'
import { useAuth } from 'AuthProvider'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const CheckInRoot = () => {
    const navigate = useNavigate()
    const { user } = useAuth()

    useEffect(() => {
        if (user && user?.projectStatus !== '행사중') {
            alert('행사가 시작된 후 체크인이 가능합니다.')
            navigate(ROUTER_PATH.홈)
        }
    }, [user])

    if (user?.projectStatus !== '행사중') return <></>
    else
        return (
            <Parchment>
                <Outlet />
            </Parchment>
        )
}

export default CheckInRoot
