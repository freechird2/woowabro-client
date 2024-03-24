import { S } from '@layout/Header/Header.styled'
import Nav from '@layout/Nav/Nav'
import Portal from '@layout/Portal/Portal'
import { navState } from '@recoil/atom/nav'
import { ROUTER_PATH } from 'App'
import { useAuth } from 'AuthProvider'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
const Header = () => {
    const { user } = useAuth()
    const setOpenNav = useSetRecoilState<boolean>(navState)
    useEffect(() => {
        setOpenNav(false)
    }, [])
    return (
        <>
            <S.Container>
                <S.ToHomeLogo to={ROUTER_PATH.홈} />
                <div className='menuBlock'>
                    {user?.checkinAt && <S.Coupon to={ROUTER_PATH.쿠폰} />}
                    <S.Hanmburger
                        type='button'
                        onClick={() => setOpenNav(true)}
                    />
                </div>
            </S.Container>

            <Portal components={<Nav />} />
        </>
    )
}

export default Header
