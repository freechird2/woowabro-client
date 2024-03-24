import banner from '@assets/image/home_banner.png'
import IMG from '@assets/image/home_img.png'
import poster from '@assets/image/thumbnail.png'
import videoPlay from '@assets/image/video_play.svg'
import teaser from '@assets/video/teaser.mp4'
import Parchment from '@components/Parchment/Parchment'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import ClassTestDesc from '@container/ClassTestDesc/ClassTestDesc'
import { useRef, useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Video = styled.div`
    position: relative;
    aspect-ratio: 16/9;
    .thumbnail {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100;
        background-image: url(${poster});
        background-size: cover;
        z-index: 1;
        button {
            width: 56px;
            height: 56px;
            aspect-ratio: 1/1;
            background-image: url(${videoPlay});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
    video {
        display: block;
        width: 100%;
        height: 100%;
    }
`
const Paragraph = styled.div`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    word-break: keep-all;
    strong {
        font-size: inherit;
        font-weight: 700;

        color: ${(p) => p.theme.colors.green_title};
    }
`
const Img = styled.img``
const Banner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    aspect-ratio: 300/84;
    background-image: url(${banner});
    background-size: 100%;
`

const Home = () => {
    const vidoeRef = useRef<HTMLVideoElement>(null)
    const [play, setPlay] = useState<boolean>(false)

    const checkOs = () => {
        const varUA = navigator.userAgent.toLowerCase() //userAgent 값 얻기

        if (varUA.indexOf('android') > -1) {
            //안드로이드
            return 'android'
        } else if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
            //IOS
            return 'ios'
        } else {
            //아이폰, 안드로이드 외
            return 'other'
        }
    }
    const playVideo = () => {
        if (vidoeRef.current) {
            vidoeRef.current.play()
            setPlay(true)
        }
        if (checkOs() === 'android') {
            vidoeRef.current?.requestFullscreen()
        }
    }

    return (
        <Parchment>
            <PaperMainHeader.Block>
                <PaperMainHeader.Title>
                    2023
                    <br />
                    우아한청년들 마법의밤
                </PaperMainHeader.Title>
            </PaperMainHeader.Block>
            <Container>
                <Video>
                    {!play && (
                        <div
                            className='thumbnail'
                            title='우아한청년들 마법의 밤 티저 비디오 포스터'>
                            <button
                                type='button'
                                onClick={playVideo}
                            />
                        </div>
                    )}
                    <video
                        controls
                        ref={vidoeRef}
                        onTimeUpdate={(e) => {
                            if (e.currentTarget.duration === e.currentTarget.currentTime) {
                                setPlay(false)
                            }
                        }}>
                        <source
                            src={teaser}
                            type='video/mp4'
                        />
                    </video>
                </Video>
                <Paragraph>
                    내가 하는 일들이 새로운 물류의 기준이 되는 <br className='responsive' />
                    <strong> 비범한 능력</strong>을 가진 우아한청년들 <br />
                    <br /> 2023년에도 마법같은 능력들을 선보인
                    <br className='responsive' /> 우리 모두를 위해 특별한 자리를 준비했어요
                </Paragraph>
                <Img
                    src={IMG}
                    alt=''
                />
                <Banner />
                <div>
                    <ClassTestDesc renderAtHome />
                </div>
            </Container>
        </Parchment>
    )
}

export default Home
