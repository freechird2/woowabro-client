import paper_texture from '@assets/image/paper_texture.png'
import PaperForm from '@container/LoginPaperForm/PaperForm'
import Layout from '@layout/index'
import { PS } from '@pages/Login/Login.styled'
const Login = () => {
    return (
        <>
            <Layout.Content>
                <PS.Container>
                    <PS.Letter>
                        <PS.Paper>
                            <PS.PaperTexture
                                src={paper_texture}
                                alt='우아한청년들 마법의 밥 로고'
                            />
                            <PS.MainLogo title='우아한청년들 마법의밤 로고' />
                            <PS.P>
                                구성원 인증을 위해 <br /> 아래정보를 입력해주세요. <br />
                                <span>
                                    * 본 사이트는 모바일기기에 최적화되어 <br />
                                    구성되었습니다.
                                </span>
                            </PS.P>
                            <PaperForm />
                        </PS.Paper>
                        <PS.Cover />
                    </PS.Letter>
                </PS.Container>
            </Layout.Content>
            <Layout.Footer />
        </>
    )
}

export default Login
