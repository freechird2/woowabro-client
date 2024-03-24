import Parchment from '@components/Parchment/Parchment'
import { PaperMainHeader } from '@components/Parchment/Parchment.styled'
import { PS } from '@pages/TimeTable/TimeTable.styled'
import { TIME_TABLE } from '@pages/TimeTable/TimeTableData'

const TimeTable = () => {
    return (
        <Parchment>
            <PaperMainHeader.Block>
                <PaperMainHeader.Title>셔틀버스 운행정보</PaperMainHeader.Title>
            </PaperMainHeader.Block>
            <PS.Notice>
                <p>
                    셔틀버스 탑승을 원하시는 분은
                    <br className='responsive' /> <strong>18시 20분</strong>까지 2층 로비 안내 데스크
                    <br className='responsive' />
                    앞으로 와주세요! <br />
                    <br />
                    인솔 스태프의 안내에 따라 <br className='responsive' />
                    셔틀버스 정거장으로 다함께 이동할게요.
                </p>
            </PS.Notice>
            <PS.Table>
                <PaperMainHeader.Block>
                    <PaperMainHeader.Title>버스 시간표</PaperMainHeader.Title>
                </PaperMainHeader.Block>
                <table>
                    <thead>
                        <tr>
                            <th className='font__hanna'>버스 번호</th>
                            <th className='font__hanna'>목적지</th>
                            <th className='font__hanna'>출발</th>
                            <th className='font__hanna'>도착</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TIME_TABLE.map((_) => {
                            return (
                                <tr key={_.id}>
                                    <td>{_.id}번</td>
                                    <td>{_.destination}</td>
                                    <td>{_.depart}</td>
                                    <td>{_.arrive}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <p> 셔틀버스 운행은 교통 상황에 따라 변동될 수 있습니다.</p>
            </PS.Table>
        </Parchment>
    )
}

export default TimeTable
