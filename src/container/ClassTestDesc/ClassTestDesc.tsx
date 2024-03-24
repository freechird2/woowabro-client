import AllClass from "@components/AllClass/AllClass";
import Button from "@components/Button/Button";
import { PaperMainHeader } from "@components/Parchment/Parchment.styled";
import { S } from "@container/ClassTestDesc/ClassTestDesc.styled";
import { ROUTER_PATH } from "App";
import { useAuth } from "AuthProvider";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  padding-bottom: 40px;
  strong {
    font-weight: 700;
    font-size: inherit;
    color: ${(p) => p.theme.colors.deep_green};
  }
`;
interface ClassTestDescProps {
  renderAtHome?: boolean;
}
const ClassTestDesc = ({ renderAtHome }: ClassTestDescProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <>
      <PaperMainHeader.Block>
        <PaperMainHeader.Title>반별 소개</PaperMainHeader.Title>
      </PaperMainHeader.Block>
      <Paragraph>
        우아한청년들 마법의밤은 <br />
        <strong>4가지 반</strong>으로 운영됩니다.
      </Paragraph>
      <AllClass />
      {renderAtHome ? (
        <>
          {user?.projectStatus === "사전예약중" && (
            <>
              <S.Text></S.Text>
              <Button
                isborder
                onClick={() => {
                  if (user.testAt)
                    navigate(`${ROUTER_PATH.반배정_테스트}/completed`);
                  else navigate(ROUTER_PATH.반배정_테스트);
                }}
              >
                반배정 테스트하기
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <S.Text>드레스코드에 참고해주세요:)</S.Text>
          <Button onClick={() => navigate(ROUTER_PATH.홈)}>홈으로 이동</Button>
        </>
      )}
    </>
  );
};

export default ClassTestDesc;
