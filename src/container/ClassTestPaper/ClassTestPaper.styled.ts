import { ItemBorderContainer } from "@components/ChoiceItem/ChoiceItem";
import styled from "styled-components";

const Container = styled.div``;
const Progress = styled.div<{ step: number }>`
  position: relative;
  background-color: #92856a;
  height: 10px;
  border-radius: 999px;
  transform-origin: left;
  margin-bottom: 32px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: inherit;
    border-radius: inherit;
    width: ${(p) => `calc(100% / 9 * ${p.step})`};
    transition: 0.1s;
    background-color: ${(p) => p.theme.colors.green_title};
  }
`;
const ChoiceItem = styled.div``;

const Question = styled.div`
  padding-bottom: 40px;
  h1 {
    padding-bottom: 12px;
    font-size: 2rem;
    color: ${(p) => p.theme.colors.green_title};
    text-align: center;
  }
  p {
    word-break: keep-all;
    white-space: pre-wrap;
    margin-inline: auto;
    font-size: 2.2rem;
    text-align: center;
  }
`;

const ChoiceItemWrapper = styled.div`
  padding-bottom: 40px;
  &:has(.active) {
    ${ItemBorderContainer} {
      &:after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
      }
      &.active {
        background-color: #08304d;
        p {
          color: #fff;
        }
      }
      &:not(.active) {
        &:after {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`;
export const S = {
  Container,
  Progress,
  ChoiceItem,
  Question,
  ChoiceItemWrapper,
};
