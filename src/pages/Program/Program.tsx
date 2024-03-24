import amblem_2023 from '@assets/image/2023_amblem.png'
import insigniaA from '@assets/image/insignia_a.svg'
import insigniaB from '@assets/image/insignia_b.svg'
import insigniaC from '@assets/image/insignia_c.svg'
import map from '@assets/image/program_map.png'
import widzard from '@assets/image/wizard.svg'
import Parchment from '@components/Parchment/Parchment'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import { PS } from '@pages/Program/Program.styled'
import styled, { css } from 'styled-components'

const Numbering = styled.span<{
    $color: 'a' | 'b' | 'c' | '마녀'
    count?: string
}>`
    --commonColor: #efb631;
    --size: 20px;
    width: var(--size);
    height: var(--size);
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 1px solid var(--commonColor);
    text-align: center;
    background-color: #08304d;
    transform: translateY(1px);
    &:after {
        content: ${(p) => `"${p.count ?? ''}"`};
        display: block;
        font-weight: 700;
        color: var(--commonColor);
        font-size: 1.2rem;
        transform: translateY(-0.5px);
    }

    ${(p) =>
        p.$color === 'a' &&
        css`
            background-color: #08304d;
        `}
    ${(p) =>
        p.$color === 'b' &&
        css`
            background-color: #043f21;
        `}
  ${(p) =>
        p.$color === 'c' &&
        css`
            background-color: #c14427;
        `}
  ${(p) =>
        p.$color === '마녀' &&
        css`
            background-image: url(${widzard});
            background-size: 100%;
        `}
`

const Program = () => {
    return (
        <Parchment>
            <PaperMainHeader.Block>
                <PaperMainHeader.Title>프로그램 안내</PaperMainHeader.Title>
            </PaperMainHeader.Block>
            <PS.Map
                src={map}
                alt='우아한청년들 마법의밤 프로그램 안내 상세 지역 이미지'
            />
            <PS.AreaInfoWrapper>
                <PS.AreaInfoBlock>
                    <img
                        src={insigniaA}
                        alt='휘장 A 이미지'
                    />
                    <ul>
                        <li>
                            <div className='title'>
                                <Numbering $color='마녀' />
                                <h3>로비 안내 데스크</h3>
                            </div>
                            <p>- 셀프 체크인 및 종합 안내</p>
                            <p>- 베스트드레서 후보 등록</p>
                        </li>
                        <li>
                            <div className='title'>
                                <Numbering
                                    $color='a'
                                    count='1'
                                />
                                <h3>대형 소원 트리</h3>
                            </div>
                            <p>
                                2024년 이루고 싶은 소망, <br /> 메시지카드 행잉 프로그램
                            </p>
                        </li>
                        <li>
                            <div className='title'>
                                <Numbering
                                    $color='a'
                                    count='2'
                                />
                                <h3>마법 포토부스</h3>
                            </div>
                            <p>
                                다양한 코스튬이 가능한 <br />
                                마법 인생네컷
                            </p>
                        </li>
                    </ul>
                </PS.AreaInfoBlock>
                <PS.AreaInfoBlock>
                    <img
                        src={insigniaB}
                        alt='휘장 A 이미지'
                    />
                    <ul>
                        <li>
                            <div className='title'>
                                <Numbering
                                    $color='b'
                                    count='3'
                                />
                                <h3>웰컴드링크 바</h3>
                            </div>
                            <p>
                                하이볼 위스키 칵테일 <br className='responsive' />
                                1인 2잔 제공 <br className='responsive' />
                                (현장시음 1잔 / 포션 1개)
                            </p>
                            <p className='golden_text'>
                                술을 못드시는 분들을 위해 <br className='responsive' />
                                논알콜 음료도 준비되어있어요.
                            </p>
                        </li>
                        <li>
                            <div className='title'>
                                <Numbering
                                    $color='b'
                                    count='4'
                                />
                                <h3>랜덤 포춘 캡슐 뽑기</h3>
                            </div>
                            <p>
                                캡슐 속에 담긴 랜덤 운세 뽑기 <br className='responsive' /> 프로그램
                            </p>
                        </li>
                        <li>
                            <div className='title'>
                                <Numbering
                                    $color='b'
                                    count='5'
                                />
                                <h3>마법 능력 테스트</h3>
                            </div>
                            <p>
                                지팡이를 정확히 휘둘러야 하는 <br className='responsive' />
                                고도의 집중력 테스트
                            </p>
                        </li>
                        <li>
                            <div className='title'>
                                <Numbering
                                    $color='b'
                                    count='6'
                                />
                                <h3>마법약방</h3>
                            </div>
                            <p>
                                내 무드에 따라 맞춤 마법약을 <br className='responsive' />
                                처방해주는 비밀의 약방
                            </p>
                        </li>
                        <li>
                            <div className='title'>
                                <Numbering
                                    $color='b'
                                    count='7'
                                />
                                <h3>골든 볼을 잡아라</h3>
                            </div>

                            <p>
                                몰아치는 강풍 속에서 <br className='responsive' /> 골든볼을 찾는 프로그램
                            </p>
                        </li>
                        <li>
                            <p className='golden_text noPadding'>
                                4, 5, 6, 7번 프로그램들은 참여 시 <br className='responsive' />
                                럭키드로우 추첨권을 드려요.
                            </p>
                        </li>
                    </ul>
                </PS.AreaInfoBlock>

                <PS.AreaInfoBlock>
                    <img
                        src={insigniaC}
                        alt='휘장 A 이미지'
                    />
                    <ul>
                        <li>
                            <div className='title'>
                                <Numbering
                                    $color='c'
                                    count='8'
                                />
                                <h3>2부 행사</h3>
                            </div>
                            <p>- 오프닝</p>
                            <p>- 전사발표</p>
                            <p>- 시상식</p>
                            <p>
                                - 만찬 <span className='span_golden_text'>(럭키드로우가 진행돼요)</span>
                            </p>
                        </li>
                    </ul>
                </PS.AreaInfoBlock>
            </PS.AreaInfoWrapper>
            <PS.SpecialProgram>
                <img
                    src={amblem_2023}
                    alt='2023 휘장'
                />
                <span className='font__hanna'>특별 프로그램</span>
                <h3 className='font__hanna'>
                    ‘우아한청년들 마법의밤’ <br className='responsive' />
                    럭키드로우 추첨권을 찾아라!
                </h3>
                <p>
                    A,B,C zone 곳곳에 숨겨진 <br className='responsive' />
                    럭키드로우 추첨권을 찾아주세요! <br className='responsive' />
                    갯수 제한은 없습니다! <br className='responsive' />
                    (많이 찾을 수록 좋아요)
                </p>
            </PS.SpecialProgram>
        </Parchment>
    )
}

export default Program
