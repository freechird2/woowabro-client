import styled from "styled-components";
const CheckinInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 60px;
  p {
    font-size: 3rem;
    font-family: "Hanna";
    &:after {
      display: inline-block;
      font-size: 1.6rem;
      font-weight: 700;
      transform: translateY(-3px);
      margin-left: 8px;
    }
  }
  .name::after {
    content: "님";
  }

  .class {
    /* display: flex; */
    /* align-items: center; */
    color: ${(p) => p.theme.colors.deep_green};
  }

  .class:after {
    content: "반";
  }

  .BONGDARI {
    color: #003c93;
  }
  .JANGBAGUNI {
    color: #69197c;
  }
  .BAEDALEE {
    color: #b21900;
  }
  .ODOBYE {
    color: #004828;
  }
`;

const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  padding-bottom: 60px;
  p {
    font-size: 1.6rem;

    &.golden {
      color: ${(p) => p.theme.colors.gold_text};
      font-size: 1.3rem;
    }
  }
`;

export const PS = {
  CheckinInfo,
  DescBlock,
};
