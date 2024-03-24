import { StyledButton } from "@components/Button/Button";
import styled from "styled-components";

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
      font-size: 1.4rem;
      color: ${(p) => p.theme.colors.gold_text};
      padding-bottom: 80px;
    }
  }
  ${StyledButton} {
    margin-top: auto;
  }
`;

export const PS = {
  Container,
  Amblem,
};
