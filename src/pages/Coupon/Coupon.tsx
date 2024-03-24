import API from '@api/index'
import Parchment from '@components/Parchment/Parchment'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import useTMutation from '@hooks/useTMutation'
import useGetQuery from '@hooks/useTQuery'
import { GenericResponse } from '@model/Common'
import { CouponResponseModel } from '@model/Coupon'
import { PS } from '@pages/Coupon/Coupon.styled'
import { useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

const Coupon = () => {
    const queryClient = useQueryClient()

    const { data: couponList } = useGetQuery({
        queryKey: ['@getCoupon'],
        queryFn: () => API.user.getCoupon(),
        select: (res: GenericResponse) => {
            return res.data as CouponResponseModel[]
        },
    })

    const { mutate: useCoupon } = useTMutation({
        mutationFn: (id: number) => API.user.useCoupon(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['@getCoupon'] })
        },
        onError: (err: AxiosError) => {
            alert(err.message)
        },
    })

    const findCoupon = (type: 'drink' | 'pouch') => {
        if (!couponList) return null

        return couponList.find((c) => c.type === type)
    }

    const onUseCoupon = (coupon: CouponResponseModel | null | undefined) => {
        if (!coupon || coupon.isUse === 'Y') return

        useCoupon(coupon.id)
    }

    if (!couponList) return <></>
    else
        return (
            <Parchment>
                <PaperMainHeader.Block>
                    <PaperMainHeader.Title>웰컴드링크 쿠폰</PaperMainHeader.Title>
                </PaperMainHeader.Block>
                <PS.DescBlock>
                    <p>
                        웰컴드링크 존에서 쿠폰을 보여주시면 <br /> 웰컴드링크 두 잔을 드려요.
                    </p>
                    <p className='golden'>확인 버튼은 스태프가 클릭하게 해주세요.</p>
                </PS.DescBlock>
                <PS.CouponImgBlock>
                    <div
                        className={`coupon drink ${findCoupon('drink')?.isUse === 'N' ? '' : 'disabled'}`}
                        role='button'
                        onClick={() => onUseCoupon(findCoupon('drink'))}
                        title='현장시음을 위한 웰컴 드링크 1잔 쿠폰'
                    />
                    <div
                        className={`coupon pouch ${findCoupon('pouch')?.isUse === 'N' ? '' : 'disabled'}`}
                        role='button'
                        onClick={() => onUseCoupon(findCoupon('pouch'))}
                        title='파우치을료를 위한 웰컴 드링크 1잔 쿠폰'
                    />
                </PS.CouponImgBlock>
            </Parchment>
        )
}

export default Coupon
