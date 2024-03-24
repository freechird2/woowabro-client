import Baedalee from '@assets/image/class_baedalee.png'
import Bongdari from '@assets/image/class_bongdari.png'
import Jangbaguni from '@assets/image/class_jangbaguni.png'
import Odobye from '@assets/image/class_odobye.png'
import Button from '@components/Button/Button'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import { ROUTER_PATH } from 'App'
import { useAuth } from 'AuthProvider'
import { useNavigate } from 'react-router-dom'
import { PS } from './CheckInComplete.styled'

const CheckInComplete = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const classImage =
        user?.className === '배달이'
            ? Baedalee
            : user?.className === '봉다리'
            ? Bongdari
            : user?.className === '장바구니'
            ? Jangbaguni
            : user?.className === '오도바이'
            ? Odobye
            : ''

    return (
        <>
            <PaperMainHeader.Block>
                <PaperMainHeader.Title>셀프 체크인 완료</PaperMainHeader.Title>
            </PaperMainHeader.Block>
            <PS.DescContainer>
                <PS.ClassImgWrapper>
                    <img
                        src={classImage}
                        alt=''
                    />
                </PS.ClassImgWrapper>
                <p className='user'>{user?.name} 님 환영해요.</p>
                <p className='desc'>
                    아래 버튼을 눌러
                    <br />
                    웰컴드링크 쿠폰을 받아보세요.
                </p>
            </PS.DescContainer>
            <Button
                $color='navy_title'
                onClick={() => navigate(ROUTER_PATH.쿠폰)}>
                쿠폰 받기
            </Button>
        </>
    )
}

export default CheckInComplete
