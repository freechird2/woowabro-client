import styled from "styled-components";
import top from "@assets/image/choice_top.svg";
import left from "@assets/image/choice_left.svg";
import bottom from "@assets/image/choice_bottom.svg";
import right from "@assets/image/choice_right.svg";
import middle from "@assets/image/choice_middle.svg";
import dokgo from "@assets/image/dokgo.png";
const ItemBorderBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  inset: 0;
  height: 100%;
  &:before,
  &:after {
    content: "";
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &:before {
    height: 3px;
    background-image: url(${top});
  }
  &:after {
    height: 2px;
    background-image: url(${bottom});
  }
`;
const ItemBorderInline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  overflow: hidden;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 2px;
    height: 200%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &:before {
    background-image: url(${left});
  }
  &:after {
    background-image: url(${right});
  }
`;
const ItemBorderContent = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  width: 100%;

  gap: 6px;
  padding: 24px 12px;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background-image: url(${middle});
    background-size: 100%;
    background-repeat: no-repeat;
  }
  &:before {
    top: 10px;
  }
  &:after {
    bottom: 10px;
  }
  img {
    width: 40px;
    aspect-ratio: 1/1;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.4;
    font-weight: 500;
    word-break: keep-all;
  }
`;
export const ItemBorderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #efb631;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

interface Props {
  question: string;
  active: boolean;
  onClick: () => void;
}
const ChoiceItem = ({ question, active, onClick }: Props) => {
  return (
    <ItemBorderContainer className={active ? "active" : ""} onClick={onClick}>
      <ItemBorderBlock />
      <ItemBorderInline />

      <ItemBorderContent>
        <img src={dokgo} alt="독고배달" />
        <p>{question}</p>
      </ItemBorderContent>
    </ItemBorderContainer>
  );
};

export default ChoiceItem;
