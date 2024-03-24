import styled from "styled-components";
import amblem_2023 from "@assets/image/2023_amblem.png";
import Button from "@components/Button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "App";
const Amblem = styled.img`
  width: 80px;
  aspect-ratio: 80/85;
  margin-inline: auto;
  margin-bottom: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    font-size: 3.4rem;
    color: ${(p) => p.theme.colors.green_title};
    text-align: center;
    padding-bottom: 12px;
  }
  p {
    font-size: 1.6rem;
    text-align: center;
    &:not(.golden_text) {
      padding-bottom: 50px;
    }
    &.golden_text {
      font-size: 1.5rem;
      color: ${(p) => p.theme.colors.gold_text};
      padding-bottom: 80px;
    }
  }
`;

const ClassTestStart = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Amblem src={amblem_2023} alt="" />

      <h1 className="font__hanna">반배정 테스트</h1>
      <p>나는 어떤 반에 어울리는 마법사일까요?</p>
      <p className="golden_text">
        테스트 도중 페이지를 벗어나면 <br />
        처음부터 다시 시작돼요!
      </p>
      {/* 도중 이탈시 진행했던 문제부터 다시풀기 */}
      <Button
        onClick={() => navigate(`${ROUTER_PATH.반배정_테스트}/paper/${1}`)}
      >
        테스트 시작
      </Button>
    </Container>
  );
};

export default ClassTestStart;
