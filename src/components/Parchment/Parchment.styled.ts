import styled from "styled-components";
import paperHead from "@assets/image/paper_head.png";
import paperBody from "@assets/image/paper_body.png";
import paperTail from "@assets/image/paper_tail.png";
const PaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 16px);
  margin: 10px auto 60px;
  flex: 1;
`;
const PaperHead = styled.div`
  aspect-ratio: 450/100;
  background-image: url(${paperHead});
  background-size: 100%;
`;
const PaperMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${paperBody});
  background-size: 100%;
  padding-inline: ${(p) => p.theme.size.paper_padding_inline};
  padding-bottom: 40px;
`;
const PaperFooter = styled.div`
  background-size: 100%;
  background-image: url(${paperTail});
  aspect-ratio: 450/122;
`;

export const S = {
  PaperHead,
  PaperFooter,
  PaperMain,
  PaperContainer,
};

export const Block = styled.div`
  padding-bottom: 20px;
`;
export const Title = styled.h1.attrs(() => ({
  className: "font__hanna",
}))`
  font-size: 2.6rem;
  text-align: center;
  color: ${(p) => p.theme.colors.green_title};
`;

export const PaperMainHeader = {
  Block,
  Title,
};
