import map from '@assets/image/map.png'
import Button from '@components/Button/Button'
import Parchment from '@components/Parchment/Parchment'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import { PS } from '@pages/WayToCome/WayToCome.styled'

const WayTocome = () => {
    return (
        <Parchment>
            <PaperMainHeader.Block>
                <PaperMainHeader.Title>마법의밤 오시는 길</PaperMainHeader.Title>
            </PaperMainHeader.Block>
            <PS.Map
                src={map}
                alt=''
            />
            <PS.MapButtonGroup>
                <Button onClick={() => window.open(`https://kko.to/Y3_p8TGO0O`)}>카카오맵</Button>
                <Button
                    onClick={() =>
                        window.open(`https://m.place.naver.com/place/34698773/location?subtab=location&selected_place_id=34698773`)
                    }>
                    네이버지도
                </Button>
            </PS.MapButtonGroup>
            <PS.Address>
                서울 서초구 올림픽대로 2085-14 <br />
                세빛섬 플로팅 아일랜드 컨벤션 2F
            </PS.Address>
            <PS.PublicTransportation>
                <h3>[지하철]</h3>
                <ul>
                    <li>3, 7, 9호선 고속터미널역 8-1, 8-2번 출구</li>
                    <li>4호선 동작역 1, 2번 출구 → 반포천하류 방향</li>
                    <li>9호선 신반포역 1번 출구 → 반포중학교 방향</li>
                    <li>9호선 구반포역 2번출구 → 올림픽대로 진입로 방향</li>
                </ul>

                <h3>[버스]</h3>
                <ul>
                    <li>8340, 405, 730번 반포한강공원 정거장 하차</li>
                </ul>

                <h3>[자가용]</h3>
                <ul>
                    <li>
                        올림픽대로 잠실방향 : 한남대교 남단램프 → <br /> 김포공항 방향 올림픽대로 진입
                    </li>
                    <li>
                        올림픽대로 공항방향 : 반포대교 지나 <br /> 반포2주차장 주차
                    </li>
                    <li className='golden_text'>
                        네비게이션 : 세빛섬 또는 반포한강공원 <br /> 2주차장을 검색하세요.
                    </li>
                    <li className='golden_text'>
                        주차장이 협소한 관계로 가급적 대중교통을 <br /> 이용바랍니다.
                    </li>
                </ul>
            </PS.PublicTransportation>
        </Parchment>
    )
}

export default WayTocome
