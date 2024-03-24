import Button from '@components/Button/Button'
import { S } from '@layout/Nav/Nav.Styled'
import { navState } from '@recoil/atom/nav'
import { variants } from '@styles/variants'
import { ROUTER_PATH } from 'App'
import { useAuth } from 'AuthProvider'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

const Nav = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const [openNav, setOpenNav] = useRecoilState<boolean>(navState)
    const [today, setToday] = useState<Date>(new Date())
    const [eventDay, setEventDay] = useState<Date>(new Date('2023-12-14 00:00:00'))

    //현재 페이지인지 체크함수
    const isActive = (pathname: string) => {
        return window.location.pathname === pathname
    }

    const onClickMovePage = (path: string) => {
        setOpenNav(false)
        setTimeout(() => {
            navigate(path)
        }, 200)
    }

    useEffect(() => {
        if (openNav) {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [openNav])

    return (
        <AnimatePresence>
            {openNav && (
                <S.Container>
                    <S.Dimmer
                        onClick={() => setOpenNav(false)}
                        variants={variants.fadeInOut}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    />
                    <S.Content
                        variants={variants.navToggle}
                        initial='initial'
                        animate='animate'
                        exit='exit'>
                        <S.Parchment>
                            <S.CloseButton
                                type='button'
                                onClick={() => setOpenNav(false)}
                            />
                            <S.MenuGroup>
                                <button
                                    type='button'
                                    className={`font__hanna ${isActive(ROUTER_PATH.프로그램_안내) ? ' active' : ''}`}
                                    onClick={() => onClickMovePage(ROUTER_PATH.프로그램_안내)}>
                                    프로그램 안내
                                </button>
                                <button
                                    type='button'
                                    className={`font__hanna ${isActive(ROUTER_PATH.오시는길) ? ' active' : ''}`}
                                    onClick={() => onClickMovePage(ROUTER_PATH.오시는길)}>
                                    오시는길
                                </button>
                                <button
                                    type='button'
                                    className={`font__hanna ${isActive(ROUTER_PATH.귀가_셔틀버스_시간표) ? ' active' : ''}`}
                                    onClick={() => onClickMovePage(ROUTER_PATH.귀가_셔틀버스_시간표)}>
                                    귀가 셔틀버스 시간표
                                </button>
                            </S.MenuGroup>
                            <S.ButtonGroup>
                                {user?.projectStatus === '사전예약중' && (
                                    <Button
                                        isborder
                                        onClick={() => {
                                            if (user.testAt) onClickMovePage(`${ROUTER_PATH.반배정_테스트}/completed`)
                                            else onClickMovePage(ROUTER_PATH.반배정_테스트)
                                        }}>
                                        반배정 테스트하기
                                    </Button>
                                )}
                                {user?.projectStatus === '배정완료' && (
                                    <Button
                                        isborder
                                        onClick={() => onClickMovePage(`${ROUTER_PATH.반배정_테스트}/result`)}>
                                        반배정 결과 발표
                                    </Button>
                                )}
                                {user?.projectStatus === '행사중' && (
                                    <Button
                                        isborder
                                        onClick={() => onClickMovePage(`${ROUTER_PATH.내_좌석_확인}`)}>
                                        내 좌석 확인하기
                                    </Button>
                                )}
                            </S.ButtonGroup>
                            <S.FooterMenuGroup>
                                <button onClick={() => onClickMovePage(ROUTER_PATH.자주묻는질문)}>자주묻는질문</button>
                                <i />
                                <button
                                    type='button'
                                    onClick={logout}>
                                    로그아웃
                                </button>
                            </S.FooterMenuGroup>
                        </S.Parchment>
                    </S.Content>
                </S.Container>
            )}
        </AnimatePresence>
    )
}

export default Nav
