import styled from "styled-components";
import borderImage from "@assets/image/border_image.svg";
const Map = styled.img`
  aspect-ratio: 333/358;
  display: block;
  margin: 0 -16px;

  width: calc(100% + 32px);
  max-block-size: initial;
  max-inline-size: initial;
  margin-bottom: 30px;
`;

const MapButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 30px;
  > button {
    flex: 1;
  }
`;
const Address = styled.address`
  display: block;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  padding-bottom: 30px;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-image: url(${borderImage});
    background-size: contain;
  }
  &:before {
    margin-bottom: 14px;
  }
  &:after {
    margin-top: 14px;
  }
`;

const PublicTransportation = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 12px;
  }
  ul {
    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
    li {
      display: flex;
      align-items: first baseline;
      font-size: 1.5rem;
      &:before {
        content: "●";
        display: block;
        color: inherit;
        width: 3px;
        margin-right: 6px;

        transform: scale(0.3);
        transform-origin: left;
      }
      &:not(:last-of-type) {
        padding-bottom: 6px;
      }

      &.golden_text {
        color: ${(p) => p.theme.colors.gold_text};

        &:before {
          content: "*";
          transform: initial;
          transform: translateY(2.5px);
        }
      }
    }
  }
`;
export const PS = {
  Map,
  MapButtonGroup,
  Address,
  PublicTransportation,
};
