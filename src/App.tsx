import CheckIn from '@container/CheckIn/CheckIn'
import CheckInComplete from '@container/CheckInComplete/CheckInComplete'
import ClassTestCompleted from '@container/ClassTestCompleted/ClassTestCompleted'
import ClassTestDesc from '@container/ClassTestDesc/ClassTestDesc'
import ClassTestPaper from '@container/ClassTestPaper/ClassTestPaper'
import ClassTestResult from '@container/ClassTestResult/ClassTestResult'
import ClassTestStart from '@container/ClassTestStart/ClassTestStart'
import { Root } from '@layout/Root/Root'
import CheckInRoot from '@pages/Check-In/Check-In'
import CheckSeat from '@pages/Check-seat/Check-seat'
import ClassTest from '@pages/ClassTest/ClassTest'
import Coupon from '@pages/Coupon/Coupon'
import Faq from '@pages/Faq/Faq'
import Home from '@pages/Home/Home'
import Login from '@pages/Login/Login'
import Program from '@pages/Program/Program'
import TimeTable from '@pages/TimeTable/TimeTable'
import WayTocome from '@pages/WayToCome/WayToCome'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

export const ROUTER_PATH = {
    홈: '/home',
    오시는길: '/way-to-come',
    귀가_셔틀버스_시간표: '/time-table',
    자주묻는질문: '/faq',
    쿠폰: '/coupon',
    반배정_테스트: '/class_test',
    반배정_발표: '/class_test/result',
    프로그램_안내: '/program',
    셀프_체크인: '/check_in',
    셀프_체크인_완료: '/check_in/complete',
    내_좌석_확인: '/check_seat',
}

const ScrollTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname.includes('class_test/paper')) return
        window.scrollTo({ top: 0, left: 0 })
    }, [pathname])
    return null
}

export function App() {
    return (
        <BrowserRouter>
            <ScrollTop />
            <Routes>
                <Route
                    path='/'
                    element={<Root />}>
                    <Route
                        path=''
                        element={<Login />}
                    />
                </Route>
                <Route
                    path='/'
                    element={<Root isHeader />}>
                    <Route
                        path={ROUTER_PATH.홈}
                        element={<Home />}
                    />
                    <Route
                        path={ROUTER_PATH.오시는길}
                        element={<WayTocome />}
                    />
                    <Route
                        path={ROUTER_PATH.귀가_셔틀버스_시간표}
                        element={<TimeTable />}
                    />
                    <Route
                        path={ROUTER_PATH.쿠폰}
                        element={<Coupon />}
                    />
                    <Route
                        path={ROUTER_PATH.프로그램_안내}
                        element={<Program />}
                    />
                    <Route
                        path={ROUTER_PATH.반배정_테스트}
                        element={<ClassTest />}>
                        <Route
                            path=''
                            element={<ClassTestStart />}
                        />
                        <Route
                            path='paper/:id'
                            element={<ClassTestPaper />}
                        />
                        <Route
                            path='completed'
                            element={<ClassTestCompleted />}
                        />
                        <Route
                            path='result'
                            element={<ClassTestResult />}
                        />
                        <Route
                            path='desc'
                            element={<ClassTestDesc />}
                        />
                    </Route>
                    <Route
                        path={ROUTER_PATH.셀프_체크인}
                        element={<CheckInRoot />}>
                        <Route
                            path=''
                            element={<CheckIn />}
                        />
                        <Route
                            path='complete'
                            element={<CheckInComplete />}
                        />
                    </Route>
                    <Route
                        path={ROUTER_PATH.내_좌석_확인}
                        element={<CheckSeat />}
                    />
                    <Route
                        path={ROUTER_PATH.자주묻는질문}
                        element={<Faq />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
