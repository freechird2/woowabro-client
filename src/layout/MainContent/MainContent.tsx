import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-inline: ${(p) => p.theme.size.container_padding_inline};
`;
