import styled from "styled-components";

const ClassImgWrapper = styled.div`
  img {
    width: 206px;
    height: 206px;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 60px;
  p {
    font-size: 2rem;
    font-weight: 400;
    font-family: "Hanna";
    text-align: center;
  }
`;

export const PS = {
  DescContainer,
  ClassImgWrapper,
};
