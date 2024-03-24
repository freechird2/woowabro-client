import classA from '@assets/image/class_symbol_1.png'
import classB from '@assets/image/class_symbol_2.png'
import classC from '@assets/image/class_symbol_3.png'
import classD from '@assets/image/class_symbol_4.png'
import styled from 'styled-components'
const ClassItem = styled.li`
    flex: 1 0 calc(50% - 8px);
    text-align: center;
    img {
        margin-bottom: 12px;
    }
    h3 {
        font-size: 1.4rem;
        padding-bottom: 4px;
    }
    strong {
        font-size: 2rem;
        &.blue {
            color: #003c93;
        }
        &.red {
            color: #b21900;
        }
        &.purple {
            color: #69197c;
        }
        &.green {
            color: #004828;
        }
    }
`

const ClassList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 16px 14px;
`

const AllClass = () => {
    return (
        <ClassList>
            <ClassItem>
                <img
                    src={classA}
                    alt='BONGDARI(봉다리)'
                />
                <h3 className='font__hanna'>BONGDARI(봉다리)</h3>
                <strong className='blue font__hanna'>블루</strong>
            </ClassItem>
            <ClassItem>
                <img
                    src={classC}
                    alt='BAEDALEE(배달이)'
                />
                <h3 className='font__hanna'>BAEDALEE(배달이)</h3>
                <strong className='red font__hanna'>레드</strong>
            </ClassItem>
            <ClassItem>
                <img
                    src={classB}
                    alt='JANGBAGUNI(장바구니)'
                />
                <h3 className='font__hanna'>JANGBAGUNI(장바구니)</h3>
                <strong className='purple font__hanna'>퍼플</strong>
            </ClassItem>
            <ClassItem>
                <img
                    src={classD}
                    alt='DOBYE(오도바이)'
                />
                <h3 className='font__hanna'>ODOBYE(오도바이)</h3>
                <strong className='green font__hanna'>그린</strong>
            </ClassItem>
        </ClassList>
    )
}

export default AllClass
