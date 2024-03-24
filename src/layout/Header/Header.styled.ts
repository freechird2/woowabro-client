import { Link } from "react-router-dom";
import styled from "styled-components";
import header_logo from "@assets/image/header_logo.png";
import coupon_menu from "@assets/image/coupon_menu.png";
import hamburger_menu from "@assets/image/hamburger_menu.png";
const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(p) => p.theme.size.header_height};
  padding-inline: ${(p) => p.theme.size.container_padding_inline};
  .menuBlock {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
const ToHomeLogo = styled(Link)`
  display: block;
  width: 193.5px;
  aspect-ratio: 193.5/20;

  background-image: url(${header_logo});
  background-repeat: no-repeat;
  background-size: 100%;
  @media screen and (max-width: 374px) {
    width: 170px;
  }
`;

const Coupon = styled(Link)`
  --size: 36px;
  width: var(--size);
  height: var(--size);
  background-image: url(${coupon_menu});
  background-size: 100%;
`;

const Hanmburger = styled.button`
  --size: 32px;
  width: var(--size);
  height: var(--size);
  background-image: url(${hamburger_menu});
  background-size: 100%;
  cursor: pointer;
`;
export const S = {
  Container,
  ToHomeLogo,
  Coupon,
  Hanmburger,
};
